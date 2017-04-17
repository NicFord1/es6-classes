import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Component1 from 'app/components/Component1';
import Component2 from 'app/components/Component2';

//Load Foundation
$(document).foundation();

//App CSS
require('app/styles/app.scss');

//Main App Code
ReactDOM.render(
  <div>
    <Component1 count={10}/>
    <Component2 count={85}/>
  </div>,
  document.getElementById('app')
);
