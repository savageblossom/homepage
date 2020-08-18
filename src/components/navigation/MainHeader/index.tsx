import * as React from 'react';
import {Button, CssBaseline, Container} from '@material-ui/core';
import { useStyles } from "./style";

import Logo from '../../UI/Logo';

export interface Props {
    
}
 
const  MainHeader: React.SFC<Props> = () => {
    const classes = useStyles();
    return ( 
        <>
            <Container>
                <CssBaseline/>
                <div className={classes.headerPanel}>
                    <Logo />
                    <div className={classes.headerButtons}>
                        <Button>
                            Links
                        </Button>
                        <Button variant="outlined">
                            Say Hello
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    );
}
 
export default MainHeader;