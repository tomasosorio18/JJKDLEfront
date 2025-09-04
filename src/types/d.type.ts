export type Abilities = {
  innate_technique?: string | null;
  domain_expansion?: string | null;
  description?: string | null;
  has_rct?: boolean;
  has_domain?: boolean;
  special_trait?: string | null;
};

export type Character = {
  id: number;
  name: string;
  age?: string[] | string | null;
  gender?: string | null;
  status?: string | null;
  group?: string | null;
  grade?: string | null;
  species?: string | null;
  abilities?: Abilities | null;
  voice: string;
  profile_url: string;
  image_url: string;
  image_url_large:string
};

export type GuessResult = {
  name: boolean;
  age: boolean;
  ageDifference: "menor" | "mayor" | "igual" | null;
  gradeDifference: "menor" | "mayor" | "igual" | null
  species: boolean;
  status: boolean;
  grade: boolean
  gender: boolean;
  group: boolean;
  domain_expansion: boolean;
  RCT: boolean;
};

export type GuessItem = {
  character: Character;
  result: GuessResult | null;
};