import Text from '@components/commons/Text/Text';
import { SideImage } from '@components/Home/ChoiceSlide/ChoiceSlide.styles';
import { Choice } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { CrownIcon } from '@icons/index';

import {
  ASideContainer,
  BSideContainer,
  CrownContainer,
  ResultSlideTextContainer,
} from './ResultSlide.styles';

interface Props {
  choice: Choice;
}

const ResultSlide = ({ choice }: Props) => {
  const SlideContainer = choice.choiceOption === 'CHOICE_A' ? ASideContainer : BSideContainer;

  return (
    <div style={{ position: 'relative', marginTop: 50, width: '100%' }}>
      <CrownContainer>
        <CrownIcon />
      </CrownContainer>
      <SlideContainer>
        <div
          style={{
            position: 'absolute',
            top: -45,
            left: '50%',
            transform: 'translate(-50%, 0%)',
          }}
        >
          <Text
            color={choice.choiceOption === 'CHOICE_A' ? '#e15ba1' : '#19b1be'}
            size={200}
            weight={900}
          >
            {choice.choiceOption === 'CHOICE_A' ? 'A' : 'B'}
          </Text>
        </div>

        {choice.content.imageUrl ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: choice.choiceOption === 'CHOICE_A' ? 'flex-end' : 'flex-start',
            }}
          >
            <SideImage src={choice.content.imageUrl} />
          </div>
        ) : (
          <ResultSlideTextContainer>
            <Text
              style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
              color={colors.white}
              size={choice.content.text && choice.content.text.length >= 21 ? 16 : 20}
              weight={600}
              align="center"
            >
              {choice.content.text}
            </Text>
          </ResultSlideTextContainer>
        )}
      </SlideContainer>
    </div>
  );
};

export default ResultSlide;
