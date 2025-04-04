import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" style={{ fontWeight: 300 }}>
          Vinícius Giroto Francischinelli
        </Typography>
        <nav>
          <a href="#sobre" style={{ margin: '0 1rem', fontWeight: 300 }}>Sobre</a>
          <a href="#projetos" style={{ margin: '0 1rem', fontWeight: 300 }}>Projetos</a>
          <a href="#contato" style={{ margin: '0 1rem', fontWeight: 300 }}>Contato</a>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
