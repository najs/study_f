import React from 'react';
import Counter from '../components/Counter';
import Button from '../components/Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 1000,
      count2: 200,
      count3: 150,
      count4: 0
    };
    console.log('constructor');

  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  render() {
    console.log('render');

    return (
      <div>
        <Counter onClick={() => {
          // this.state.count1 = this.state.count1 + 1;
          this.setState({
            count1: this.state.count1 + 1
          });
        }}>
          {this.state.count1}
        </Counter>
        <Counter onClick={() => {
          this.setState({
            count2: this.state.count2 - 1
          });
        }}>
          {this.state.count2}
        </Counter>
        <Counter onClick={() => {
          this.setState((state) => {
            return {
              count3: state.count3 * 2
            };
          });
        }}>
          {this.state.count3}
        </Counter>
        <Button type="primary">
          <strong>버튼1</strong>
          <span>111</span>
        </Button>
        <Button type="danger">버튼2</Button>
        <Button type="warning">버튼3</Button>
        <Button>버튼3</Button>
        <Counter>
          {this.state.count4}
          <div>
            <button onClick={() => {
              this.setState(state => ({
                count4: state.count4 + 1
              }))
            }}>
              +
            </button>
            <button onClick={() => {
              this.setState(s => ({count4: s.count4 - 1}))
            }}>
              -
            </button>
          </div>
        </Counter>
      </div>
    );
  }
}

export default App;















