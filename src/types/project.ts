export type Project = {
  id: number;
  key: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: 'under development' | 'completed';
};
