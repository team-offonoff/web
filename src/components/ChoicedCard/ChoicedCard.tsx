import React from 'react';

interface ChoicedCardProps {
  side: 'A' | 'B';
}

const ChoicedCard = ({ side }: ChoicedCardProps) => {
  return <div style={{ height: 246 }}>ChoicedCard</div>;
};

export default ChoicedCard;
