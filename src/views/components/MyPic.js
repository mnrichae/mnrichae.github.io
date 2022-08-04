import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
import Image from '../../media/display.jpg'


export default function MyPic() {
  return (
      <Avatar
        src={Image}
        sx={{ width: 200, height: 200 }}
      />
  );
}
