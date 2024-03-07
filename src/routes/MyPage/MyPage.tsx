import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  getProfile,
  useDeleteProfileImg,
  useGetPresignedURL,
  useUpdateProfileImgURL,
} from '@apis/profile/useProfile';
import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import useActionSheet from '@hooks/useModal/useActionSheet';

import { colors } from '@styles/theme';

import { AlbumIcon, CameraIcon, RightChevronIcon, TrashIcon } from '@icons/index';

import {
  BackButton,
  Container,
  Divider,
  ImageInput,
  ModifyProfileButton,
  PhotoButton,
  ProfileImgContainer,
} from './MyPage.styles';

const MyPage = () => {
  const navigate = useNavigate();

  const profileImageInputRef = useRef<HTMLInputElement>(null);

  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [nickName, setNickName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [presignedURL, setpresignedURL] = useState<string>('');

  const getProfileImgMutation = useGetPresignedURL('.' + fileName);
  const updateProfileImgURLMutation = useUpdateProfileImgURL(presignedURL);
  const deleteProfileImg = useDeleteProfileImg();

  const removeQueryString = (url: string): string => {
    const urlObj = new URL(url);
    return `${urlObj.origin}${urlObj.pathname}`;
  };

  const uploadFile = async () => {
    if (!fileName || !file) {
      return;
    }
    try {
      const presignedURLResponse = await getProfileImgMutation.mutateAsync();
      const imageUrl = removeQueryString(presignedURLResponse.presignedUrl);

      setpresignedURL(imageUrl);

      const result = await fetch(presignedURLResponse.presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/' + fileName,
        },
        body: file,
      });

      if (result.ok) {
        await updateProfileImgURLMutation.mutateAsync();
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Get PresignedURL failed');
    }
  };

  const handleSelectFromAlbum = () => {
    profileImageInputRef.current?.click();
  };

  const handleDeleteCurrentProfileImg = () => {
    setProfileImg(null);
    const res = deleteProfileImg.mutate();
    console.log('delete성공', res);
    toggleModal();
  };

  const handleProfileImgFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files?.[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result as string);
      const type = fileObj.name.split('.');
      setFileName(type[type.length - 1].toLowerCase());
      setFile(fileObj);
    };
    reader.readAsDataURL(fileObj);
    toggleModal();
  };

  const handleOnClickPhotoButton = () => {
    toggleModal();
  };

  const handleOnClickModifyProfile = () => {
    navigate('/mypage/modify-profile', { state: { birth, gender } });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response.profileImageUrl) {
          setProfileImg(response.profileImageUrl);
        }
        setNickName(response.nickname);
        setBirth(response.birth.replace(/-/g, '/'));
        setGender(response.gender === 'FEMALE' ? '여자' : '남자');
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

  const { Modal: ImageActionSheet, toggleModal } = useActionSheet({
    actions: [
      {
        icon: <AlbumIcon />,
        label: '앨범에서 가져오기',
        onClick: handleSelectFromAlbum,
      },
      {
        icon: <TrashIcon />,
        label: '현재 사진 삭제하기',
        confirm: {
          description: '현재 프로필 사진을 삭제합니다.',
          label: '삭제하기',
          onConfirm: handleDeleteCurrentProfileImg,
        },
      },
    ],
  });

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
              <Text
                size={16}
                weight={400}
                color={colors.white}
                onClick={handleOnClickModifyProfile}
              >
                내 정보 수정
              </Text>
              <ModifyProfileButton onClick={handleOnClickModifyProfile}>
                <RightChevronIcon stroke={colors.white_40} />
              </ModifyProfileButton>
            </Row>
            <Divider />
            <Text
              style={{ padding: '0 7px' }}
              size={16}
              weight={400}
              color={colors.white}
              align="start"
            >
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
            <Row>
              <Text
                style={{ padding: '0 7px' }}
                size={16}
                weight={400}
                color={colors.white}
                align="start"
              >
                로그아웃
              </Text>
            </Row>
          </Col>
        </Col>
        <ImageInput
          id="profileImg"
          ref={profileImageInputRef}
          type="file"
          accept="image/*"
          onChange={handleProfileImgFileChange}
        />
        <ImageActionSheet />
      </Container>
    </Layout>
  );
};

export default MyPage;
