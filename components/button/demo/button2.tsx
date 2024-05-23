import { Card } from 'antd';
import { ThemeProvider, createStyles, useTheme } from 'antd-style';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

import Button from './CustomTheme/Button';
import { ProDemoProvider } from './CustomTheme/styles';

const useStyles = createStyles(({ css, prefixCls }) => css``);

export default () => {
  const token = useTheme();
  const { styles } = useStyles();
  return (
    <Flexbox padding={24} gap={24} style={{ background: token.colorBgLayout }}>
      <Card>
        <Flexbox horizontal gap={8} className={styles}>
          <Button type={'primary'}>强调按钮</Button>
          <Button type={'filled'}>填充按钮</Button>
          <Button type={'default'}>默认按钮</Button>
          <Button type={'text'}>文本按钮</Button>
        </Flexbox>
      </Card>
      <ThemeProvider theme={{ cssVar: true }}>
        <Button type={'primary'}>强调按钮</Button>
      </ThemeProvider>

      <ProDemoProvider themeMode={'dark'} theme={{ cssVar: true }}>
        <Card>
          <Flexbox horizontal gap={8} className={styles}>
            <Button type={'primary'}>强调按钮</Button>
            <Button type={'filled'}>填充按钮</Button>
            <Button type={'default'}>默认按钮</Button>
            <Button type={'text'}>文本按钮</Button>
          </Flexbox>
        </Card>
      </ProDemoProvider>
    </Flexbox>
  );
};
