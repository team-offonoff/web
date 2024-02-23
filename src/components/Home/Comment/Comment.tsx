import { TimeUnits, getDateDistance, getDateDistanceText } from '@toss/date';
import React from 'react';

import { useDeleteComment, useReactComment, useReportComment } from '@apis/comment/useComment';
import { Col, Row } from '@components/commons/Flex/Flex';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import useActionSheet from '@hooks/useModal/useActionSheet';
import { CommentResponse } from '@interfaces/api/comment';
import { Choice } from '@interfaces/api/topic';

import { useAuthStore } from '@store/auth';

import { colors } from '@styles/theme';

import { MeatballIcon, PencilIcon, ReportIcon, TrashCanIcon } from '@icons/index';

import Thumbs from './Thumbs';

interface CommentProps {
  comment: CommentResponse;
  choices: Choice[];
}

const Comment = React.memo(({ comment, choices }: CommentProps) => {
  const reactMutation = useReactComment(comment.topicId, comment.commentId);
  const reportMutation = useReportComment(comment.commentId);
  const deleteMutation = useDeleteComment(comment.commentId);
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
    // TBD: 1차 스펙 아웃
    toggleModal();
  };

  const handleCommentDelete = () => {
    deleteMutation.mutate();
    toggleModal();
  };

  const handleCommentReport = () => {
    reportMutation.mutate();
    toggleModal();
  };

  const handleCommentLike = () => {
    reactMutation.mutate({ reaction: 'like', enable: !comment.commentReaction.liked });
  };

  const handleCommentHate = () => {
    reactMutation.mutate({ reaction: 'hate', enable: !comment.commentReaction.hated });
  };

  const { Modal: CommentModal, toggleModal } = useActionSheet({
    actions:
      memberId === comment.writer.id
        ? [
            {
              icon: <PencilIcon />,
              label: '수정',
              onClick: handleCommentModify,
            },
            {
              icon: <TrashCanIcon />,
              label: '삭제',
              confirm: {
                description: '내가 작성한 댓글을 삭제합니다.',
                label: '삭제하기',
                onConfirm: handleCommentDelete,
              },
            },
          ]
        : [
            {
              icon: <ReportIcon />,
              label: '신고하기',
              onClick: handleCommentReport,
            },
          ],
  });

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
              <Text
                size={14}
                color={
                  comment.writersVotedOption
                    ? comment.writersVotedOption === 'CHOICE_A'
                      ? colors.A_60
                      : colors.B_60
                    : colors.purple
                }
                weight={600}
              >
                {comment.writersVotedOption
                  ? choices[comment.writersVotedOption === 'CHOICE_A' ? 0 : 1].content.text
                  : '작성자'}
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
      <CommentModal />
    </React.Fragment>
  );
});

export default Comment;
