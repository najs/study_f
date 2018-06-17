import React from 'react';
import Counter from '../components/Counter';
import Button from '../components/Buttton';

class App extends React.Component {
	constructor() {
	    super();
		this.state = {
			count1: 1000,
			count2: 200,
			count3: 150,
			count4: 0
		};
	}
	componentDidMount() {
		console.log('componentDidMount');
	};
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate');
		return true;
	}
	render() {
		return (
			<div>
				 <Counter onClick={() => {
						//this.state.count1 = this.state.count1 + 1;
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
				버튼1<span>11111</span>
				</Button>
				<Button type="danger">버튼2</Button>
				<Button type="warning">버튼3</Button>
				<Button>qqqqqqq</Button>


				<Counter>
					{this.state.count4}
					<div>
						<Button onClick = {() => {
							this.setState(state => ({
								count4: state.count4 + 1
							}))
						}}>
							+
						</Button>

						<Button onClick = {() => {
							this.setState(state => ({
								count4: state.count4 - 1
							}))
						}}>
							-
						</Button>

					</div>
				</Counter>



			</div>
		);
	}
}
export default App;
