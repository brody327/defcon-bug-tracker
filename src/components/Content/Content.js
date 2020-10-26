//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';

//--- Components ---
import { Home } from '../Home/index'

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const Content = () => {
    //--- JSX ---
    return (
        <Container id='content' fluid>
            <h2>CONTENT</h2>
            <p>Here is where content will display and switch out based on users' actions.</p>
            <Home />
        </Container>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Content;