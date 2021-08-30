import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";
import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {/*{['Home', 'News', 'Contact'].map((text, index) => (*/}
                {/*    <ListItem button key={text}>*/}
                {/*        <ListItemIcon>{index % 2 === 0 ? 'g' : 'gf'}</ListItemIcon>*/}
                {/*        <ListItemText primary={text} />*/}
                {/*    </ListItem>*/}
                {/*))}*/}

                <nav className={styles.navBarMobile}>
                    <ul>
                        <li>
                                <Link href="/#benefits">
                                    <a>Benefits</a>
                                </Link>
                        </li>
                        <li>

                                <Link href="/news">
                                    <a>News</a>
                                </Link>

                        </li>
                        <li>

                                <Link href="/#faq">
                                    <a>FAQ</a>
                                </Link>

                        </li>
                        <li>

                                <Link href="/#contacts">
                                    <a>Contacts</a>
                                </Link>

                        </li>
                    </ul>
                </nav>
            </List>
            <Divider />
            <List>
                {/*{['Login', 'Join Urrra!'].map((text, index) => (*/}
                {/*    <ListItem button key={text}>*/}
                {/*        <ListItemIcon>{index % 2 === 0 ? 'tt' : 'uy'}</ListItemIcon>*/}
                {/*        <ListItemText primary={text} />*/}
                {/*    </ListItem>*/}
                {/*))}*/}
                <nav className={styles.navBarMobile}>
                    <ul>
                        <li>
                            <Link href="/login">
                                <a>Login</a>
                            </Link>

                        </li>
                        <li>
                            <a className={styles.joinMobile}>
                                <span>Join Urrra!</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </List>
        </div>
    );

    return (
        <div className={styles.burgermenuButton}>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} >
                        < GiHamburgerMenu className={styles.burgermenuIcon}/>
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}