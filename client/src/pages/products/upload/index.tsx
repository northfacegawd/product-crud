import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';

import Input from '../../../components/form/input';
import Select from '../../../components/form/select';
import Upload from '../../../components/form/upload';
import UtilSelect from '../../../components/form/util-select';
import { GENDER } from '../../../constants/options';
import { useCreateProduct } from '../../../hooks/request/post/useCreateProduct';
import useUploadImage from '../../../hooks/request/useUploadImage';
import useFormHandle from '../../../hooks/useFormHandle';
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
  const {
    handleSubmit,
    onChangeInput,
    onChangeSelect,
    register,
    watch,
    formState,
  } = useFormHandle<ProductUploadForm>();
  const { mutate, isLoading, data, isError } = useCreateProduct();
  const navigate = useNavigate();
  const { upload, uploading } = useUploadImage();

  const onSubmit = async (data: ProductUploadForm) => {
    const thumbnailFile = data.thumbnail.item(0);
    if (!thumbnailFile) return;
    const id = await upload(thumbnailFile);
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
      <UploadForm
        onSubmit={handleSubmit(onSubmit)}
        loading={isLoading || uploading}
        error={isError}
      >
        <Upload
          register={register('thumbnail', { required: true })}
          previewFile={watch('thumbnail')}
          error={formState.errors.thumbnail}
        />
        <Form.Group widths="equal" style={{ marginTop: '1rem' }}>
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
        <Message
          error
          header="서버오류"
          content="입력하지 않은 필드나, 유효하지 않은 값을 입력하였는지 확인 후 다시 시도해주세요. 같은 문제가 반복된다면 관리자에게 문의 부탁드립니다."
        />
        <Form.Button type="submit">Submit</Form.Button>
      </UploadForm>
    </>
  );
}
