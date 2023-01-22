import { useLocation } from 'react-router-dom';

import Logo from '../../common/logo';
import {
  ActiveLink,
  HeaderBox,
  HeaderWrapper,
  LoginLink,
  LogoLink,
} from './index.style';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <HeaderBox>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <ActiveLink to="/products" active={pathname === '/products'}>
          상품 목록
        </ActiveLink>
        <ActiveLink
          to="/products/upload"
          active={pathname.startsWith('/products/upload')}
        >
          상품 업로드
        </ActiveLink>
        <LoginLink to="/login" active={pathname.startsWith('/login')}>
          로그인
        </LoginLink>
      </HeaderBox>
    </HeaderWrapper>
  );
}
