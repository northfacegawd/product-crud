import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';

import Input from '../../../components/form/input';
import Select from '../../../components/form/select';
import { CATEGORIES, GENDER, OPTIONS } from '../../../constants/options';
import { useCreateProduct } from '../../../hooks/request/post/useCreateProduct';
import useFormHandle from '../../../hooks/useFormHandle';
import { UploadForm } from './index.style';

export interface ProductUploadForm {
  name: string;
  brand: string;
  amount: string;
  category: string;
  gender: string[];
  options: string[];
  about: string;
}

export default function ProductUploadPage() {
  const { handleSubmit, onChangeInput, onChangeSelect } =
    useFormHandle<ProductUploadForm>();
  const { mutate, isLoading, data } = useCreateProduct();
  const navigate = useNavigate();

  const onSubmit = async (data: ProductUploadForm) => {
    mutate(data);
  };

  useEffect(() => {
    if (!data) return;
    navigate(`/products/${data.id}`);
  }, [data]);

  return (
    <>
      <h1>상품 등록하기</h1>
      <UploadForm onSubmit={handleSubmit(onSubmit)} loading={isLoading}>
        <Form.Group widths="equal">
          <Input label="상품명" onChange={onChangeInput('name')} />
          <Input fluid label="브랜드" onChange={onChangeInput('brand')} />
          <Input
            inputType="amount"
            labelPosition="right"
            label="가격"
            onChange={onChangeInput('amount')}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Select
            label="카테고리"
            options={CATEGORIES}
            onChange={onChangeSelect('category')}
          />
          <Select
            multiple
            label="주 이용 성별"
            options={GENDER}
            onChange={onChangeSelect('gender')}
          />
          <Select
            multiple
            label="옵션"
            required={false}
            options={OPTIONS}
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
