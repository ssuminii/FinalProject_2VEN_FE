import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import AdminNav from '@/components/navigation/AdminNav';
import theme from '@/styles/theme';

const AdminLayout = () => (
  <div css={wrapperStyle}>
    <Header />
    <main css={mainStyle}>
      <AdminNav />
      <Outlet />
    </main>
    <Footer />
  </div>
);

const wrapperStyle = css`
  min-height: 100vh;
  background-color: ${theme.colors.gray[100]};
  header {
    background-color: ${theme.colors.main.white};
  }
`;

const mainStyle = css`
  max-width: ${theme.layout.width.content};
  display: flex;
  gap: 20px;
  margin: 76px auto;
`;
export default AdminLayout;