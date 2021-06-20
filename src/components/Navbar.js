import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import {Toolbar, AppBar, useStyles} from './SidebarStyle'

export default function Navbar({showSidebar}) {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => showSidebar()}
                    >
                        <ArrowForwardIosRoundedIcon fontSize="large" />
                    </IconButton>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="primary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={9} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" aria-label="show 17 new notifications" color="inherit" >
                            <Avatar src="https://i.ibb.co/Hrr4LwT/Arghadeep.jpg" alt="profile" className={classes.samll} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
