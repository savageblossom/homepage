import React from 'react'
import { Button } from '@material-ui/core';

export interface LogoProps {
    bright?: boolean,
}
 
const Logo: React.SFC<LogoProps> = ({bright = false}) => {
    const urlToLogo: {[key: string] : string} = {
        regular: "/img/logo.png",
        bright: "/img/logo_bright.png",
    }
    return ( 
        <>
            <Button 
              disableRipple
              disableElevation
            >
                { bright
                ? <img src={urlToLogo.bright} alt=""/>
                : <img src={urlToLogo.regular} alt=""/>}
                {console.log(bright)}
            </Button>
        </>
     );
}
 
export default Logo;