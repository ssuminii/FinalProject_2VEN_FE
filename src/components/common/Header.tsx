import { css } from '@emotion/react';

import GlobalNav from '@/components/navigation/GlobalNav';
import theme from '@/styles/theme';

const Header = () => {
  const LOGO = 'SYSMETIC';
  return (
    <header css={headerStyle}>
      <div css={containerStyle}>
        <div css={logoNavContainerStyle}>
          <h1>
            <img src='/logo.svg' alt={LOGO} />
          </h1>
          <GlobalNav />
        </div>
      </div>
    </header>
  );
};

const headerStyle = css`
  height: 95px;
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const containerStyle = css`
  display: flex;
  align-items: center;
  max-width: ${theme.layout.width.content};
  height: 100%;
  padding: 0px 20px;
  margin: 0 auto;
`;

const logoNavContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 47px;
`;

export default Header;
