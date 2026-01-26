export interface ExperienceItem {
  role: string;
  company: string;
  time: string;
  description: string;
  linkLabel?: string;
  linkUrl?: string;
}

export interface ExperienceProps {
  title: string;
  items: ExperienceItem[];
}
