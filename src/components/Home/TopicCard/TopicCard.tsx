import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSwiperSlide } from 'swiper/react';

import { useLatestComment } from '@apis/comment/useComment';
import useVoteTopic from '@apis/topic/useVoteTopic';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import ChoiceSlider from '@components/Home/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/Home/CommentBox/CommentBox';
import Timer from '@components/Home/Timer/Timer';
import VoteCompletion from '@components/Home/VoteCompletion/VoteCompletion';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import { LatestComment } from '@interfaces/api/comment';
import { Choice, CHOICE_OPTIONS, TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { LeftDoubleArrowIcon, RightDoubleArrowIcon } from '@icons/index';

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
  const choices: Choice[] = [
    {
      choiceId: 0,
      content: {
        text: 'choiceA',
        imageUrl: null,
        type: 'IMAGE_TEXT',
      },
      choiceOption: CHOICE_OPTIONS.CHOICE_A,
    },
    {
      choiceId: 2,
      content: {
        text: 'Choice 2',
        imageUrl: null,
        type: 'IMAGE_TEXT',
      },
      choiceOption: CHOICE_OPTIONS.CHOICE_B,
    },
  ]; // TBD: 투표 선택지가 비어있는 더미 데이터가 존재해서 만들어둠

  const [, setSearchParams] = useSearchParams();
  const swiperSlide = useSwiperSlide();
  const { BottomSheet: CommentSheet, toggleSheet, isOpen } = useBottomSheet({});
  const voteMutation = useVoteTopic();
  const { data: latestCommentData, isSuccess } = useLatestComment(
    topic.topicId,
    topic.selectedOption !== null
  );
  const [latestComment, setLatestComment] = useState<LatestComment | undefined>();

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
      setLatestComment(latestCommentData.data[0] as LatestComment);
    }
  }, [isSuccess]);

  const handleOnClickCommentBox = () => {
    if (topic.selectedOption !== null) {
      toggleSheet();
    }
  };

  const handleOnVote = async (choiceOption: Choice['choiceOption']) => {
    const data = await voteMutation.mutateAsync({
      topicId: topic.topicId,
      choiceOption: choiceOption,
      votedAt: new Date().getTime() / 1000,
    });
    setLatestComment(data);
  };

  return (
    <React.Fragment>
      <TopicCardContainer>
        <BestTopicCotainer>
          <Text size={18} color={colors.purple}>
            실시간 인기 토픽
          </Text>
        </BestTopicCotainer>
        <TopicContainer>
          <Topic>{topic.topicTitle}</Topic>
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
          /> // TODO: 선택 완료 컴포넌트
        ) : (
          <ChoiceSlider onVote={handleOnVote} choices={choices} />
        )}
        <Timer endTime={topic.deadline} />
        <SelectTextContainer $voted={topic.selectedOption !== null}>
          <LeftDoubleArrowIcon />
          <Text size={14} weight={'regular'} color={colors.white_40}>
            밀어서 선택하기
          </Text>
          <RightDoubleArrowIcon />
        </SelectTextContainer>
        <CommentBox
          side={topic.keyword.topicSide === 'TOPIC_A' ? 'A' : 'B'}
          hasVoted={topic.selectedOption !== null}
          topicId={topic.topicId}
          commentCount={0}
          voteCount={0}
          keyword={'키워드'}
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
