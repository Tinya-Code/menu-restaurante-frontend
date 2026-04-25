export interface TemplateImage {
  cloudinary_id: string;
  url: string;
}

export interface TemplateBlock {
  [key: string]: TemplateImage[];
}

export interface TemplateData {
  blocks: TemplateBlock[];
}

export interface TemplateResponse {
  status: string;
  code: number;
  message: string;
  data: TemplateData;
}
