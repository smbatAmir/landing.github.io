import React from "react";
import {withStyles} from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'

// import styles from './../sectionFAQ.module.css'
// import {Container, Grid} from "@material-ui/core";

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        marginBottom: -1,
        minHeight: 56,
        color: '#272744',
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function SingleFaq({id, title, text, thumbnailUrl}) {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const descText = {
        fontSize: '16px',
        color: '#272744'
    }
    const TitleText = {
        fontSize: '18px',
        color: '#FF6600'
    }

    return (
        // <Grid column item sm={6} spacing={3} className={styles.faqArea}>
        <Accordion square expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
            <AccordionSummary aria-controls={`panel${id}d-content`} id={`panel${id}d-content`}>
                <Typography style={TitleText}>{title ? title : "Faq title here"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography style={descText}>
                    {text ? text : "Faq text here, please edit and add text"}
                    <Image src={thumbnailUrl ? `https://ura-cdn.nyc3.digitaloceanspaces.com/${thumbnailUrl}` : ""} alt="" width={500}
                           height={500}/>
                    {/*<Image src={thumbnailUrl ? thumbnailUrl : ""} layout="fill"/>*/}
                </Typography>
            </AccordionDetails>
        </Accordion>
        // </Grid>
    );
}