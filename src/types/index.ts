export type ProjectCategory =
  | 'frontend' | 'backend' | 'fullstack'
  | 'data' | 'ai' | 'desktop' | 'freelance';

export type ProjectRole =
  | 'full-development'
  | 'contribution'
  | 'maintenance'
  | 'modification'
  | 'data-analysis'
  | 'reference-only';

export type ProjectStatus = 'active' | 'ongoing' | 'completed';

export interface ProjectLink {
  label: string;
  href: string;
  type: 'repo' | 'demo' | 'case-study' | 'blog';
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  role: ProjectRole;
  roleLabel: string;
  period: string;
  status: ProjectStatus;
  organization?: string;
  summary: string;
  description: string[];
  highlights: string[];
  tech: string[];
  features?: string[];
  metrics?: { label: string; value: string }[];
  images: ProjectImage[];
  links: ProjectLink[];
  featured: boolean;
  hasDetail: boolean;
  order: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  employmentType?: string;
  description: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  description?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  period: string;
  credentialId?: string;
  url?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone?: string;
  bio: string[];
  avatar?: string;
  resumeUrl?: string;
  socials: { label: string; href: string; icon: string }[];
  stats: { label: string; value: string }[];
}
