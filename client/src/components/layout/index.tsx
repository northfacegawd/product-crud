import { PropsWithChildren } from 'react';

import { Main } from './index.style';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header />
      <Main>{children}</Main>
      <footer />
    </>
  );
}
