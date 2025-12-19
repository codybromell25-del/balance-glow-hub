-- Drop all RLS policies that depend on has_role function first
DROP POLICY IF EXISTS "Admins can manage about content" ON public.about_content;
DROP POLICY IF EXISTS "Admins can manage class types" ON public.class_types;
DROP POLICY IF EXISTS "Admins can manage studios" ON public.studios;
DROP POLICY IF EXISTS "Admins can manage testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Admins can manage hero content" ON public.hero_content;
DROP POLICY IF EXISTS "Admins can manage class packs" ON public.class_packs;
DROP POLICY IF EXISTS "Admins can manage intro offer" ON public.intro_offer;
DROP POLICY IF EXISTS "Admins can manage memberships" ON public.memberships;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

-- Drop the has_role function
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role);

-- Drop the user_roles table
DROP TABLE IF EXISTS public.user_roles;

-- Drop the app_role enum type
DROP TYPE IF EXISTS public.app_role;