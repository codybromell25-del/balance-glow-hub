-- Add purchase_link column to class_packs table
ALTER TABLE public.class_packs 
ADD COLUMN purchase_link text DEFAULT 'https://momence.com/sign-up/visitor';

-- Add purchase_link column to memberships table
ALTER TABLE public.memberships 
ADD COLUMN purchase_link text DEFAULT 'https://momence.com/sign-up/visitor';