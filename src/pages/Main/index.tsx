import * as React from 'react';

import OpeningBigText from './OpeningBigText';
import Greeting from './Greeting';
import AboutAuthor from './AboutAuthor';

export interface MainPageProps {
    
}
 
const MainPage: React.SFC<MainPageProps> = () => {
    return (
        <>
            <OpeningBigText />
            <Greeting />
            <AboutAuthor />
        </>
    );
}
 
export default MainPage;