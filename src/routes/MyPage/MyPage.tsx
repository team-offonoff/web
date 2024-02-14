import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProfile, useGetPresignedURL, useUpdateProfileImgURL } from '@apis/profile/useProfile';
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

  const [profileImg, setProfileImgUrl] = useState<string | null>(null);
  const [nickName, setNickName] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [presignedURL, setpresignedURL] = useState<string>('');

  const updateProfileImgMutation = useGetPresignedURL('.' + fileName);
  const updateProfileImgURLMutation = useUpdateProfileImgURL(presignedURL);

  const { Modal, toggleModal } = useModal('action');

  const removeQueryString = (url: string): string => {
    const urlObj = new URL(url);
    return `${urlObj.origin}${urlObj.pathname}`;
  };

  const uploadFile = async () => {
    if (!fileName || !file) {
      return;
    }
    try {
      const presignedURLResponse = await updateProfileImgMutation.mutateAsync();
      const imageUrl = removeQueryString(presignedURLResponse.presignedUrl);

      console.log(imageUrl);
      setpresignedURL(imageUrl);

      const result = await fetch(presignedURLResponse.presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/' + fileName,
        },
        body: file,
      });

      if (result.ok) {
        console.log('Upload successful');
        const res = await updateProfileImgURLMutation.mutateAsync();
        console.log('result', res);
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      // 오류 처리 로직
    }
  };

  const handleSelectFromAlbum = () => {
    profileImageInputRef.current?.click();
  };

  const handleProfileImgFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files?.[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImgUrl(reader.result as string);
      const type = fileObj.name.split('.');
      setFileName(type[type.length - 1].toLowerCase());
      setFile(fileObj);
    };
    reader.readAsDataURL(fileObj);
    toggleModal();
  };

  const handleRemoveCurrentImage = () => {};

  const handleOnClickPhotoButton = () => {
    toggleModal();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response.profileImageUrl) {
          setProfileImgUrl(response.profileImageUrl);
        }
        setNickName(response.nickname);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (fileName && file) {
      uploadFile();
    }
  }, [fileName, file]);

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
              <ProfileImg url={profileImg} size={102} rounded={true}></ProfileImg>
              <PhotoButton onClick={handleOnClickPhotoButton}>
                <CameraIcon />
              </PhotoButton>
            </ProfileImgContainer>
            <Text size={22} weight={600} color={colors.white}>
              {nickName}
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
