import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';

export default function Navbar()
{
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small" component={Link} to='/'>Michael Virga</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="right"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">

                        <NavLink style={{textDecoration: 'none'}} to="/">
                            {({ isActive, isPending }) => (
                                <Button variant={isActive ? "outlined" : "contained"}>About Me</Button>
                            )}
                        </NavLink>
                        <NavLink style={{textDecoration: 'none'}} to="/portfolio">
                            {({ isActive, isPending }) => (
                                <Button variant={isActive ? "outlined" : "contained"}>Portfolio</Button>
                            )}
                        </NavLink>
                        <NavLink style={{textDecoration: 'none'}} to="/contact">
                            {({ isActive, isPending }) => (
                                <Button variant={isActive ? "outlined" : "contained"}>Contact Me</Button>
                            )}
                        </NavLink>
                        <NavLink style={{textDecoration: 'none'}} to="/resume">
                            {({ isActive, isPending }) => (
                                <Button variant={isActive ? "outlined" : "contained"}>Resume</Button>
                            )}
                        </NavLink>
                    </ButtonGroup>
                </Typography>

            </Toolbar>
        </React.Fragment>
    );
}