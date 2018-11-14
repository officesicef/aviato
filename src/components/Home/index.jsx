
import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  List, Header, Image, Divider, Grid, Icon,
} from 'semantic-ui-react';
import style from './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderUsers = this.renderUsers.bind(this);
  }

  renderUsers(users, pushAction) {
    return users.map((user) => {
      return (
        <List.Item
          className={style.classItem}
          key={user.id}
          onClick={() => pushAction(`/patient/${user.id}`)}
        >
          <Image avatar src="https://image.flaticon.com/icons/svg/265/265674.svg" />
          <List.Content>
            <List.Header as="a">{user.name}</List.Header>
            <List.Description as="a">{user.email}</List.Description>
          </List.Content>

        </List.Item>
      );
    });
  }

  render() {
    const { users } = this.props;
    const { pushAction } = this.props;
    return (
      <div className={style.maxWidth}>
        <Grid columns={3}>
          <Grid.Column />
          <Grid.Column verticalAlign="middle">
            <Header as="h1" className={style.ceneterAlign}>Dr. John Doe</Header>
            <Image
              className={style.autoMargin}
              src="https://image.flaticon.com/icons/svg/206/206855.svg"
              size="small"
              circular
            />

          </Grid.Column>
          <Grid.Column>
            <Icon name="add" className={style.addIcon} />
          </Grid.Column>
        </Grid>
        <div className={style.mTop}>
          <Divider horizontal inverted>
            <Header as="h2">Patients list</Header>
          </Divider>
          <List divided relaxed>
            {this.renderUsers(users, pushAction)}
          </List>
        </div>
      </div>
    );
  }
}

export default Home;
