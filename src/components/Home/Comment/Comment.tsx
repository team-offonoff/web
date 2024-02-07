import { TimeUnits, getDateDistance, getDateDistanceText } from '@toss/date';
import React from 'react';

import { useReactComment } from '@apis/comment/useComment';
import { Col, Row } from '@components/commons/Flex/Flex';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import useModal from '@hooks/useModal/useModal';
import { CommentResponse } from '@interfaces/api/comment';

import { useAuthStore } from '@store/auth';

import { colors } from '@styles/theme';

import { MeatballIcon, ReportIcon } from '@icons/index';

import { CommentAuthorProfileImg } from './Comment.styles';
import Thumbs from './Thumbs';

interface CommentProps {
  comment: CommentResponse;
}

const Comment = React.memo(({ comment }: CommentProps) => {
  const { Modal, toggleModal } = useModal('action');
  const reactMutation = useReactComment(comment.topicId, comment.commentId);
  const memberId = useAuthStore((store) => store.memberId);
  const likeCount = Math.max(
    comment.commentReaction.likeCount - comment.commentReaction.hateCount,
    0
  );

  const startDate = new Date(comment.createdAt * 1000);
  const distance = getDateDistance(startDate, new Date());
  const distanceText = getDateDistanceText(distance, {
    hours: (t: TimeUnits) => t.hours > 0 && t.days < 1,
    minutes: (t: TimeUnits) => t.minutes > 0 && t.hours < 1,
    seconds: (t: TimeUnits) => t.minutes < 1,
  });

  const handleCommentMenu = () => {
    toggleModal();
  };

  const handleCommentModify = () => {
    // TODO: 수정하기 기능 구현
    toggleModal();
  };

  const handleCommentDelete = () => {
    // TODO: 삭제하기 기능 구현
    toggleModal();
  };

  const handleCommentReport = () => {
    // TODO: 신고하기 기능 구현
    toggleModal();
  };

  const handleCommentLike = () => {
    reactMutation.mutate({ reaction: 'like', enable: !comment.commentReaction.liked });
  };

  const handleCommentHate = () => {
    reactMutation.mutate({ reaction: 'hate', enable: !comment.commentReaction.hated });
  };

  return (
    <React.Fragment>
      <Col padding={'14px 20px 24px'}>
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          <Row gap={8}>
            <ProfileImg url={comment.writer.profileImageUrl} size={22} />
            <Col gap={2}>
              <Row>
                <Text size={14} color={colors.black_60}>
                  {comment.writer.nickname}&nbsp;
                </Text>
                <Text size={14} color={colors.black_40}>
                  {'·'} {distanceText}전
                </Text>
              </Row>
              <Text size={14} color={colors.A} weight={600}>
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
              count={likeCount}
              hasClicked={comment.commentReaction.liked}
              onClick={handleCommentLike}
            />
            <Thumbs
              type={'down'}
              hasClicked={comment.commentReaction.hated}
              onClick={handleCommentHate}
            />
          </Row>
        </Col>
      </Col>
      <Modal>
        {memberId === comment.writer.id ? (
          <Col gap={14}>
            <button onClick={handleCommentModify}>
              <Row alignItems={'center'} gap={14}>
                <ReportIcon />
                <Text size={16} weight={500}>
                  수정
                </Text>
              </Row>
            </button>
            <button onClick={handleCommentDelete}>
              <Row alignItems={'center'} gap={14}>
                <ReportIcon />
                <Text size={16} weight={500}>
                  삭제
                </Text>
              </Row>
            </button>
          </Col>
        ) : (
          <button onClick={handleCommentReport}>
            <Row alignItems={'center'} gap={14}>
              <ReportIcon />
              <Text size={16} weight={500}>
                신고하기
              </Text>
            </Row>
          </button>
        )}
      </Modal>
    </React.Fragment>
  );
});

export default Comment;
