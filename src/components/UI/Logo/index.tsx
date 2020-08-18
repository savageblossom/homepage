import React from 'react'
import { Button } from '@material-ui/core';

export interface LogoProps {
    bright?: boolean,
}
 
const Logo: React.SFC<LogoProps> = () => {
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
            <img src={urlToLogo.regular} alt=""/>
        </Button>
        </>
     );
}
 
export default Logo;