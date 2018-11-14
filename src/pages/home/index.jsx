
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers } from '../../thunks/users';
import Home from '../../components/Home';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadUsersAction } = this.props;
    loadUsersAction();
  }

  render() {
    const { users, history: { push } } = this.props;
    if (!users) {
      return null;
    }
    return (
      <Grid>
        <Home users={users} pushAction={push} />
      </Grid>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  users: user.get('users'),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    loadUsersAction: getUsers,
  },
  dispatch,
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomePage),
);
