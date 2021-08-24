import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {AiFillCheckCircle} from "@react-icons/all-files/ai/AiFillCheckCircle";
import styles from './../components/join.module.css'
// import bgImages from '../public/sectionImages/joinBG.png'
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FiSettings} from "@react-icons/all-files/fi/FiSettings";
import {AiOutlineUsergroupAdd} from "@react-icons/all-files/ai/AiOutlineUsergroupAdd";
import {MdVideoLabel} from "@react-icons/all-files/md/MdVideoLabel";
import {Container, Grid} from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/ura_logo_main.png";
import Join1 from "../components/section/join/join1";
import Join2 from "../components/section/join/join2";
import Join3 from "../components/section/join/join3";
import Join4 from "../components/section/join/join4";
import {IoCloseSharp} from "@react-icons/all-files/io5/IoCloseSharp";
import Done from "../components/section/join/done";

const QontoConnector = withStyles({

    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#FF6600',
        },
    },

    completed: {
        '& $line': {
            borderColor: '#FF6600',
        },


    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    }

})(StepConnector);

const useStyles = makeStyles((theme) => ({
    root: {

        width: '100%',
        "& .MuiStep-completed svg": {
            color: '#FF6600',
        },
        "& .MuiStepIcon-active": {
            color: '#FF6600',
        },
        backgroundImage: 'url("sectionImages/joinBG.png")',
        backgroundRepeat:'no-repeat',
        backgroundSize: '45%',
        backgroundPosition:'center left'

    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

    },
}));

function getSteps() {
    return ['Sign up', 'Store info', 'Contact Person','Terms & conditions'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Join1 />;
        case 1:
            return <Join2 />;
        case 2:
            return <Join3 />;
        case 3:
            return <Join4 />;
        default:
            return <Done/>;
    }
}
export default function JoinUrrra() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [nectan, setNectan] = useState({opacity: '1'})
    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setNectan ({
            // transition: `opacity  ease-in-out`,
            opacity: '0',
        })
        setTimeout(function(){
            setNectan ({
                transition: 'opacity 1.3s, visibility 1.3s',
                opacity: '1',
            })
        }, 300);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setNectan ({
            // transition: `opacity  ease-in-out`,
            opacity: '0',
        })
        setTimeout(function(){
            setNectan ({
                transition: 'opacity 1.3s, visibility 1.3s',
                opacity: '1',
            })
        }, 300);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Container>
            <Grid container className={styles.topBar}>
                <Grid column lg={2} md={2} sm={3} xs={3} spacing={3} >
                        <Link href="/">
                            <a>
                                <Image src={logo} alt="Picture of the author"/>
                            </a>
                        </Link>
                </Grid>
                <Grid column lg={10} md={10} sm={9} xs={9} spacing={3}>

                <h1 className={styles.joinTitle}>join uraaa!</h1>
                </Grid>
            </Grid>
            <Grid container>
                <div className={classes.root}>


            <Stepper  alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label) => (
                    <Step key={label} >
                        <StepLabel >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <div className={classes.instructions}>
                            <Done/>
                        </div>
                        {/*<Button onClick={handleReset} className={classes.button}>*/}
                        {/*    Reset*/}
                        {/*</Button>*/}
                            <Grid container   >
                                <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} className={styles.buttonOK} >
                                    <Link   href="/">
                                        <a>OK</a>
                                    </Link>
                                </Grid>
                            </Grid>
                    </div>
                ) : (
                    <Grid container  alignItems="center" justify="center">

                        <Grid container  alignItems="center" justify="center">
                            <Grid column lg={7} md={7} sm={12} xs={12} spacing={3} >
                                <div className={styles.closeButton}>
                                    <Link href="/">
                                        <a >
                                            <IoCloseSharp />
                                        </a>
                                    </Link>
                                </div>
                            </Grid>
                            </Grid>
                        <Grid column lg={8} md={8} sm={12} xs={12} spacing={3} >


                        <div className={classes.instructions}>{getStepContent(activeStep)}</div>

                        <div className={styles.buttonArea} style={nectan}>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                onClick={handleNext}
                                className={styles.nextButton}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                        </Grid>
                    </Grid>
                )}
            </div>
        </div>
            </Grid>
        </Container>
    );
}

JoinUrrra.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
}