import React from 'react'
import { Typography, Container, Paper } from "@material-ui/core"
import { useStyles } from "./style";
import {info} from './info';

export interface AboutAuthorProps {}
 
const AboutAuthor: React.SFC<AboutAuthorProps> = () => {
    const classes = useStyles();
    return (
        <Container>
            <Paper className={classes.skillCard}>
                <Typography variant="h1">{info.title}</Typography>
                <Typography className={classes.descriptionBlock}>{info.description}</Typography>
                <div>
                    <div className={classes.contentSection}>
                        <Typography variant="h2">Skills I have:</Typography>
                        <Typography>{info.lists.skills}</Typography>
                    </div>
                    <div className={classes.contentSection}>
                        <Typography variant="h2">Tools I use:</Typography>
                        <Typography>{info.lists.tools}</Typography>
                    </div>
                </div>
            </Paper>
        </Container>
    );
}
 
export default AboutAuthor;