import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { RotateIcon } from '@icons/index';

import ImageInputComponent from './ImageInputComponent';
import { ImageInputChip } from './ImageInputComponent.styles';
import { ImageInputDescription, ReplaceButton, ReplaceIcon } from './TopicCreateImageInput.styles';

interface TopicCreareProps {
  topic: 'A' | 'B';
  topicContent: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TopicCreateImageInput = () => {
  const { getValues, getFieldState } = useFormContext();

  const [isImageFilled, setIsImageFilled] = useState(false);

  useEffect(() => {
    if (
      !getFieldState(INPUT_TYPE.A_TOPIC_IMAGEURL).invalid &&
      !getFieldState(INPUT_TYPE.B_TOPIC_IMAGEURL).invalid
    ) {
      setIsImageFilled(true);
    } else {
      setIsImageFilled(false);
    }
  }, [getValues([INPUT_TYPE.A_TOPIC_IMAGEURL, INPUT_TYPE.B_TOPIC_IMAGEURL])]);
  return (
    <Col gap={30}>
      <Row justifyContent="space-between">
        <Text size={16} weight={400} color={colors.white_60} align="start">
          어떤 선택지가 있나요?
        </Text>
        <ReplaceButton disabled={!isImageFilled}>
          <ReplaceIcon>
            <RotateIcon opacity={isImageFilled ? '1' : '0.3'} />
          </ReplaceIcon>
          <Text
            size={13}
            weight={400}
            color={isImageFilled ? colors.purple : colors.purple_30}
            align="start"
          >
            AB 선택지 바꾸기
          </Text>
        </ReplaceButton>
      </Row>
      <Col gap={20}>
        <Col gap={10}>
          <Row gap={8} justifyContent="center">
            {['A', 'B'].map((label) => (
              <ImageInputComponent key={label} label={label} />
            ))}
          </Row>
          <Row gap={63} justifyContent="center">
            {['A', 'B'].map((label) => (
              <ImageInputChip key={label}>
                <Text size={13} weight={600} color={colors.purple_60} align="center">
                  {label} 선택지
                </Text>
              </ImageInputChip>
            ))}
          </Row>
        </Col>
        <ImageInputDescription>
          <Text size={13} weight={400} color={colors.white_40} align="start">
            가로 세로 길이가 같은 사진을 올리는 것이 좋아요.
            <br />
            너무 큰 용량의 사진은 화질이 조정될 수 있어요.
          </Text>
        </ImageInputDescription>
      </Col>
    </Col>
  );
};

export default TopicCreateImageInput;
