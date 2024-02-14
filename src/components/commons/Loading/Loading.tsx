import React from 'react';

import { zIndex, colors } from '@styles/theme';

import { ALogoIcon, BLogoIcon } from '@icons/index';

import { Row } from '../Flex/Flex';

const Loading = () => {
  return (
    <div
      className="loading"
      style={{
        position: 'fixed',
        overflow: 'hidden',
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100vw',
        zIndex: zIndex.modal,
        backgroundColor: colors.navy_60,
      }}
    >
      <Row
        justifyContent={'center'}
        alignItems={'center'}
        gap={7.5}
        style={{ width: '100%', height: '100%' }}
      >
        <ALogoIcon width={65} fill={colors.A} />
        <BLogoIcon width={66} fill={colors.B} />
      </Row>
    </div>
  );
};

export default Loading;
