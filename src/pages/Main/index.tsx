import * as React from 'react';

import OpeningBigText from './OpeningBigText';
import Greeting from './Greeting';
import AboutAuthor from './AboutAuthor';
import Portfolio from './Portfolio';

export interface MainPageProps {
    
}
 
const MainPage: React.SFC<MainPageProps> = () => {
    return (
        <>
            <OpeningBigText />
            <Greeting />
            <AboutAuthor />
            <Portfolio />
        </>
    );
}
 
export default MainPage;