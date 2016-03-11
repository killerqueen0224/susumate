import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.jsx';

window.App = {
    render:  () => {
        ReactDom.render(
            <Counter />,
            document.getElementById('root')
        );
    }
};
