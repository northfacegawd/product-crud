import { useEffect } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

import { ProductItemProps } from '..';
import { GENDER } from '../../../constants/options';
import useDeleteProduct from '../../../hooks/request/delete/useDeleteProduct';
import { useUpdateProduct } from '../../../hooks/request/update/useProductUpdate';
import useUploadImage from '../../../hooks/request/useUploadImage';
import useFormHandle from '../../../hooks/useFormHandle';
import { getImageUrl } from '../../../libs/util';
import { ProductUploadForm } from '../../../pages/products/upload';
import { Util } from '../../../types/product';
import Input from '../../form/input';
import Select from '../../form/select';
import Upload from '../../form/upload';
import UtilSelect from '../../form/util-select';
import { ModalAction } from './index.style';

interface ProductEditModalProps extends ProductItemProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function ProductUpdateModal({
  open,
  onClose,
  onOpen,
  ...pd
}: ProductEditModalProps) {
  const form = useFormHandle<ProductUploadForm>();
  const { mutate, data, isLoading } = useUpdateProduct(pd.id);
  const { upload, uploading } = useUploadImage();
  const {
    mutate: deleteProduct,
    isLoading: deleting,
    data: deleted,
  } = useDeleteProduct(pd.id);

  const onSubmit = async (data: ProductUploadForm) => {
    const thumbnailFile = data.thumbnail.item(0);
    if (!thumbnailFile) return;
    const id = await upload(thumbnailFile);
    mutate({ ...data, thumbnail: id });
  };

  const onDelete = () => {
    if (!window.confirm('정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.'))
      return;
    deleteProduct();
  };

  const disabled = isLoading || uploading || deleting;

  useEffect(() => {
    if (!data) return;
    alert('상품 업데이트가 완료되었습니다.');
    onClose();
  }, [data]);

  useEffect(() => {
    if (!deleted) return;
    alert('삭제되었습니다.');
    onClose();
  }, []);

  useEffect(() => {
    Object.entries(pd).forEach(([key, data]) => {
      const dataKey = key as Parameters<typeof form.setValue>[0];
      if (
        ['category', 'brand'].includes(dataKey) &&
        typeof data === 'object' &&
        'slug' in data
      ) {
        form.setValue(dataKey, data.slug);
      } else if (dataKey === 'options' && Array.isArray(data)) {
        form.setValue(
          dataKey,
          data.map((option: Util) => option.slug),
        );
      } else {
        form.setValue(dataKey, data as any);
      }
    });
  }, []);

  return (
    <Modal onClose={onClose} onOpen={onOpen} open={open}>
      <Modal.Header>상품 수정하기</Modal.Header>
      <Modal.Content scrolling>
        <Form onSubmit={form.handleSubmit(onSubmit)} loading={disabled}>
          <Upload
            register={form.register('thumbnail')}
            previewFile={form.watch('thumbnail')}
            defaultPreview={getImageUrl(pd.thumbnail)}
          />
          <Form.Group widths="equal" style={{ marginTop: '1rem' }}>
            <Input
              label="상품명"
              onChange={form.onChangeInput('name')}
              defaultValue={pd.name}
            />
            <Input
              inputType="amount"
              labelPosition="right"
              label="가격"
              onChange={form.onChangeInput('amount')}
              defaultValue={pd.amount}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <UtilSelect
              label="브랜드"
              type="brands"
              onChange={form.onChangeSelect('brand')}
              defaultValue={pd.brand.slug}
            />
            <UtilSelect
              label="카테고리"
              type="categories"
              onChange={form.onChangeSelect('category')}
              defaultValue={pd.category.slug}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Select
              label="주 이용 성별"
              options={GENDER}
              onChange={form.onChangeSelect('gender')}
              defaultValue={pd.gender}
            />
            <UtilSelect
              required={false}
              multiple
              type="options"
              label="옵션"
              onChange={form.onChangeSelect('options')}
              defaultValue={pd.options?.map((option) => option.slug)}
            />
          </Form.Group>
          <Form.TextArea
            required
            label="제품 설명"
            placeholder="제품 설명을 입력해주세요."
            onChange={form.onChangeInput('about')}
            defaultValue={pd.about}
          />
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </Modal.Content>
      <ModalAction>
        <Button color="black" onClick={onDelete} negative disabled={disabled}>
          삭제
        </Button>
        <Button color="black" onClick={onClose} disabled={disabled}>
          닫기
        </Button>
      </ModalAction>
    </Modal>
  );
}
