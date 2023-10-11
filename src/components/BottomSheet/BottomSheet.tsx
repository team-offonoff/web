import React, { useEffect, useRef, useState } from 'react';
import { motion, PanInfo, useAnimation, useDragControls, useMotionValue } from 'framer-motion';

import ReactPortal from '@components/Portal/Portal';

import { SheetContainer, Sheet } from './BottomSheet.styles';

interface BottomSheetProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const BottomSheet = ({ open, setIsOpen, children }: BottomSheetProps) => {
  const hiddenHeight = 240;

  const constraintsRef = useRef(null);
  const animationControls = useAnimation();
  const y = useMotionValue(0);

  const onClose = () => setIsOpen(false);

  const onOpen = () => setIsOpen(true);

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    console.log('🚀 ~ file: BottomSheet.tsx:26 ~ onDragEnd ~ info:', info);
    if (info.velocity.y < 0) {
      animationControls.start('visible');
    } else {
      animationControls.start('hidden');
    }
  };

  return (
    <ReactPortal>
      <SheetContainer ref={constraintsRef}>
        <Sheet
          layout
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={0}
          onDragEnd={onDragEnd}
          initial="hidden"
          animate={animationControls}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 400,
            bounce: 0,
          }}
          variants={{
            visible: { y: 100 },
            hidden: { y: `calc(100% - ${hiddenHeight}px)` },
            // closed: { y: '100%' },
          }}
          style={{ y }}
        >
          {children}
        </Sheet>
      </SheetContainer>
    </ReactPortal>
  );
};

export default BottomSheet;
