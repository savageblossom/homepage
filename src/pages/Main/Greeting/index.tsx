import React from 'react'
import { Typography, Grid, Container } from "@material-ui/core"
import { useStyles } from "./style";
import {greetingText} from './greetingText';

export interface GreetingProps {
    
}
 
const Greeting: React.SFC<GreetingProps> = () => {
    const classes = useStyles();
    return (
            <Grid className={classes.greetingBigTextContainer} container>
                <Container>
                    <div className={classes.greetingContainer}>
                        <Typography variant="h1">
                            Lorem ipsum
                        </Typography>
                        <Typography>
                            {greetingText.text}
                        </Typography>
                    </div>
                </Container>
            </Grid>
    );
}
 
export default Greeting;