import { useCallback, useState } from 'react';

import BottomSheet from '@components/commons/BottomSheet/BottomSheet';

interface UseBottomSheetProps {
  snapPoints?: number[];
  initialSnap?: number;
  transparent?: boolean;
}

const useBottomSheet = (props: UseBottomSheetProps) => {
  const { snapPoints = [0.9, 0.7, 0], initialSnap = 0.7, transparent = true } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const Sheet = useCallback(
    ({ children }: { children: React.ReactNode }) => (
      <BottomSheet
        open={isOpen}
        setIsOpen={setIsOpen}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        transparent={transparent}
      >
        {children}
      </BottomSheet>
    ),
    [isOpen]
  );

  return { BottomSheet: Sheet, toggleSheet, isOpen };
};

export default useBottomSheet;
