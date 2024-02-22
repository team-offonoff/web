import { formatToKoreanNumber } from '@toss/utils';

import { Row } from '@components/commons/Flex/Flex';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import { LatestComment } from '@interfaces/api/comment';

import { colors } from '@styles/theme';

import {
  CommentContainer,
  CommentInfoContainer,
  Comment,
  HighlightText,
  Blur,
  CommentButton,
  CommnetBodyContainer,
} from './CommentBox.styles';

interface CommentBoxProps {
  onClick: () => void;
  hasVoted: boolean;
  commentCount: number;
  voteCount: number;
  previewComment: LatestComment | undefined;
  isBig?: boolean;
}

const CommentBox = ({
  onClick,
  commentCount,
  voteCount,
  previewComment,
  hasVoted,
  isBig = false,
}: CommentBoxProps) => {
  return (
    <CommentContainer>
      <CommnetBodyContainer onClick={onClick}>
        <CommentInfoContainer>
          {previewComment && (
            <Text size={14} weight={600} color={colors.white_60}>
              <HighlightText>{formatToKoreanNumber(commentCount)}개</HighlightText>의 댓글
            </Text>
          )}
          <Text size={14} weight={600} color={colors.white_60}>
            <HighlightText>{formatToKoreanNumber(voteCount)}명</HighlightText>이 선택했어요
          </Text>
        </CommentInfoContainer>
        <Comment>
          {hasVoted ? (
            <Blur $voted={hasVoted}>
              {previewComment ? (
                <Row
                  gap={10}
                  alignItems="center"
                  margin={isBig ? '25px 16px' : '18px 16px'}
                  width={'unset'}
                >
                  <ProfileImg url={previewComment.writer?.profileImageUrl} size={22} />
                  <Text size={15} weight={'regular'} color={colors.white} align="left">
                    {previewComment.content || ''}
                  </Text>
                </Row>
              ) : (
                <Row justifyContent="center" margin={isBig ? '35px 0' : '18px 0px'}>
                  <Text size={14} color={colors.white_60}>
                    선택 후 가장 먼저 댓글을 작성해 보세요!
                  </Text>
                </Row>
              )}
            </Blur>
          ) : (
            <CommentButton>선택하고 댓글 보기</CommentButton>
          )}
        </Comment>
      </CommnetBodyContainer>
    </CommentContainer>
  );
};

export default CommentBox;
