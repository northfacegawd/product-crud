export interface FilesUploadResponse {
  id: string;
  uploadURL: string;
}

export interface CloudflareUploadResponse {
  result: {
    id: string;
    filename: string;
    uploaded: string;
    requireSignedURLs: boolean;
    variants: string[];
  };
  result_info: any;
  success: boolean;
  errors: any[];
  messages: any[];
}
