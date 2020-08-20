import React from 'react'
import { Typography, Grid, Link, Container } from "@material-ui/core"
import { useStyles } from "./style";
import PortfolioItemCard from './PortfolioItemCard';

export interface PortfolioProps {}
 
const Portfolio: React.SFC<PortfolioProps> = () => {
    const classes = useStyles();
    return (
            <Container>
                <Grid container className={classes.container} justify="center">
                    <Grid item className={classes.blockDescription}>
                        <Typography variant="h1">
                            Recent Works
                        </Typography>
                        <Typography>
                            Here are some projects of mine. Visit my <Link href="https://github.com/savageblossom">github</Link> profile for more. 
                        </Typography>
                    </Grid>
                    <Grid item container justify="center">
                        <PortfolioItemCard />
                        <PortfolioItemCard />
                        <PortfolioItemCard />
                        <PortfolioItemCard />
                        <PortfolioItemCard />
                        <PortfolioItemCard />
                    </Grid>
                </Grid>
            </Container>
    );
}
 
export default Portfolio;