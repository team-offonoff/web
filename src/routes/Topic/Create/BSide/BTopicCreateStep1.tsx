import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';

import { Col } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';
import { theme2, theme3 } from '@components/commons/TextInput/theme';

import { colors } from '@styles/theme';

import { CategoryChip, CategoryChipContainer, Container } from './BTopicCreateStep1.styles';

interface BTopicCreareProps {
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const BTopicCreateStep1 = () => {
  const methods = useFormContext();
  const titleProgress = methods.watch(INPUT_TYPE.TOPICTITLE)
    ? `${methods.watch(INPUT_TYPE.TOPICTITLE)?.length}/20`
    : '0/20';

  const categoryProgress = methods.watch(INPUT_TYPE.TOPICCATEGORY)
    ? `${methods.watch(INPUT_TYPE.TOPICCATEGORY)?.length}/6`
    : '0/6';

  const categoryChipList = ['스포츠', '연예방송', '일상다반사', '게임', '일상'];

  const handleCategoryChipClick = (categoryChip: string) => {
    methods.setValue(INPUT_TYPE.TOPICCATEGORY, categoryChip);
    methods.clearErrors(INPUT_TYPE.TOPICCATEGORY);
  };

  return (
    <Container>
      <Col gap={63}>
        <Col gap={20} padding={'0 20px'}>
          <Text size={16} weight={400} color={colors.white_60} align="start">
            어떤 주제로 물어볼까요?
          </Text>
          <TextInput
            id={INPUT_TYPE.TOPICTITLE}
            options={CONFIG.TOPICTITLE.options}
            placeholder={'제목을 입력해주세요.'}
            theme={theme3}
            right={() => (
              <Text style={{ opacity: 0.6 }} size={15} weight={400} color={colors.purple}>
                {titleProgress}
              </Text>
            )}
          />
        </Col>
        <Col gap={30}>
          <Col gap={16} padding={'0 20px'}>
            <Text size={16} weight={400} color={colors.white_60} align="start">
              토픽의 카테고리를 알려주세요
            </Text>
            <TextInput
              id={INPUT_TYPE.TOPICCATEGORY}
              options={CONFIG.TOPICCATEGORY.options}
              placeholder={'한글, 영문, 숫자만 가능.'}
              theme={theme2}
              right={() => (
                <Text style={{ opacity: 0.6 }} size={14} weight={600} color={colors.purple_60}>
                  {categoryProgress}
                </Text>
              )}
            />
          </Col>
          <Col gap={12} padding={'0 0 0 20px'}>
            <Text size={16} weight={400} color={colors.white_60} align="start">
              추천 키워드
            </Text>
            <CategoryChipContainer>
              {categoryChipList.map((categoryChip, index) => (
                <CategoryChip
                  onClick={() => {
                    handleCategoryChipClick(categoryChip);
                  }}
                  key={index}
                >
                  {categoryChip}
                </CategoryChip>
              ))}
            </CategoryChipContainer>
            <Text size={13} weight={600} color={colors.white_20} align="start">
              비속어를 포함한 부적절한 단어의 태그를 입력할 경우 <br />
              게시물 삭제 및 이용 제재를 받을 수 있어요.
            </Text>
          </Col>
        </Col>
      </Col>
    </Container>
  );
};

export default BTopicCreateStep1;