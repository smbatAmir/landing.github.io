import React from 'react';
import {
    alpha,
    ThemeProvider,
    withStyles,
    makeStyles,
    createTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import {Grid, TextareaAutosize} from "@material-ui/core";
import {AiOutlineExclamationCircle} from "@react-icons/all-files/ai/AiOutlineExclamationCircle";
import styles from "../section1.module.css";
import {AiOutlineSend} from "@react-icons/all-files/ai/AiOutlineSend";

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const useStylesReddit = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));

function RedditTextField(props) {
    const classes = useStylesReddit();

    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);

const theme = createTheme({
    palette: {
        primary: green,
    },
});
const inputStyles = {
    borderRadius: '20px'
}
export default function CallBack() {
    const classes = useStyles();

    const  textField = {
        width: '46%'
    }
    const  imputStyle = {
        width: '98%'
    }
    const registerUser = event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
        // https://nextjs.org/blog/forms
        let phone = event.target.phone.value
        let birthday = event.target.birthday.value
        let clock = event.target.clock.value
        console.log(phone)
        console.log(birthday)
        console.log(clock)

    }
    return (
        <form className={classes.root} noValidate onSubmit={registerUser}>
            {/*<FormControl fullWidth className={classes.margin}>*/}
            <h3>Fill the form below and we will call you back <AiOutlineExclamationCircle /> </h3>
            <div className={styles.line}></div>

            <ThemeProvider theme={theme}>

                <TextField style={imputStyle}
                           className={classes.margin}
                    // className={classes.margin}
                           label="Your phone number"
                           variant="outlined"
                           id="phone"
                           name='phone'
                    // fullWidth = 'true'
                />


                <TextField
                    id="date"
                    variant="outlined"
                    label="Birthday"
                    name='birthday'
                    type="date"
                    defaultValue="2017-05-24"
                    style={textField}
                    className={classes.margin}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    name='clock'
                    variant="outlined"
                    defaultValue="07:30"
                    style={textField}
                    className={classes.margin}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
            </ThemeProvider>
            {/*</FormControl>*/}
            <div className={styles.sendArea}>
                <button className={styles.sendButton}> <span>Send <AiOutlineSend /></span></button>
            </div>
        </form>
    );
}