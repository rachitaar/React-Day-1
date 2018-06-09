import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rach from './App';
import registerServiceWorker from './registerServiceWorker';
var MyApp = function () {
    return (
        <div>
            <h1>hello der!!!!!!!</h1>
            <Rach />
        </div> 
    );
}
ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
