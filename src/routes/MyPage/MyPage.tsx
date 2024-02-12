import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import ActionModalButton from '@components/commons/Modal/ActionModalButton';
import Modal from '@components/commons/Modal/Modal';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import useModal from '@hooks/useModal/useModal';

import { colors } from '@styles/theme';

import { AlbumIcon, CameraIcon, RightChevronIcon, TrashIcon } from '@icons/index';

import {
  BackButton,
  Container,
  Divider,
  ImageInput,
  MyInfoUpdateButton,
  PhotoButton,
  ProfileImgContainer,
} from './MyPage.styles';

const MyPage = () => {
  const navigate = useNavigate();

  const profileImageInputRef = useRef<HTMLInputElement>(null);

  const [profileImgUrl, setProfileImgUrl] = useState<string | null>(null);

  const { Modal, toggleModal } = useModal('action');

  const handleSelectFromAlbum = () => {
    if (profileImageInputRef.current) {
      profileImageInputRef.current.click();
    }
  };

  const handleProfileImgFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImgUrl(reader.result as string);
    };
    reader.readAsDataURL(fileObj);
    toggleModal();
  };

  const handleRemoveCurrentImage = () => {};

  const handleOnClickPhotoButton = () => {
    toggleModal();
  };

  return (
    <Layout
      hasBottomNavigation={true}
      HeaderLeft={
        <BackButton onClick={() => navigate(-1)}>
          <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white} />
        </BackButton>
      }
      HeaderCenter={
        <Text size={20} weight={600} color={colors.white}>
          MY
        </Text>
      }
    >
      <Container>
        <Col gap={100} alignItems="center">
          <Col gap={30} alignItems="center">
            <ProfileImgContainer>
              <ProfileImg url={profileImgUrl} size={102} rounded={true}></ProfileImg>
              <PhotoButton onClick={handleOnClickPhotoButton}>
                <CameraIcon />
              </PhotoButton>
            </ProfileImgContainer>
            <Text size={22} weight={600} color={colors.white}>
              사용자 이름
            </Text>
          </Col>
          <Col gap={32} alignItems="flex-start">
            <Row padding="0 7px" gap={3} alignItems="center">
              <Text size={16} weight={400} color={colors.white}>
                내 정보 수정
              </Text>
              <MyInfoUpdateButton>
                <RightChevronIcon stroke={colors.white_40} />
              </MyInfoUpdateButton>
            </Row>
            <Divider />
            <Text style={{ padding: '0 7px' }} size={16} weight={400} color={colors.white}>
              약관
            </Text>
            <Row padding="0 7px" gap={10} alignItems="center">
              <Text size={16} weight={400} color={colors.white}>
                버전 정보
              </Text>
              <Text size={15} weight={400} color={colors.purple}>
                ver 1.1
              </Text>
            </Row>
            <Divider />
            <Text style={{ padding: '0 7px' }} size={16} weight={400} color={colors.white_40}>
              로그아웃
            </Text>
          </Col>
        </Col>
        <ImageInput
          id="profileImg"
          ref={profileImageInputRef}
          type="file"
          accept="image/*"
          onChange={handleProfileImgFileChange}
        />
        <Modal>
          <ActionModalButton
            handleClick={handleSelectFromAlbum}
            Icon={() => <AlbumIcon />}
            label={'앨범에서 가져오기'}
          />
          <ActionModalButton
            handleClick={handleRemoveCurrentImage}
            Icon={() => <TrashIcon />}
            label={'현재 사진 삭제하기'}
          />
        </Modal>
      </Container>
    </Layout>
  );
};

export default MyPage;
