import React, {Component} from 'react';
import {is} from 'immutable';
import lodash from 'lodash';

export default class PureComponent extends Component {
  shouldComponentUpdate(nextProps={}, nextState={}) {
    let oldState = this.state || {};

    if(Object.keys(oldState).length!==Object.keys(nextState).length){
      return true
    }

    //这里即使存在key数相等，但key值不同的情况，也没问题，因为另外一个xx[key]时一定取不到值为undefined，只要yy[key]值不为undefined，那么就不存在问题
    for(let key in nextState){
      if(!is(nextState[key],oldState[key])){
        return true;
      }
    }

    return false;
  }
}
