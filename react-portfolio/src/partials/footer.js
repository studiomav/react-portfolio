import * as React from 'react';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Box } from '@mui/system';

function handleClick(url)
{
  window.open(url);
}

export default function Footer()
{
    return (
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Chip icon={<GitHubIcon />} label="github" onClick={function(){handleClick('https://github.com/studiomav')}}/>
        <Chip icon={<LinkedInIcon />} label="linkedin" onClick={function(){handleClick('https://www.linkedin.com/in/michael-virga-694833b0/')}}/>
        <Chip icon={<LogoDevIcon />} label="dev.to" onClick={function(){handleClick('https://dev.to/mav')}}/>
      </Box>
    );
}