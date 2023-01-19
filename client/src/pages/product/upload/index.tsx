import { Form } from 'semantic-ui-react';

import Input from '../../../components/form/input';
import { UploadForm } from './index.style';

const categories = [
  { key: 'ring', text: '반지', value: 'ring' },
  { key: 'necklace', text: '목걸이', value: 'necklace' },
  { key: 'bracelet', text: '팔찌', value: 'bracelet' },
  { key: 'earring', text: '귀걸이', value: 'earring' },
  { key: 'etc', text: '기타', value: 'etc' },
];

const gender = [
  { key: 'male', text: '남성', value: 'male' },
  { key: 'female', text: '여성', value: 'female' },
  { key: 'unisex', text: '남녀공용', value: 'unisex' },
];

const options = [
  { key: 'single', text: '아몬즈 단독', value: 'single' },
  { key: 'departure_today', text: '오늘 출발', value: 'departure_today' },
];

export default function ProductUploadPage() {
  return (
    <>
      <h1>상품 등록하기</h1>
      <UploadForm>
        <Form.Group widths="equal">
          <Input label="상품명" placeholder="상품명을 입력해주세요." />
          <Input fluid label="브랜드" placeholder="브랜드를 입력해주세요." />
          <Input inputType="amount" labelPosition="right" label="가격" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            required
            fluid
            label="카테고리"
            options={categories}
            placeholder="카테고리를 선택해주세요."
          />
          <Form.Select
            required
            fluid
            label="주 이용 성별"
            options={gender}
            placeholder="성별을 선택해주세요."
            selection
            multiple
          />
          <Form.Select
            fluid
            label="옵션"
            options={options}
            placeholder="옵션을 선택해주세요."
            selection
            multiple
          />
        </Form.Group>
        <Form.TextArea
          required
          label="제품 상세"
          placeholder="제품 설명을 입력해주세요."
        />
        <Form.Button type="submit">Submit</Form.Button>
      </UploadForm>
    </>
  );
}
