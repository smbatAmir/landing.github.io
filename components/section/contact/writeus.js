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
import {TextareaAutosize} from "@material-ui/core";
import styles from "../../../styles/section1.module.css";
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
export default function CustomizedInputs() {
    const classes = useStyles();

    const  textareaStyle = {
        width: '93%'
    }
    const  imputStyle = {
        width: '45%'
    }
    return (
        <form className={classes.root} noValidate>
            {/*<FormControl fullWidth className={classes.margin}>*/}
            <ThemeProvider theme={theme}>

                <TextField style={imputStyle}
                    className={classes.margin}
                    label="Your email"
                    variant="outlined"
                    id="email"
                    // fullWidth = 'true'
                />

                <TextField style={imputStyle}
                    className={classes.margin}
                    label="Your name"
                    variant="outlined"
                    id="name"
                    // fullWidth = 'true'
                />
                <TextField
                    style={textareaStyle}
                    className={classes.margin}

                    id="messages"
                    label="Multiline"
                    multiline
                    rows={4}
                    fullWidth = 'true'
                    defaultValue="Default Value"
                    variant="outlined"
                />
            </ThemeProvider>
            {/*</FormControl>*/}
            <div className={styles.sendArea}>
                <button className={styles.sendButton}> <span>Send <AiOutlineSend /></span></button>
            </div>
        </form>
    );
}