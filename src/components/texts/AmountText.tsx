import { Box, Typography } from '@mui/material';

import { AmountTextPropType } from '@apptypes/propTypes';
import React from 'react';

function AmountText({ amt, unit }: AmountTextPropType) {
  return (
    <Box display={'flex'} gap={1} justifyContent={'center'} alignItems={'center'}>
      <Typography component={'h1'} variant="h1" fontWeight={600} fontSize="5rem">
        {amt}
      </Typography>
      <Typography component={'h6'} variant="h6">
        {unit}
      </Typography>
    </Box>
  );
}

export default AmountText;
