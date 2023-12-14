import { useCallback, useState } from 'react';

import BottomSheet from '@components/commons/BottomSheet/BottomSheet';

interface UseBottomSheetProps {
  snapPoints?: number[];
  initialSnap?: number;
}

const useBottomSheet = (props: UseBottomSheetProps) => {
  const { snapPoints = [0.9, 0.7, 0], initialSnap = 0.7 } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const Sheet = ({ children }: { children: React.ReactNode }) => (
    <BottomSheet
      open={isOpen}
      setIsOpen={setIsOpen}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
    >
      {children}
    </BottomSheet>
  );

  return { BottomSheet: isOpen ? Sheet : () => null, toggleSheet };
};

export default useBottomSheet;
