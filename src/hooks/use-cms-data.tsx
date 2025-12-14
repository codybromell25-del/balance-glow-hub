import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Hero Content
export function useHeroContent() {
  return useQuery({
    queryKey: ["hero-content"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("hero_content")
        .select("*")
        .limit(1)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
  });
}

// Intro Offer
export function useIntroOffer() {
  return useQuery({
    queryKey: ["intro-offer"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("intro_offer")
        .select("*")
        .eq("is_active", true)
        .limit(1)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
  });
}

// Class Packs
export function useClassPacks() {
  return useQuery({
    queryKey: ["class-packs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("class_packs")
        .select("*")
        .eq("is_active", true)
        .order("display_order");
      
      if (error) throw error;
      return data || [];
    },
  });
}

// Memberships
export function useMemberships() {
  return useQuery({
    queryKey: ["memberships"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("memberships")
        .select("*")
        .eq("is_active", true)
        .order("display_order");
      
      if (error) throw error;
      return data || [];
    },
  });
}

// Class Types
export function useClassTypes() {
  return useQuery({
    queryKey: ["class-types"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("class_types")
        .select("*")
        .eq("is_active", true)
        .order("display_order");
      
      if (error) throw error;
      return data || [];
    },
  });
}

// Testimonials
export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .order("display_order");
      
      if (error) throw error;
      return data || [];
    },
  });
}

// Studios
export function useStudios() {
  return useQuery({
    queryKey: ["studios"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("studios")
        .select("*")
        .eq("is_active", true)
        .order("display_order");
      
      if (error) throw error;
      return data || [];
    },
  });
}

// About Content
export function useAboutContent() {
  return useQuery({
    queryKey: ["about-content"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("about_content")
        .select("*")
        .order("display_order");
      
      if (error) throw error;
      return data || [];
    },
  });
}
