import {Container, Grid} from "@material-ui/core";
import styles from "../../../styles/join.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import Image from "next/image";
import doneIcon from "../../../public/sectionImages/doneICON.png";


export default function Done() {

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
        <Grid container  alignItems="center"  style={styleback}>
            <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} >
                <Grid container justify="center">
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} className={styles.regForm} >
                        <Image className={styles.imgDone}  src={doneIcon} alt="Picture of the done" />
                        <h2 className={styles.titleDone}>Done !</h2>
                            <h4 className={styles.subtitleDone}>Your information has been successfully sent</h4>
                            <h6 className={styles.descriptionDone}>We will contact you shortly</h6>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}