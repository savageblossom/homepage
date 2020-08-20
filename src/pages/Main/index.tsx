import * as React from 'react';

import OpeningBigText from './OpeningBigText';
import Greeting from './Greeting';
import AboutAuthor from './AboutAuthor';
import Portfolio from './Portfolio';
import Footer from './Footer';

export interface MainPageProps {
    
}
 
const MainPage: React.SFC<MainPageProps> = () => {
    return (
        <>
            <OpeningBigText />
            <Greeting />
            <AboutAuthor />
            <Portfolio />
            <Footer />
        </>
    );
}
 
export default MainPage;