import { motion, PanInfo, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';
import { styled } from 'styled-components';

import ReactPortal from '@components/commons/Portal/Portal';

interface BottomSheetProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  snapPoints?: number[];
  initialSnap?: number;
  children: React.ReactNode;
}

const BottomSheet = ({
  open,
  setIsOpen,
  snapPoints = [0.9, 0.7, 0],
  initialSnap = 0.7,
  children,
}: BottomSheetProps) => {
  const screenHeight = window.innerHeight;

  const variants = snapPoints.reduce(
    (acc, snapPoint, index) => {
      acc[index] = {
        y: -(screenHeight * snapPoint),
      };
      return acc;
    },
    {} as Record<number, { y: number }>
  );
  const initial = snapPoints.indexOf(initialSnap);

  const y = useMotionValue(0);
  const height = useTransform(y, (latest) => {
    return -latest;
  });
  const controls = useAnimation();

  useEffect(() => {
    controls.start('1');
  }, []);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const variant1Position = screenHeight + variants['1'].y;

    // 1 -> 0
    if (info.velocity.y < 0) {
      controls.start('0');
      return;
    }
    // 1 -> 2
    if (info.velocity.y > 0 && info.point.y >= variant1Position) {
      controls.start('2');
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
      return;
    }
    // 2 -> 1
    if (info.velocity.y > 0 && info.point.y < variant1Position) {
      controls.start('1');
      return;
    }
  };

  const handleOnClickBackdrop = () => {
    controls.start('2');
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  if (initial !== undefined && !snapPoints.includes(initialSnap)) {
    throw new Error('Initial value must be included in snapPoints');
  }

  if (!open) {
    return <></>;
  }

  return (
    <ReactPortal>
      <Backdrop
        onClick={handleOnClickBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <Wrapper
        drag="y"
        dragConstraints={{
          top: -window.innerHeight,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dragElastic={0}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        initial={'2'}
        animate={controls}
        onDragEnd={handleDragEnd}
        variants={variants}
        style={{ y: y }}
      >
        <Container style={{ height: height }}>
          <Content>
            <HandleBar />
            {children}
          </Content>
        </Container>
      </Wrapper>
    </ReactPortal>
  );
};

const HandleBar = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 40px;
  height: 4px;
  background-color: #e6e6e6;
  border-radius: 5px;
  transform: translateX(-50%);
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.zIndex.sheet};
  width: 100%;
  height: 100%;

  /* background: rgb(0 0 0 / 50%); */
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  left: 0;
  z-index: ${(props) => props.theme.zIndex.sheet};
  max-width: 512px;
  height: 100vh;
  margin: 0 auto;
`;

const Container = styled(motion.div)`
  box-sizing: border-box;
`;

const Content = styled.div`
  height: 100%;
  padding-top: 10px;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default BottomSheet;
