//深拷贝 深比较
// import React, {PureComponent} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import PureComponent from './PureComponent';
import {Map} from 'immutable';
import Counter from './Counter';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}>
  <Counter/>
</Provider>, document.getElementById('root'));
