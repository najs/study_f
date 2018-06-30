import React from 'react';

class Counter extends React.Component {
  constructor() {
    // console.log('constructor!!!!');
    super();
  }
  componentDidMount() {
    // console.log('componentDidMount');
  }
  render() {
    // console.log('render!!');
    return (
      <div onClick={this.props.onClick}>
        <div>
          카운터 컴포넌트
        </div>
        <div>
        <span>
          {this.props.children}
        </span>
        </div>
      </div>
    );
  }
}

export default Counter;

/*function Counter(props) {
  return (
    <div onClick={props.onClick}>
      <div>
        카운터 컴포넌트
      </div>
      <div>
        <span>
          {props.children}
        </span>
      </div>
    </div>
  );
  export default Counter;
}*/
