import axios from 'axios';
import { useState } from 'react';

import {
  CloudflareUploadResponse,
  FilesUploadResponse,
} from '../../types/upload';

const useUploadImage = () => {
  const [uploading, setUploading] = useState<boolean>(false);

  const upload = async (image: File) => {
    try {
      setUploading(true);
      const {
        data: { uploadURL },
      } = await axios.get<FilesUploadResponse>('/api/images');

      // upload file to Cloudflare URL
      const form = new FormData();
      form.append('file', image, new Date().toISOString());
      const {
        result: { id },
      }: CloudflareUploadResponse = await (
        await fetch(uploadURL, {
          method: 'POST',
          body: form,
        })
      ).json();
      return id;
    } finally {
      setUploading(false);
    }
  };

  return { upload, uploading };
};

export default useUploadImage;
