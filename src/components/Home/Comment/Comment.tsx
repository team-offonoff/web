import { TimeUnits, getDateDistance, getDateDistanceText } from '@toss/date';
import React, { useState } from 'react';

import { useReactComment } from '@apis/comment/useComment';
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
  const likeMutation = useReactComment(comment.commentId, 'like');
  const hateMutation = useReactComment(comment.commentId, 'hate');

  const startDate = new Date(comment.createdAt);
  const distance = getDateDistance(startDate, new Date());
  const distanceText = getDateDistanceText(distance, {
    hours: (t: TimeUnits) => t.days < 1,
    minutes: (t: TimeUnits) => t.hours < 1,
    seconds: (t: TimeUnits) => t.minutes < 1,
  });

  const handleCommentMenu = () => {
    toggleModal();
  };

  const handleCommentReport = () => {
    // TODO: 신고하기 기능 구현
    toggleModal();
  };

  const handleCommentLike = () => {
    likeMutation.mutate();
  };

  const handleCommentHate = () => {
    hateMutation.mutate();
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
                  · {distanceText}전
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
              count={comment.likeCount - comment.hateCount}
              hasClicked={comment.liked}
              onClick={handleCommentLike}
            />
            <Thumbs type={'down'} hasClicked={comment.hated} onClick={handleCommentHate} />
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
