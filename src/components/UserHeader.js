import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
  }

  render() {
    const { users, userId } = this.props;
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUser })(UserHeader);
