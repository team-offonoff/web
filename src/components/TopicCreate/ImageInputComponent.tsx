import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Text from '@components/commons/Text/Text';
import useModal from '@hooks/useModal/useModal';

import { INPUT_TYPE } from '@constants/form';

import { colors } from '@styles/theme';

import { CloseIcon, DeleteIcon } from '@icons/index';

import {
  ImageInputContainer,
  Image,
  ImageInput,
  ImageInputDescriptionContainer,
  ImageInputTextContainer,
  ImageCover,
  ModalContainer,
  ModalImage,
  ModalContent,
  ModalContentText,
  CloseButton,
  DeleteButton,
} from './ImageInputComponent.styles';

interface ImageInputComponetProps {
  label: string;
}

const ImageInputComponent = ({ label }: ImageInputComponetProps) => {
  const { Modal, toggleModal } = useModal('default');
  const { register, setValue } = useFormContext();
  const id = label === 'A' ? INPUT_TYPE.A_TOPIC_IMAGEURL : INPUT_TYPE.B_TOPIC_IMAGEURL;
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    registerOnChange: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    registerOnChange(event);

    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
      setValue(id, reader.result as string);
    };
    reader.readAsDataURL(fileObj);
  };

  const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setImageUrl(null);
    setValue(id, null);
  };

  return (
    <ImageInputContainer
      onClick={(e) => {
        if (imageUrl) {
          toggleModal();
        } else {
          document.getElementById(id)?.click();
        }
      }}
    >
      {imageUrl && (
        <>
          <Image src={imageUrl} alt={`image${label}`} />
          <DeleteButton className="delete-btn" onClick={(e) => handleDeleteButtonClick(e)}>
            <DeleteIcon className="delete-btn" />
          </DeleteButton>
          <ImageCover />
        </>
      )}
      <ImageInputTextContainer>
        <Text
          size={180}
          weight={900}
          color={label === 'A' ? colors.A_40 : colors.B_40}
          lineHeight={0.7}
        >
          {label}
        </Text>
      </ImageInputTextContainer>
      {!imageUrl && (
        <ImageInputDescriptionContainer>
          <Text size={15} weight={500} color={colors.white} align="center">
            이미지
            <br />
            가져오기
          </Text>
        </ImageInputDescriptionContainer>
      )}
      <ImageInput
        id={id}
        type="file"
        {...register(id)}
        accept="image/*"
        onChange={(event) => handleFileChange(event, register(id).onChange)}
      />
      <Modal>
        <ModalContainer side={label}>
          <ModalImage src={imageUrl || ''} />
          <ModalContent>
            <Text color={label === 'A' ? '#e15ba1' : '#1bbdc9'} size={240} weight={900}>
              {label}
            </Text>
            <ModalContentText>{label}</ModalContentText>
          </ModalContent>
          <CloseButton onClick={() => toggleModal}>
            <CloseIcon />
          </CloseButton>
        </ModalContainer>
      </Modal>
    </ImageInputContainer>
  );
};

export default ImageInputComponent;
