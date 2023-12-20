import React from 'react';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { MeatballIcon } from '@icons/index';

import { CommentAuthorProfileImg } from './Comment.styles';
import Thumbs from './Thumbs';

const Comment = () => {
  const handleCommentMenuClick = () => {};
  return (
    <Col padding={'14px 20px 24px'}>
      <Row justifyContent={'space-between'} alignItems={'flex-start'}>
        <Row gap={8}>
          <CommentAuthorProfileImg src={'https://picsum.photos/50/50'} alt={'profile'} />
          <Col gap={2}>
            <Row>
              <Text size={14} color={colors.black_60}>
                닉네임
              </Text>
              <Text size={14} color={colors.black_40}>
                · 2일전
              </Text>
            </Row>
            <Text size={14} color={colors.sub_A} weight={600}>
              A. 10년 전 과거로 가기
            </Text>
          </Col>
        </Row>
        <button onClick={handleCommentMenuClick}>
          <MeatballIcon fill={colors.black_40} />
        </button>
      </Row>
      <Col padding={'8px 10px 0px 30px'} gap={14}>
        <Text size={15}>
          왜들 그리 다운돼있어? 뭐가 문제야 say something 분위기가 겁나 싸해 요새는 이런 게 유행인가
          왜들 그리 재미없어? 아 그건 나도 마찬가지
        </Text>
        <Row gap={12}>
          <Thumbs
            type={'up'}
            count={1}
            hasClicked={false}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Thumbs
            type={'down'}
            count={4}
            hasClicked={false}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </Row>
      </Col>
    </Col>
  );
};

export default Comment;
