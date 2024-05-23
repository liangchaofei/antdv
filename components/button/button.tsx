import { Card } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

import Button from './Default';
import WithWhereButton from './WithWhere';

const useStyles = createStyles(
  ({ css }) => css`
    .my-btn {
      background: darkgreen;
      color: white;
    }

    .my-btn-primary {
      background: springgreen;
      color: green;
    }
  `,
);

export default () => {
  const token = useTheme();
  const { styles } = useStyles();
  return (
    <Flexbox padding={24} gap={24} style={{ background: token.colorBgLayout }}>
      <Card size={'small'} title={'未使用 :where 选择器，外部样式无法覆盖 ❌'}>
        <Flexbox horizontal gap={8} className={styles}>
          <Button type={'primary'}>强调按钮</Button>
          <Button type={'filled'}>填充按钮</Button>
          <Button type={'default'}>默认按钮</Button>
          <Button type={'text'}>文本按钮</Button>
        </Flexbox>
      </Card>
      <Card
        size={'small'}
        title={'使用了 :where 选择器，外部样式可正常覆盖 ✅'}
      >
        <Flexbox horizontal gap={8} className={styles}>
          <WithWhereButton type={'primary'}>强调按钮</WithWhereButton>
          <WithWhereButton type={'filled'}>填充按钮</WithWhereButton>
          <WithWhereButton type={'default'}>默认按钮</WithWhereButton>
          <WithWhereButton type={'text'}>文本按钮</WithWhereButton>
        </Flexbox>
      </Card>
    </Flexbox>
  );
};
