import {Container, Grid} from "@material-ui/core";
import styles from "../../../styles/join.module.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import Join2_1 from './join2_1'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    const [currency, setCurrency] = React.useState('');

    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };
    const [categories, setCategories] = React.useState('');

    const handleChangeCategories = (event) => {
        setCategories(event.target.value);
    };
    const [type_1, setType_1] = React.useState('');
    const handleChangeType_1 = (event) => {
        setType_1(event.target.value);
    };

    const [type_2, setType_2] = React.useState('');
    const handleChangeType_2 = (event) => {
        setType_2(event.target.value);
    };

    const [country, setCountry] = React.useState('');
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };
    return (
        <div data-aos="fade-left" >

        <Grid container  alignItems="center" justify="center" style={styleback}>
            <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} >
                <Grid container>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} className={styles.regForm}>
                        <h2>Store info</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <TextField
                            className={classes.margin}
                            label="* Store appearance name"
                            variant="outlined"
                            id="appearance_name"
                        />
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        <FormControl variant="outlined"  style={{width:'100%'}}>
                            <InputLabel id="categories-label" style={{marginLeft: '33px'}}>* Categories</InputLabel>
                            <Select
                                labelId="categories-label"
                                style={{margin: '5px auto 0 auto'}}
                                className={classes.margin}

                                id="categories"
                                value={categories}
                                onChange={handleChangeCategories}
                                label="categories-label"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>

                        <FormControl variant="outlined"  style={{width:'100%'}}>
                            <InputLabel id="currency-label" style={{marginLeft: '33px'}}>* Currency</InputLabel>
                            <Select
                                labelId="currency-label"
                                style={{margin: '5px auto 0 auto'}}
                                className={classes.margin}

                                id="currency"
                                value={currency}
                                onChange={handleChangeCurrency}
                                label="currency-label"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        {/*<TextField*/}
                        {/*    className={classes.margin}*/}
                        {/*    label="* Type 1"*/}
                        {/*    variant="outlined"*/}
                        {/*    id="type_1"*/}
                        {/*/>*/}
                        <FormControl variant="outlined"  style={{width:'100%'}}>
                            <InputLabel id="type_1-label" style={{marginLeft: '33px'}}>* Type 1</InputLabel>
                            <Select
                                labelId="type_1-label"
                                style={{margin: '5px auto 0 auto'}}
                                className={classes.margin}

                                id="type_1"
                                value={type_1}
                                onChange={handleChangeType_1}
                                label="type_1-label"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>

                        <FormControl variant="outlined"  style={{width:'100%'}}>
                            <InputLabel id="type_2-label" style={{marginLeft: '33px'}}>* Type 2</InputLabel>
                            <Select
                                labelId="type_2-label"
                                style={{margin: '5px auto 0 auto'}}
                                className={classes.margin}

                                id="type_2"
                                value={type_2}
                                onChange={handleChangeType_2}
                                label="type_2-label"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                        {/*<TextField*/}
                        {/*    className={classes.margin}*/}
                        {/*    // className={classes.margin}*/}
                        {/*    label="* Country"*/}
                        {/*    variant="outlined"*/}
                        {/*    id="country"*/}
                        {/*    // fullWidth = 'true'*/}
                        {/*/>*/}
                        <FormControl variant="outlined"  style={{width:'100%'}}>
                            <InputLabel id="country-label" style={{marginLeft: '33px'}}>* Country</InputLabel>
                            <Select
                                labelId="country-label"
                                style={{margin: '5px auto 0 auto'}}
                                className={classes.margin}

                                id="country"
                                value={country}
                                onChange={handleChangeCountry}
                                label="type_2-label"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Armenia</MenuItem>
                                <MenuItem value={20}>United States</MenuItem>
                                <MenuItem value={30}>Indonesia</MenuItem>
                                <MenuItem value={30}>Philippines</MenuItem>
                                <MenuItem value={30}>Vietnam</MenuItem>
                                <MenuItem value={30}>United Kingdom</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Join2_1 />
        </div>

    )
}