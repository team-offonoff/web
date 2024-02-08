import { color } from 'framer-motion';
import React from 'react';

import Text from '@components/commons/Text/Text';
import useModal from '@hooks/useModal/useModal';
import { ChoiceContent } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { CloseIcon, SizeUpIcon } from '@icons/index';

import {
  AlphaSideContainer,
  SideImage,
  BetaSideContainer,
  TextContainer,
  AlphaSizeUpButton,
  BetaSizeUpButton,
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalContentText,
  CloseButton,
} from './ChoiceSlide.styles';

interface ChoiceSlideProps {
  side: 'A' | 'B';
  topicContent: ChoiceContent;
}

const ChoiceSlide = ({ side, topicContent }: ChoiceSlideProps) => {
  const { Modal, toggleModal } = useModal('default');

  const handleOnClickSizeUpButton = () => {
    toggleModal();
  };

  const SlideContainer = side === 'A' ? AlphaSideContainer : BetaSideContainer;
  const SizeUpButton = side === 'A' ? AlphaSizeUpButton : BetaSizeUpButton;

  return (
    <React.Fragment>
      <SlideContainer>
        <div
          style={{
            position: 'absolute',
            top: -45,
            right: side === 'A' ? 95 : 'unset',
            left: side === 'B' ? 107 : 'unset',
          }}
        >
          <Text color={side === 'A' ? '#e15ba1' : '#19b1be'} size={200} weight={900}>
            {side}
          </Text>
        </div>
        {topicContent.imageUrl ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: side === 'A' ? 'flex-end' : 'flex-start',
            }}
          >
            <SideImage />
            <SizeUpButton onClick={handleOnClickSizeUpButton}>
              <SizeUpIcon />
            </SizeUpButton>
          </div>
        ) : (
          <TextContainer>
            <Text color={colors.white} size={20} weight={600}>
              {topicContent.text}
            </Text>
          </TextContainer>
        )}
      </SlideContainer>
      <Modal>
        <ModalContainer side={side}>
          <ModalImage src={topicContent.imageUrl || ''} />
          <ModalContent>
            <Text color={side === 'A' ? '#e15ba1' : '#1bbdc9'} size={240} weight={900}>
              {side}
            </Text>
            <ModalContentText>{topicContent.text}</ModalContentText>
          </ModalContent>
          <CloseButton onClick={() => toggleModal}>
            <CloseIcon />
          </CloseButton>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
};

export default ChoiceSlide;
