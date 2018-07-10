//深拷贝 深比较
// import React, {PureComponent} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import PureComponent from './PureComponent';


//组件优化的原理是重写了shouldComponentUpdate，如果说老的状态对象和新的状态对象不是一个对象才需要刷新

//PureComponent的问题在于它是浅比较，这就意味着，如果你直接获取组件的`this.state`，并直接在上面修改的话，应为地址相同，它是不会刷新的。

//又如果新的状态和旧的状态如果不是指向同一个引用地址，但它们里面的内容是一样的话，也还是会刷新的，而我们并不期望这样。

class Counter extends PureComponent {
  state = {
    counter: {number: 0}
  };

  handleClick = (event) => {
    let state = this.state
      , amount = this.amount.value ? Number(this.amount.value) : 0;

    // state.counter.number = state.counter.number + amount;
    // this.setState(state);

    //状态不向Vue里的data，不用声明，也会触发响应式渲染
    // state.counter = state.counter ? state.counter : {};
    // state.counter.number = state.counter.number ? state.counter.number : 0;

    this.setState({
      counter: {
        number: state.counter.number + amount
      }
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.counter.number}</p>
        <input ref={x => this.amount = x}/>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));
