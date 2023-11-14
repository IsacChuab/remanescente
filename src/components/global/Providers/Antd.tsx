import { PropsWithChildren } from 'react';

import { ConfigProvider } from 'antd';

import antdTheme from '../../../assets/themes/antd';

const AntdProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};

export default AntdProvider;
