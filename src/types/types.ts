export interface IFacilityData {
  title: string;
  content: string;
  images: string[];
}

export interface ISliderData {
  title: string;
  description?: string;
  url: string;
  id: string;
  bg: string;
}

export interface ILatestNewsData {
  title: string;
  description: string;
  link?:string;
  is_expired: boolean;
  auto_expire_at?: string;
  created_at: string;
  updated_at: string;
}
