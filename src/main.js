import React from 'react';
import {render} from 'react-dom';
import reactTabEventPlugin from 'react-tap-event-plugin';
import App from './app.js';

reactTabEventPlugin();

render(<App/>, document.getElementById('app'));
