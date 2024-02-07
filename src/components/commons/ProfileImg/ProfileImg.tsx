import React from 'react';

import { DefaultProfileIcon } from '@icons/index';

interface ProfileImgProps {
  url: string | null;
  size?: string | number;
  rounded?: boolean;
}

const ProfileImg = ({ url, size = '100%', rounded = true }: ProfileImgProps) => {
  if (!url) {
    return (
      <div>
        <DefaultProfileIcon
          width={size}
          height={size}
          style={rounded ? { borderRadius: '50%' } : {}}
        />
      </div>
    );
  }

  return (
    <img
      src={url}
      alt="프로필 이미지"
      width={size}
      height={size}
      style={rounded ? { borderRadius: '50%' } : {}}
    />
  );
};

export default ProfileImg;
