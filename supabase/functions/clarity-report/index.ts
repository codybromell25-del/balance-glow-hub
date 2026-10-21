import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3'

const ClarityQuerySchema = z.object({
  numOfDays: z.coerce.number().int().min(1).max(3).optional().default(3),
  dimensions: z.array(z.enum([
    'Browser', 'Device', 'Country/Region', 'OS', 'Source', 'Medium', 'Campaign', 'Channel', 'URL',
  ])).min(1).max(3).optional().default(['Device']),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    let params: z.infer<typeof ClarityQuerySchema>;
    if (req.method === 'POST') {
      const parsed = ClarityQuerySchema.safeParse(await req.json().catch(() => ({})));
      if (!parsed.success) {
        return new Response(JSON.stringify({ error: 'Invalid request', details: parsed.error.flatten() }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      params = parsed.data;
    } else {
      const url = new URL(req.url);
      const parsed = ClarityQuerySchema.safeParse({
        numOfDays: url.searchParams.get('numOfDays') ?? undefined,
        dimensions: url.searchParams.get('dimensions')?.split(',').filter(Boolean) ?? undefined,
      });
      if (!parsed.success) {
        return new Response(JSON.stringify({ error: 'Invalid request', details: parsed.error.flatten() }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      params = parsed.data;
    }

    const token = Deno.env.get('CLARITY_API_TOKEN');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Clarity token not configured' }), {
        status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const clarityUrl = new URL('https://www.clarity.ms/export-data/api/v1/project-live-insights');
    clarityUrl.searchParams.set('numOfDays', String(params.numOfDays));
    if (params.dimensions[0]) clarityUrl.searchParams.set('dimension1', params.dimensions[0]);
    if (params.dimensions[1]) clarityUrl.searchParams.set('dimension2', params.dimensions[1]);
    if (params.dimensions[2]) clarityUrl.searchParams.set('dimension3', params.dimensions[2]);

    const clarityRes = await fetch(clarityUrl.toString(), {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!clarityRes.ok) {
      const errorBody = await clarityRes.text();
      console.error(`Clarity request failed [${clarityRes.status}]: ${errorBody}`);
      return new Response(JSON.stringify({ error: 'Clarity request failed', status: clarityRes.status, details: errorBody }), {
        status: clarityRes.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await clarityRes.json();
    return new Response(JSON.stringify({ numOfDays: params.numOfDays, dimensions: params.dimensions, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('clarity-report error:', e);
    return new Response(JSON.stringify({ error: 'Unexpected error', details: String(e) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
