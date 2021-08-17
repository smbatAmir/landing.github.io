import {Container, Grid} from "@material-ui/core";
import styles from "../../join.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import {  withStyles } from '@material-ui/core';
import MuiPhoneNumber from "material-ui-phone-number";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);
export default function Join3() {

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
        <div data-aos="fade-left">

        <Grid container  alignItems="center" justify="center" style={styleback}>
            <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} >
                <Grid container>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} className={styles.regForm}>
                        <h2>Contact Person’s Information</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                            className={classes.margin}
                            label="* Name"
                            variant="outlined"
                            id="name"
                        />
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                            className={classes.margin}
                            // className={classes.margin}
                            label="Middle Name"
                            variant="outlined"
                            id="middle_name"
                            // fullWidth = 'true'
                        />
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                            className={classes.margin}
                            // className={classes.margin}
                            label="* Surname"
                            variant="outlined"
                            id="surname"
                            // fullWidth = 'true'
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>

                        <TextField
                            className={classes.margin}

                            id="birthday"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }}
                        />
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <MuiPhoneNumber
                            className={classes.margin}
                            variant="outlined"
                            defaultCountry={"us"}
                            regions={['america', 'europe', 'asia', 'oceania', 'africa']}
                        />
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                            className={classes.margin}
                            // className={classes.margin}
                            label="* Email (Store email)"
                            variant="outlined"
                            id="store_email"
                            // fullWidth = 'true'
                            type="email"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} >
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" style={{flexDirection: 'row'}} >
                                <FormControlLabel  value="female" control={<Radio />} label="Female" />
                                <FormControlLabel  value="male" control={<Radio />} label="Male" />
                                <FormControlLabel  value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}