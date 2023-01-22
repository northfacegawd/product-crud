import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';

import Input from '../../../components/form/input';
import Select from '../../../components/form/select';
import Upload from '../../../components/form/upload';
import UtilSelect from '../../../components/form/util-select';
import { GENDER } from '../../../constants/options';
import { useCreateProduct } from '../../../hooks/request/post/useCreateProduct';
import useFormHandle from '../../../hooks/useFormHandle';
import {
  CloudflareUploadResponse,
  FilesUploadResponse,
} from '../../../types/upload';
import { Heading } from '../index.style';
import { UploadForm } from './index.style';

export interface ProductUploadForm {
  name: string;
  brand: string;
  amount: string;
  category: string;
  gender: string[];
  options: string[];
  about: string;
  thumbnail: FileList;
}

export default function ProductUploadPage() {
  const { handleSubmit, onChangeInput, onChangeSelect, register } =
    useFormHandle<ProductUploadForm>();
  const { mutate, isLoading, data } = useCreateProduct();
  const navigate = useNavigate();

  const onSubmit = async (data: ProductUploadForm) => {
    const thumbnailFile = data.thumbnail.item(0);
    if (!thumbnailFile) return;
    const {
      data: { uploadURL },
    } = await axios.get<FilesUploadResponse>('/api/images');

    // upload file to Cloudflare URL
    const form = new FormData();
    form.append('file', thumbnailFile, new Date().toISOString());
    const {
      result: { id },
    }: CloudflareUploadResponse = await (
      await fetch(uploadURL, {
        method: 'POST',
        body: form,
      })
    ).json();
    mutate({ ...data, thumbnail: id });
  };

  useEffect(() => {
    if (!data) return;
    alert('상품 등록이 완료되었습니다.');
    navigate('/products');
  }, [data]);

  return (
    <>
      <Heading>상품 등록하기</Heading>
      <UploadForm onSubmit={handleSubmit(onSubmit)} loading={isLoading}>
        <Upload register={register('thumbnail')} />
        <Form.Group widths="equal" style={{ marginTop: '3rem' }}>
          <Input label="상품명" onChange={onChangeInput('name')} />
          <Input
            inputType="amount"
            labelPosition="right"
            label="가격"
            onChange={onChangeInput('amount')}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <UtilSelect
            label="브랜드"
            type="brands"
            onChange={onChangeSelect('brand')}
          />
          <UtilSelect
            label="카테고리"
            type="categories"
            onChange={onChangeSelect('category')}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Select
            label="주 이용 성별"
            options={GENDER}
            onChange={onChangeSelect('gender')}
          />
          <UtilSelect
            required={false}
            multiple
            type="options"
            label="옵션"
            onChange={onChangeSelect('options')}
          />
        </Form.Group>
        <Form.TextArea
          required
          label="제품 설명"
          placeholder="제품 설명을 입력해주세요."
          onChange={onChangeInput('about')}
        />
        <Form.Button type="submit">Submit</Form.Button>
      </UploadForm>
    </>
  );
}
