import React from 'react';
import Guest from '../components/membership/Guest';
import Trial from '../components/membership/Trial';
import Member from '../components/membership/member';

class MembershipHome extends React.Component {
	constructor() {
		super();
		this.state = {
			membershipLevel: 'trial',
			/*trial:'30일 무료 체험중입니다.',
			member: '멤버십 회원입니다.'*/
		}
	}
	render() {
		switch (this.state.membershipLevel) {
			case 'guest': return <Guest />;
			case 'trial': return <Trial />;
			case 'member': return <Member />;
			default: return <Guest />;
		}
		
		/*return (
			<div>
				{this.props.membershipLevel === 'guest' && <Guest />}
				{this.props.membershipLevel === 'trial' && <Trial />}
				{this.props.membershipLevel === 'member' && <Member />}
			</div>
		);*/
	}
}
export default MembershipHome;
