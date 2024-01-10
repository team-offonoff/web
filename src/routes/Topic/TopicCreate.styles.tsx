import { styled } from 'styled-components';

import { colors } from '@styles/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-top: 19px;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const EmptyDiv = styled.div`
  width: 24px;
  height: 24px;
`;

export const DownShevron = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 2px;
`;

export const SelectDescription = styled.div<{ selected: 'A' | 'B' | null }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (!props.selected ? 'visible' : 'hidden')};
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 14.44px;
  align-items: center;
  justify-content: center;
  width: 271.08px;
  height: 189px;
  margin-top: 16px;
`;

export const AButton = styled.button<{ selected: 'A' | 'B' | null }>`
  position: relative;
  z-index: ${(props) => (props.selected === 'B' ? 0 : 1)};
  width: 127.34px;
  height: 153px;
  padding: 4.94px 0 3.95px;
  background-color: transparent;
  filter: ${(props) => (props.selected === 'B' ? 'blur(1px)' : 'blur(0px)')};
  opacity: ${(props) => (props.selected === 'B' ? 0.3 : 1)};
  transition: 0.3s;

  &::after {
    position: absolute;
    top: 20px;
    right: 0;
    z-index: -1;
    width: 30px;
    height: 123px;
    content: '';
    background-color: transparent;
    box-shadow: ${(props) =>
      props.selected === 'A' ? '32px 0 30px 20px rgb(0 0 0 / 40%)' : 'none'};
  }
`;

export const BButton = styled.button<{ selected: 'A' | 'B' | null }>`
  z-index: ${(props) => (props.selected === 'A' ? 0 : 1)};
  width: 129.31px;
  height: 153px;
  background-color: transparent;
  filter: ${(props) => (props.selected === 'A' ? 'blur(1px)' : 'blur(0px)')};
  opacity: ${(props) => (props.selected === 'A' ? 0.3 : 1)};
  transition: 0.3s;

  &::after {
    position: absolute;
    top: 15px;
    left: 0;
    z-index: -1;
    width: 30px;
    height: 113px;
    content: '';
    background-color: transparent;
    box-shadow: ${(props) =>
      props.selected === 'B' ? '-32px 0 30px 20px rgb(0 0 0 / 40%)' : 'none'};
  }
`;

const DescriptionBase = styled.div`
  position: absolute;
  z-index: 2;
  width: 97px;
  height: 62px;
  font-size: 22px;
  font-weight: 700;
  line-height: 140%;
  text-shadow: 0 0 30px #242036;
  letter-spacing: 0.2px;
  pointer-events: none;
`;

export const ADescription = styled(DescriptionBase)<{ selected: 'A' | 'B' | null }>`
  top: 0;
  right: -111.78px;
  color: ${colors.A};
  text-align: start;
  visibility: ${(props) => (props.selected === 'A' ? 'visible' : 'hidden')};
`;

export const BDescription = styled(DescriptionBase)<{ selected: 'A' | 'B' | null }>`
  bottom: 0;
  left: -111.78px;
  color: ${colors.B};
  text-align: end;
  visibility: ${(props) => (props.selected === 'B' ? 'visible' : 'hidden')};
`;

export const DescriptionContainer = styled.div<{ selected: 'A' | 'B' | null }>`
  position: absolute;
  bottom: -40px;
  left: 50%;
  z-index: 1;
  width: 163px;
  height: 89px;
  visibility: ${(props) => (!props.selected ? 'visible' : 'hidden')};
  transform: translateX(-50%);
`;

export const Description = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: 600;
  line-height: 140%;
  color: ${colors.white};
  text-align: center;
  letter-spacing: 0.2px;
`;

export const DescriptionBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.navy};
  filter: blur(25px);
  border-radius: 84px;
  opacity: 0.7;
`;

export const SubDescription = styled.div<{ selected: 'A' | 'B' | null }>`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: ${colors.white_60};
  text-align: center;
  visibility: ${(props) => (props.selected === null ? 'hidden' : 'visible')};
`;

export const Background = styled.div`
  position: absolute;
  bottom: -52.85px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 422.52px;
  height: 407.85px;
  padding: 0 -2px 0 -45.52px;
  border-radius: 84px;
  opacity: 0.6;
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 355px;
  background: linear-gradient(180deg, rgb(36 32 54 / 0%) 30%, ${colors.purple} 150%);
  filter: blur(2px);
  opacity: 0.8;
`;

export const TopicCreateButton = styled.button<{ selected: 'A' | 'B' | null }>`
  position: absolute;
  bottom: 60px;
  z-index: 1;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 235px;
  height: 52px;
  padding: 14px 77px 13px 76px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.white};
  visibility: ${(props) => (props.selected === null ? 'hidden' : 'visible')};
  background-color: ${(props) => (props.selected === 'A' ? colors.A : colors.B)};
  border-radius: 50px;
  transition: 0.3s;
`;
