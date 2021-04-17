import React, { memo } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

const player = () => {
  return (
    <Video autoPlay loop muted
    controls={[]}
    >
      <source src="/videos/konform-frontpage01.mp4" type="video/mp4" />
    </Video>
  );
};

export default memo(player);