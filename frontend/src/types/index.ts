export interface Category {
  id: number;
  name: string;
  deleteat: string | null;
}

export interface LearnSkill {
  id: number;
  skillname: string;
  description: string;
  enddate: string | null;
  isfinish: boolean;
  categoryId: number | null;
  category?: Category | null;
  metadata: Record<string, unknown> | null; 
}

export interface CategoryWithSkills {
  id: number;
  name: string;
  deleteat: string | null;
  skills: LearnSkill[];
}

export interface ApiResponse {
  status: string;
  message: string;
  data: CategoryWithSkills[];
}
