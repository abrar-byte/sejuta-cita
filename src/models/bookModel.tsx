interface objectSection {
  title:string;
  content:string;
}

export interface bookModel {
  id?: number;
  title?: string;
  category_id?:number;
  authors?:[];
  cover_url?:string;
  description?:string;
  sections?: objectSection;
  audio_length?:number;
  map?:any;

 
}

