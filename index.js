//深拷贝 深比较
// import React, {PureComponent} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import PureComponent from './PureComponent';
import {Map} from 'immutable';

//组件优化的原理是重写了shouldComponentUpdate，如果说老的状态对象和新的状态对象不是一个对象才需要刷新

//PureComponent的问题在于它是浅比较，这就意味着，如果你直接获取组件的`this.state`，并直接在上面修改的话，应为地址相同，它是不会刷新的。

//又如果新的状态和旧的状态如果不是指向同一个引用地址，但它们里面的内容是一样的话，也还是会刷新的，而我们并不期望这样。

class Counter extends PureComponent {
  state = {
    counter: Map({number: 0})
  };

  handleClick = (event) => {
    let amount = this.amount.value ? Number(this.amount.value) : 0;
    let state = {...this.state, counter: this.state.counter.update('number', val => val + amount)};
    this.setState(state);

  };

  render() {
    return (
      <div>
        <p>{this.state.counter.get('number')}</p>
        <input ref={x => this.amount = x}/>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));
