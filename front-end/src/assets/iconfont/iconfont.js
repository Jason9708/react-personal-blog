import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 1874654 */
    src: url('//at.alicdn.com/t/font_1874654_e5gfz2egfip.eot');
    src: url('//at.alicdn.com/t/font_1874654_e5gfz2egfip.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1874654_e5gfz2egfip.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1874654_e5gfz2egfip.woff') format('woff'),
    url('//at.alicdn.com/t/font_1874654_e5gfz2egfip.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1874654_e5gfz2egfip.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:12px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
