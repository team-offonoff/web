import { Register } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { CONFIG, INPUT_TYPE, InputType } from 'src/constants/form';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { RotateIcon } from '@icons/index';

import {
  ReplaceButton,
  ReplaceIcon,
  ImageInput,
  ImageInputContainer,
  ImageInputTextContainer,
  ImageInputDescriptionContainer,
  Image,
} from './TopicCreateImageInput.styles';

interface TopicCreareProps {
  topic: 'A' | 'B';
  topicContent: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TopicCreateImageInput = () => {
  const { register, watch } = useFormContext();
  const imageInputRef_A = useRef<HTMLInputElement>(null);
  const imageInputRef_B = useRef<HTMLInputElement>(null);
  const [imageAUrl, setImageAUrl] = useState<string | null>(null);
  const [imageBUrl, setImageBUrl] = useState<string | null>(null);

  const handleImageInputAClick = () => {
    if (imageInputRef_A.current) {
      imageInputRef_A.current.click();
    }
  };

  const handleImageInputBClick = () => {
    if (imageInputRef_B.current) {
      imageInputRef_B.current.click();
    }
  };

  const handleFileChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event, setImageAUrl);
  };

  const handleFileChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event, setImageBUrl);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(fileObj);
  };
  return (
    <Col gap={16}>
      <Row gap={83} justifyContent="space-between">
        <Text size={16} weight={400} color={colors.white_60} align="start">
          어떤 선택지가 있나요?
        </Text>
        <ReplaceButton>
          <ReplaceIcon>
            <RotateIcon opacity="0.3" />
          </ReplaceIcon>
          <Text style={{ opacity: 0.3 }} size={13} weight={400} color={colors.purple} align="start">
            AB 선택지 바꾸기
          </Text>
        </ReplaceButton>
      </Row>
      <Row gap={8} justifyContent="center">
        <ImageInputContainer onClick={handleImageInputAClick}>
          {imageAUrl && <Image src={imageAUrl} alt="Image A" />}
          <ImageInputTextContainer>
            <Text size={180} weight={900} color={colors.A_40} lineHeight={0.7}>
              A
            </Text>
          </ImageInputTextContainer>
          {!imageAUrl && (
            <ImageInputDescriptionContainer>
              <Text size={15} weight={500} color={colors.white} align="center">
                이미지
                <br />
                가져오기
              </Text>
            </ImageInputDescriptionContainer>
          )}
          <ImageInput
            ref={imageInputRef_A}
            type="file"
            accept="image/*"
            onChange={handleFileChangeA}
          />
        </ImageInputContainer>
        <ImageInputContainer onClick={handleImageInputBClick}>
          {imageBUrl && <Image src={imageBUrl} alt="Image B" />}
          <ImageInputTextContainer>
            <Text size={180} weight={900} color={colors.B_40} lineHeight={0.7}>
              B
            </Text>
          </ImageInputTextContainer>
          {!imageBUrl && (
            <ImageInputDescriptionContainer>
              <Text size={15} weight={500} color={colors.white} align="center">
                이미지
                <br />
                가져오기
              </Text>
            </ImageInputDescriptionContainer>
          )}
          <ImageInput
            ref={imageInputRef_B}
            type="file"
            accept="image/*"
            onChange={handleFileChangeB}
          />
        </ImageInputContainer>
      </Row>
    </Col>
  );
};

export default TopicCreateImageInput;
