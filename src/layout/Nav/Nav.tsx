import React from 'react';
import { Link, useParams, Route, MemoryRouter } from 'react-router-dom';
import {
    Grid,
    Button,
    Zoom,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Menu,
    MenuItem,
    ListItemIcon,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    AccountCircleOutlined,
    ExitToApp,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { User } from 'types';

import AppBar from '../AppBar';

function formatTitle(str: string | undefined): string | undefined {
    if (!str) {
        return str;
    }
    return str
        .split('-')
        .map((word) => {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        })
        .join(' ');
}

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    rightMenu: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
    drawer: {
        minWidth: '240px',
    },
}));

export default function Nav() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const isLoggedIn = localStorage.getItem('logged-in');

    const handleClick = () => setOpen(false);

    const noUserMenu = (
        <div className={classes.rightMenu}>
            <Button color='inherit' component={Link} to='/auth/login'>
                Login
            </Button>
        </div>
    );

    const userMenu = (
        <div className={classes.rightMenu}>
            <IconButton
                color='inherit'
                onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
                aria-label='user-menu'
            >
                <AccountCircleOutlined />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem button>
                    <ListItemText primary='Profile' />
                </MenuItem>
                <MenuItem button>
                    <ListItemText primary='Logout' />
                </MenuItem>
            </Menu>
        </div>
    );

    return (
        <div>
            <AppBar>
                <IconButton
                    onClick={() => setOpen(true)}
                    className={classes.menuButton}
                    color='inherit'
                >
                    <MenuIcon />
                </IconButton>
                <Typography align='left' variant='h6' noWrap>
                    {formatTitle('prytaneum')}
                </Typography>
                {isLoggedIn ? userMenu : noUserMenu}
            </AppBar>
            <Drawer
                classes={{ paper: classes.drawer }}
                open={open}
                onClose={() => setOpen(false)}
            >
                <nav>
                    <List>
                        <li>
                            <ListItem
                                button
                                component={Link}
                                to='/townhalls/list'
                                onClick={handleClick}
                            >
                                <ListItemText primary='Townhalls' />
                            </ListItem>
                        </li>
                    </List>
                </nav>
            </Drawer>
        </div>
    );
}
