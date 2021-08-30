import {Container, Grid} from "@material-ui/core";
import styles from "../../../styles/join.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Join1() {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',

        },
        margin: {
            margin: theme.spacing(1),
            width:'70%',
            border: '1px solid #C8C7CC',
            boxSizing: 'border-box',
            borderRadius: '12px',
            outline:'none'

        },
    }));
    const classes = useStyles();

    const theme = createTheme({
        palette: {
            primary: green,
        },
    });
    const styleback = {
        boxShadow: '8px 28px 74px rgba(184, 54, 0, 0.12)',
        borderRadius: '16px',
        padding: '15px 30px',
        background:'#fff'
    }
    return (
        <div data-aos="fade-left" >

        <Grid container  alignItems="center" justify="center" style={styleback}>
            <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} >
                <Grid container>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} className={styles.regForm}>
                        <h2>Sign up</h2>
                        <h3>Create your Log In</h3>
                    </Grid>
                </Grid>
               <Grid container>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                               className={classes.margin}
                               label="Your Name"
                               variant="outlined"
                               id="email"
                        />
                    </Grid>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                                  className={classes.margin}
                            // className={classes.margin}
                                   label="Your email"
                                   variant="outlined"
                                   id="email"
                                   // fullWidth = 'true'
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                            className={classes.margin}
                            // className={classes.margin}
                            label="Your password"
                            variant="outlined"
                            id="password"
                            // fullWidth = 'true'
                            type="password"
                        />
                    </Grid>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                            className={classes.margin}
                            // className={classes.margin}
                            label="Repeat password"
                            variant="outlined"
                            id="password"
                            // fullWidth = 'true'
                            type="password"
                        />
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}