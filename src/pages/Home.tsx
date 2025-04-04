import React from 'react';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import foto from '../assets/LNI04025.png'

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição breve do projeto 1.',
    imageUrl: '',
    link: '#',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição breve do projeto 2.',
    imageUrl: '',
    link: '#',
  },
 
];

const Home: React.FC = () => {
  return (
    <Container className="container">
      <Box my={6} textAlign="center">
        <Avatar
          alt="Minha Foto"
          src={foto}
          sx={{
            width: 240,
            height: 240,
            margin: '0 auto',
            mb: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
        <Typography variant="h3" style={{ fontWeight: 300 }}>
          Olá, eu sou Vinícius Giroto Francischinelli
        </Typography>
        <Typography variant="h6" color="textSecondary" style={{ fontWeight: 300 }}>
          Desenvolvedor Full Stack
        </Typography>
      </Box>

      <Box id="projetos" my={6}>
        <Typography variant="h4" style={{ fontWeight: 300, marginBottom: '1rem' }}>
          Projetos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project/*, index*/) => (
            <Grid container spacing={2}>
                <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
