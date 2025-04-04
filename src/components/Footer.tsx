import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" textAlign="center" py={4} style={{ fontWeight: 300 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Vinícius Giroto Francischinelli. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
