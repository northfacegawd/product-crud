export interface CloudFlareResponse {
  result: {
    id: string;
    uploadURL: string;
  };
  result_info: string | null;
  success: boolean;
  errors: any[];
  messages: any[];
}
