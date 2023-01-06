import React from "react";
import ReactDOM from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";

import App from './App';

import './index.css'

ReactDOM.render(
        <SpeechProvider appId="f1c3ae59-d93d-4d65-9988-e927f18fa951" language="en-US">
                <Provider>
                        <App/>
                </Provider>, 
        </SpeechProvider>,
        document.getElementById('root')
);