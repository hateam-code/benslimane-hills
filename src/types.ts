/**
 * Shared TypeScript definitions for Benslimane Hills
 */

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  preferredContact?: 'phone' | 'email' | 'whatsapp';
  message?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export interface InvestmentFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface PlanMasseLegend {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
