import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import techblog from '../assets/techblog.png';
import codequiz from '../assets/codequiz.png';
import notetaker from '../assets/notetaker.png';
import readmegen from '../assets/readmegen.png';
import weatherapp from '../assets/weatherapp.png';
import workday from '../assets/workday.png';

const theme = createTheme();

export default function Portfolio()
{
    return (
        <ThemeProvider theme={theme}>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Portfolio
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Some assorted projects.
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>

                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                            <Link href='https://github.com/studiomav/techblog' style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={techblog}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Techblog
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This functional blogging platform uses express, sequelize, and handlebars
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>

                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                            <Link href='https://github.com/studiomav/note-taker-app' style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={notetaker}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Note Taker App
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                           This app allows for the saving, editing, and deleting of local-storage based notes
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>

                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                            <Link href='https://github.com/studiomav/readme-generator' style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={readmegen}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Readme Generator
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This script allows for quicker and easier readme generation
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>

                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                            <Link href='https://github.com/studiomav/weather-dashboard' style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={weatherapp}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Weather Dashboard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                           This simple app allows for searching and viewing current weather conditions
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>

                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                            <Link href='https://github.com/studiomav/work-day-scheduler' style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={workday}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Work Day Scheduler
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This simple app allows the user to plan out their tasks for the day
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>

                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <Link href='https://github.com/studiomav/interactive-code-quiz' style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={codequiz}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Code Quiz
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This is an interactive timed multiple-choice quiz with various coding-related questions
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}