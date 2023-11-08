import { motion, PanInfo, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

import ReactPortal from '@components/Portal/Portal';

interface BottomSheetProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const BottomSheet = ({ open, setIsOpen, children }: BottomSheetProps) => {
  const VISIBLE = 600;
  const HIDDEN = 200;
  const INITIAL = HIDDEN;
  const variants = {
    visible: {
      y: -600,
    },
    hidden: {
      y: -200,
    },
    closed: {
      y: 0,
    },
  };

  const y = useMotionValue(INITIAL);
  const height = useTransform(y, (latest) => {
    return -latest;
  });
  const controls = useAnimation();

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.velocity.y < 0 && info.point.y < window.innerHeight - HIDDEN) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  };

  return (
    <ReactPortal>
      <Wrapper
        drag="y"
        dragConstraints={{
          top: -window.innerHeight,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dragElastic={0}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
        initial={'hidden'}
        animate={controls}
        onDragEnd={handleDragEnd}
        variants={variants}
        style={{ y: y }}
      >
        <Container style={{ height: height }}>{children}</Container>
      </Wrapper>
    </ReactPortal>
  );
};

export const Wrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  left: 0;
  max-width: 512px;
  height: 100vh;
  margin: 0 auto;
`;

export const Container = styled(motion.div)`
  height: 100%;
`;

export default BottomSheet;
