//组件优化的原理是重写了shouldComponentUpdate，如果说老的状态对象和新的状态对象不是一个对象才需要刷新

//PureComponent的问题在于它是浅比较，这就意味着，如果你直接获取组件的`this.state`，并直接在上面修改的话，应为地址相同，它是不会刷新的。

//又如果新的状态和旧的状态如果不是指向同一个引用地址，但它们里面的内容是一样的话，也还是会刷新的，而我们并不期望这样。
import React from 'react';
import {Map} from "immutable";
import PureComponent from "./PureComponent";
import {connect} from 'react-redux';

class Counter extends React.Component {
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
        <p>{this.props.number}</p>
        <input ref={x => this.amount = x}/>
        <button onClick={() => this.props.add(1)}>+</button>
      </div>
    );
  }
}

let actions = {
  add(payload) {
    return {type: 'ADD', payload}
  }
};

//state是合并后的state
//TODO 它也应该是一个immutable对象
export default connect(
  state => ({number: state.counter.get('number')})
  , actions
)(Counter);
