import { useEffect } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

import { ProductItemProps } from '..';
import { GENDER } from '../../../constants/options';
import { useUpdateProduct } from '../../../hooks/request/update/useProductUpdate';
import useFormHandle from '../../../hooks/useFormHandle';
import { ProductUploadForm } from '../../../pages/products/upload';
import { Util } from '../../../types/product';
import Input from '../../form/input';
import Select from '../../form/select';
import UtilSelect from '../../form/util-select';

interface ProductEditModalProps extends ProductItemProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function ProductUpdateModal({
  open,
  onClose,
  onOpen,
  ...productData
}: ProductEditModalProps) {
  const { brand, amount, gender, options, category, about, name, id } =
    productData;
  const { handleSubmit, onChangeInput, onChangeSelect, setValue } =
    useFormHandle<ProductUploadForm>();
  const { mutate, data, isLoading } = useUpdateProduct(id);

  const onSubmit = async (data: ProductUploadForm) => {
    mutate(data);
  };

  useEffect(() => {
    if (!data) return;
    alert('상품 업데이트가 완료되었습니다.');
    onClose();
  }, [data]);

  useEffect(() => {
    Object.entries(productData).forEach(([key, data]) => {
      const dataKey = key as Parameters<typeof setValue>[0];
      if (
        ['category', 'brand'].includes(dataKey) &&
        typeof data === 'object' &&
        'slug' in data
      ) {
        setValue(dataKey, data.slug);
      } else if (dataKey === 'options' && Array.isArray(data)) {
        setValue(
          dataKey,
          data.map((option: Util) => option.slug),
        );
      } else {
        setValue(dataKey, data as any);
      }
    });
  }, []);

  return (
    <Modal onClose={onClose} onOpen={onOpen} open={open}>
      <Modal.Header>상품 수정하기</Modal.Header>
      <Modal.Content scrolling>
        <Form onSubmit={handleSubmit(onSubmit)} loading={isLoading}>
          <Form.Group widths="equal">
            <Input
              label="상품명"
              onChange={onChangeInput('name')}
              defaultValue={name}
            />
            <Input
              inputType="amount"
              labelPosition="right"
              label="가격"
              onChange={onChangeInput('amount')}
              defaultValue={amount}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <UtilSelect
              label="브랜드"
              type="brands"
              onChange={onChangeSelect('brand')}
              defaultValue={brand.slug}
            />
            <UtilSelect
              label="카테고리"
              type="categories"
              onChange={onChangeSelect('category')}
              defaultValue={category.slug}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Select
              label="주 이용 성별"
              options={GENDER}
              onChange={onChangeSelect('gender')}
              defaultValue={gender}
            />
            <UtilSelect
              required={false}
              multiple
              type="options"
              label="옵션"
              onChange={onChangeSelect('options')}
              defaultValue={options?.map((option) => option.slug)}
            />
          </Form.Group>
          <Form.TextArea
            required
            label="제품 설명"
            placeholder="제품 설명을 입력해주세요."
            onChange={onChangeInput('about')}
            defaultValue={about}
          />
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={onClose}>
          닫기
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
