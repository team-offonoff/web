import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSwiperSlide } from 'swiper/react';

import { useLatestComment } from '@apis/comment/useComment';
import useVoteTopic from '@apis/topic/useVoteTopic';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import { Toast } from '@components/commons/Toast/Toast';
import ChoiceSlider from '@components/Home/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/Home/CommentBox/CommentBox';
import Timer from '@components/Home/Timer/Timer';
import VoteCompletion from '@components/Home/VoteCompletion/VoteCompletion';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import { LatestComment } from '@interfaces/api/comment';
import { Choice, TopicResponse } from '@interfaces/api/topic';

import { useAuthStore } from '@store/auth';

import { colors } from '@styles/theme';

import { LeftDoubleArrowIcon, RightDoubleArrowIcon } from '@icons/index';

import { ResponseError } from '@apis/fetch';

import TopicComments from '../TopicComments/TopicComments';

import {
  BestTopicCotainer,
  TopicContainer,
  Topic,
  UserInfoContainer,
  TopicCardContainer,
  SelectTextContainer,
} from './TopicCard.styles';

interface TopicCardProps {
  topic: TopicResponse;
}

const TopicCard = ({ topic }: TopicCardProps) => {
  const [, setSearchParams] = useSearchParams();
  const memberId = useAuthStore((store) => store.memberId);
  const isMyTopic = topic.author.id === memberId;

  const swiperSlide = useSwiperSlide();
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});
  const voteMutation = useVoteTopic();
  const { data: latestCommentData, isSuccess } = useLatestComment(
    topic.topicId,
    topic.selectedOption !== null || isMyTopic
  );
  const [latestComment, setLatestComment] = useState<LatestComment | undefined>();

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperSlide.isActive) {
      setSearchParams((searchParams) => {
        searchParams.set('topicId', topic.topicId.toString());
        return searchParams;
      });
    }
  }, [swiperSlide]);

  useEffect(() => {
    if (isSuccess) {
      console.log('🚀 ~ useEffect ~ latestCommentData:', latestCommentData);
      setLatestComment(latestCommentData.data[0] as LatestComment);
    }
  }, [isSuccess]);

  const handleOnClickCommentBox = () => {
    if (isMyTopic || topic.selectedOption !== null) {
      toggleSheet();
    }
  };

  const handleOnVote = async (choiceOption: Choice['choiceOption']) => {
    try {
      const data = await voteMutation.mutateAsync({
        topicId: topic.topicId,
        choiceOption: choiceOption,
        votedAt: new Date().getTime() / 1000,
      });
      setLatestComment(data.latestComment);
      return true;
    } catch (error) {
      if (error instanceof ResponseError) {
        if (error.errorData.abCode === 'VOTED_BY_AUTHOR') {
          Toast.error('토픽을 작성한 사람은 투표할 수 없어요');
        }
      }
      return false;
    }
  };

  return (
    <React.Fragment>
      <TopicCardContainer
        ref={containerRef}
        style={{
          marginBottom: containerRef.current
            ? window.innerHeight - containerRef.current.scrollHeight + 60
            : 0,
        }}
      >
        <BestTopicCotainer>
          <Text size={18} color={colors.purple}>
            실시간 인기 토픽
          </Text>
        </BestTopicCotainer>
        <TopicContainer>
          <Topic style={{ width: 170, wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            {topic.topicTitle}
          </Topic>
        </TopicContainer>
        <UserInfoContainer>
          <ProfileImg url={topic.author.profileImageUrl} size={20} />
          <Text size={14} weight={'regular'} color={colors.white_60}>
            {topic.author.nickname}
          </Text>
        </UserInfoContainer>
        {topic.selectedOption !== null ? (
          <VoteCompletion
            side={topic.selectedOption === 'CHOICE_A' ? 'A' : 'B'}
            topicContent={
              topic.selectedOption === 'CHOICE_A'
                ? topic.choices[0]?.content?.text || 'A'
                : topic.choices[1]?.content?.text || 'B'
            }
          />
        ) : (
          <ChoiceSlider onVote={handleOnVote} choices={topic.choices} />
        )}
        {topic.deadline && <Timer endTime={topic.deadline} />}
        <SelectTextContainer $voted={topic.selectedOption !== null}>
          <LeftDoubleArrowIcon />
          <Text size={14} weight={'regular'} color={colors.white_40}>
            밀어서 선택하기
          </Text>
          <RightDoubleArrowIcon />
        </SelectTextContainer>
        <CommentBox
          side={topic.topicSide}
          hasVoted={topic.selectedOption !== null || isMyTopic}
          topicId={topic.topicId}
          commentCount={0}
          voteCount={0}
          keyword={topic.keyword}
          latestComment={latestComment}
          onClick={handleOnClickCommentBox}
        />
      </TopicCardContainer>
      <CommentSheet>
        <TopicComments topic={topic} />
      </CommentSheet>
    </React.Fragment>
  );
};

export default TopicCard;
