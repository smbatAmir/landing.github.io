import {Container, Fab, FormControlLabel, Grid, Radio, RadioGroup} from "@material-ui/core";
import styles from "../../../styles/join.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Link from "@material-ui/core/Link";
import {BsCloudUpload} from "@react-icons/all-files/bs/BsCloudUpload";
import Checkbox from '@material-ui/core/Checkbox';
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default function Join4() {
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
                    <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} className={styles.regForm}>
                        <h2>Terms & conditions</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <FormControl component="fieldset" style={{width:'100%'}}>
                            <RadioGroup aria-label="gender" name="gender1" style={{flexDirection: 'row'}} >
                            <Grid container>
                                <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'start'}} className={styles.radioInput}>
                                    <FormControlLabel id='ok'  value="female" control={<Radio />} label="Accept" />
                                    <Link href="#">
                                        <a>Uraaa return policy </a>
                                    </Link>
                                </Grid>
                                <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'start'}}>
                                    <FormControlLabel  value="male" control={<Radio />} label="Own policy" />
                                    <label htmlFor="upload-photo">
                                        <input
                                            style={{ display: 'none' }}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file"
                                        />
                                        <span className={styles.uploadIcon}><BsCloudUpload/> <span>upload The Document</span></span>
                                        <Grid container>
                                            <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} style={{textAlign:'start'}} className={styles.radioInput}>
                                                <span className={styles.numberInput}>* Return days</span>
                                                <TextField
                                                    id="standard-number"
                                                    label="Number"
                                                    // value={this.state.age}
                                                    // onChange={this.handleChange('age')}
                                                    type="number"
                                                    // className={classes.textField}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    margin="normal"
                                                />
                                            </Grid>
                                        </Grid>

                                    </label>

                                </Grid>
                                <Grid container>
                                    <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} style={{textAlign:'start'}} className={styles.radioInput}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // checked={this.state.checkedB}
                                                    // onChange={this.handleChange('checkedB')}
                                                    value="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Accept"
                                        />
                                        {/*<span className={styles.accSt}>*/}
                                        <Link href="/">
                                            <a >Uraaa terms & conditions</a>
                                        </Link>
                                            {/*</span>*/}
                                    </Grid>
                                </Grid>
                            </Grid>


                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/*<Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>*/}
                    {/*    <TextField*/}
                    {/*        className={classes.margin}*/}
                    {/*        // className={classes.margin}*/}
                    {/*        label="Your email"*/}
                    {/*        variant="outlined"*/}
                    {/*        id="email"*/}
                    {/*        // fullWidth = 'true'*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                </Grid>
                {/*<Grid container>*/}
                {/*    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>*/}
                {/*        <TextField*/}
                {/*            className={classes.margin}*/}
                {/*            // className={classes.margin}*/}
                {/*            label="Your password"*/}
                {/*            variant="outlined"*/}
                {/*            id="password"*/}
                {/*            // fullWidth = 'true'*/}
                {/*            type="password"*/}
                {/*        />*/}
                {/*    </Grid>*/}
                {/*    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>*/}
                {/*        <TextField*/}
                {/*            className={classes.margin}*/}
                {/*            // className={classes.margin}*/}
                {/*            label="Repeat password"*/}
                {/*            variant="outlined"*/}
                {/*            id="password"*/}
                {/*            // fullWidth = 'true'*/}
                {/*            type="password"*/}
                {/*        />*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Grid>
        </Grid>
        </div>
    )
}