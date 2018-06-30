import React from 'react';
import {connect} from 'react-redux';
import {Guest, Trial, Member} from '../components/membership';
import MainDrawer from '../components/MainDrawer';
import MembershipLevelType from '../enums/MembershipLevelType';

class MembershipHome extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
      membershipLevel: MembershipLevelType.GUEST
    };*/
    console.log('constructor: ', this.props);

    this.onRegister = this.onRegister.bind(this);
    this.onUnRegister = this.onUnRegister.bind(this);
  }
  onRegister(membershipLevelType) {
    if (membershipLevelType === MembershipLevelType.TRIAL) {
      alert('30일 제한으로 가입되었습니다!');
    } else {
      alert('정회원으로 가입되었습니다!');
    }

    this.setState({
      membershipLevel: membershipLevelType
    });
  }
  onUnRegister() {
    alert('해지되었습니다');
    this.setState({
      membershipLevel: MembershipLevelType.GUEST
    });
  }
  withMainDrawer(component) {
    return (
      <MainDrawer>
        {component}
      </MainDrawer>
    );
  }

  render() {
    const {GUEST, TRIAL, MEMBER} = MembershipLevelType;
    switch (this.props.membershipLevel) {
      case GUEST:
        return this.withMainDrawer(
          <Guest />);
      case TRIAL:
        return this.withMainDrawer(<Trial />);
      case MEMBER:
        return this.withMainDrawer(<Member />);
      default: return <Guest />;
    }
    /*return (
      <div>
        {this.state.membershipLevel === 'guest' && <Guest />}
        {this.state.membershipLevel === 'trial' && <Trial />}
        {this.state.membershipLevel === 'member' && <Member />}
      </div>
    );*/
  }
}
const mapStateToProps = (state) => {
  //console.log('mapStateToProps: ', state);
  return {
    membershipLevel: state.membershipLevel
  };
};
export default connect(mapStateToProps)(MembershipHome);
//export default MembershipHome;













