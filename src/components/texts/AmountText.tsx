import { Box, Typography } from '@mui/material';

import { AmountTextPropType } from '@apptypes/propTypes';
import React from 'react';

function AmountText({ amt, unit }: AmountTextPropType) {
  return (
    <Box display={'flex'} gap={1} justifyContent={'center'} alignItems={'center'}>
      <Typography component={'h1'} variant="h1" fontWeight={600}>
        {amt}
      </Typography>
      <Typography component={'h5'} variant="h5" sx={{ fontSize: '2rem' }}>
        {unit}
      </Typography>
    </Box>
  );
}

export default AmountText;
