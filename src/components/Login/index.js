import React, { Component } from 'react';
import { Alert, View, AsyncStorage, Text } from 'react-native';
import {
  Container, Content, Spinner, Form, Item, Input, Card,
} from 'native-base';
import { login as loginApi } from '../../api/auth';
import Button from '../Button';
import styles from './style';
import theme from '../../theme';
import { Actions } from 'react-native-router-flux';
import BackEffect from '../BackEffects';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: null,
      password: null,
      loadingApp: true,
    };

    this.login = this.login.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('_token')
      .then(value => {
        if(value) {
          Actions.main();
        }
        this.setState({ loadingApp: false });
      })
      .catch(() =>{
        this.setState({ loadingApp: false });
      });
  }

  async login() {
    this.setState({ loading: true });
    const { email, password } = this.state;
    try {
      const { data: { data }} = await loginApi(email, password);
      await AsyncStorage.setItem('_token', data.token);
      delete data.token;
      await AsyncStorage.setItem('user', JSON.stringify(data));
      Actions.main();
    } catch(e) {
      console.log(e); 
      Alert.alert('Error.');
      this.setState({ loading: false });
    }
  }

  renderButtons() {
    const { loading } = this.state;
    return (
      <View>
        <BackEffect />
        <Card>
          
        <Form>
          <Item>
              <Input 
                placeholder="Email address:"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
          </Item>
          <Item last>
              <Input
                placeholder="Password:"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
          </Item>
        </Form>
        { loading ? <Spinner color={theme.colors.borders} /> : (<Button style={styles.button} onPress={this.login}>Login</Button>) }
        <Button style={styles.button} onPress={() => Actions.register()}>Register</Button>
        </Card>
      </View>
    );
  }

  render() {
    const { loadingApp } = this.state;

    return (
      <Container style={styles.containerStyle}>
        <Content padder contentContainerStyle={styles.contentStyle}>
          { loadingApp ? <Spinner color={theme.colors.borders} /> : this.renderButtons() }
        </Content>
      </Container>
    );
  }
}

export default Login;
