import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Card style={{ borderRadius: 8, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <CardActionArea href={link} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 300 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ fontWeight: 300 }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
