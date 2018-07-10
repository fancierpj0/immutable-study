import React, {Component} from 'react';

import lodash from 'lodash';

export default class PureComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !lodash.isEqual(nextState, this.state);
  }
}
