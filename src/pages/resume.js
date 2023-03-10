import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ListItem, ListItemText } from '@mui/material';
import resume from '../assets/resume.pdf';

const theme = createTheme();

export default function About()
{
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 10,
                            mx: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Resume
                        </Typography>
                        <hr />
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        My skills include:
                        <ListItemText primary="Javascript" />
                        <ListItemText primary="Node.JS" />
                        <ListItemText primary="React" />
                        <ListItemText primary="MySQL" />
                        <ListItemText primary="Sequelize" />
                        <ListItemText primary="Bootstrap" />
                        <ListItemText primary="... and much more!" />
                        </Typography>
                        <hr />
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Interested in a resume? Download it <Link href={resume}>here.</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}