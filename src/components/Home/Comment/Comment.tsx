import { getDateDistance, getDateDistanceText } from '@toss/date';
import React from 'react';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import useModal from '@hooks/useModal/useModal';
import { CommentResponse } from '@interfaces/api/comment';

import { colors } from '@styles/theme';

import { MeatballIcon, ReportIcon } from '@icons/index';

import { CommentAuthorProfileImg } from './Comment.styles';
import Thumbs from './Thumbs';

interface CommentProps {
  comment: CommentResponse;
}

const Comment = ({ comment }: CommentProps) => {
  const { Modal, toggleModal } = useModal('action');

  const startDate = new Date(comment.createdAt);

  const distance = getDateDistance(startDate, new Date());

  const handleCommentMenu = () => {
    toggleModal();
  };

  const handleCommentReport = () => {
    // TODO: 신고하기 기능 구현
    toggleModal();
  };

  return (
    <React.Fragment>
      <Col padding={'14px 20px 24px'}>
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          <Row gap={8}>
            <CommentAuthorProfileImg src={'https://picsum.photos/50/50'} alt={'profile'} />
            <Col gap={2}>
              <Row>
                <Text size={14} color={colors.black_60}>
                  {comment.writer.nickname}
                </Text>
                <Text size={14} color={colors.black_40}>
                  · {getDateDistanceText(distance)}전
                </Text>
              </Row>
              <Text size={14} color={colors.sub_A} weight={600}>
                {comment.writersVotedOption}
              </Text>
            </Col>
          </Row>
          <button onClick={handleCommentMenu}>
            <MeatballIcon fill={colors.black_40} />
          </button>
        </Row>
        <Col padding={'8px 10px 0px 30px'} gap={14}>
          <Text size={15}>{comment.content}</Text>
          <Row gap={12}>
            <Thumbs
              type={'up'}
              count={comment.likeCount}
              hasClicked={comment.liked}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
            <Thumbs
              type={'down'}
              hasClicked={comment.hated}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          </Row>
        </Col>
      </Col>
      <Modal>
        <button onClick={handleCommentReport}>
          <Row alignItems={'center'} gap={14}>
            <ReportIcon />
            <Text size={16} weight={500}>
              신고하기
            </Text>
          </Row>
        </button>
      </Modal>
    </React.Fragment>
  );
};

export default Comment;
