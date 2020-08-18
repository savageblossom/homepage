import React from 'react'
import { Typography, Grid, Link } from "@material-ui/core"
import { useStyles } from "./style";

export interface OpeningBigTextProps {
    
}
 
const OpeningBigText: React.SFC<OpeningBigTextProps> = () => {
    const classes = useStyles();
    return (
            <Grid container>
                <Grid item>
                    <Typography variant="h1">
                        Recent Works
                    </Typography>
                    <Typography>
                        Here are some projects of mine. Visit my 
                        <Link href="https://github.com/savageblossom">github</Link> 
                        profile for more. 
                    </Typography>
                </Grid>
            </Grid>
    );
}
 
export default OpeningBigText;