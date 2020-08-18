import React from 'react'
import { Typography, Grid } from "@material-ui/core"
import { useStyles } from "./style";

export interface OpeningBigTextProps {
    
}
 
const OpeningBigText: React.SFC<OpeningBigTextProps> = () => {
    const classes = useStyles();
    return (
            <Grid className={classes.openingBigTextContainer} container justify="center">
                <div className={classes.textContainer}>
                    <Typography
                    variant="h1"
                    >
                        <span>
                            <img src="/img/M_letter.png" alt=""/>
                        </span>
                        uradasiloff
                    </Typography>
                    <Typography
                    variant="h2"
                    >
                        Front-end Developer
                    </Typography>
                </div>
            </Grid>
    );
}
 
export default OpeningBigText;