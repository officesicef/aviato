import React from 'react';
import { Text } from 'react-native';
import {
  Stack, Scene, Router, Tabs
} from 'react-native-router-flux';
import Login from './components/Login';
import Perscriptions from './pages/perscriptions';
import Home from "./pages/home";
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/Login';
import theme from './theme';
import EditProfile from './components/EditProfile';
import PerscriptionDetails from './components/PerscriptionDetails';
import MesureList from './components/MesureList';

const styles = {
  headerStyle: {
    height: 50,
    zIndex: 0,
    backgroundColor: theme.colors.header
  },
  scenesStyle: {
    backgroundColor: theme.colors.background,
  },
  headerTextStyle: {
    zIndex: 100,
    color: theme.colors.light,
  },
};

const RouterComponent = () => (
  <Router
    titleStyle={styles.headerTextStyle}
    sceneStyle={styles.scenesStyle}
    headerStyle={styles.headerStyle}
    backTitle="Back"
    backButtonTextStyle={styles.headerTextStyle}
  >
    <Stack hideNavBar key="root">
      <Stack key="auth">
        <Scene
          key="login"
          title="Login"
          component={Login}
        />
        <Scene
          key="register"
          title="Register"
          component={RegisterForm}
        />
      </Stack>
      <Stack key="main">
          <Scene
            key="home"
            title="Home"
            component={Home}
            initial
          />
          <Scene
            key="edit"
            title="Edit profile"
            component={EditProfile}
          />
          <Scene
            key="perscriptionDetails"
            title="Prescription details"
            component={PerscriptionDetails}
          />
          <Scene
            key="mesure"
            title="Add new measurement"
            component={MesureList}
          />
      </Stack>
    </Stack>
  </Router>
);

export default RouterComponent;