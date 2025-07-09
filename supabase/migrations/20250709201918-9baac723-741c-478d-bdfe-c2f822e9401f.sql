-- Create a simple config table if needed for future settings
CREATE TABLE IF NOT EXISTS public.chatbot_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chatbot_config ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to config
CREATE POLICY "Config is viewable by everyone" 
ON public.chatbot_config 
FOR SELECT 
USING (true);