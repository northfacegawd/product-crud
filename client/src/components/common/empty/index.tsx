import { PropsWithChildren } from 'react';

import emptyBox from '../../../assets/images/empty-box.svg';
import { EmptyText, EmptyWrapper } from './index.style';

export default function Empty({ children }: PropsWithChildren) {
  return (
    <EmptyWrapper>
      <img src={emptyBox} alt="empty box icon" />
      <EmptyText>{children}</EmptyText>
    </EmptyWrapper>
  );
}
