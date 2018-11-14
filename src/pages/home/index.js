
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { View, Text, Button, Tabs, Tab } from "native-base";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Panic from "../../components/Panic";
import Header from "../../components/Home/Header";
import PersonalInfo from '../../components/PersonalInfo';
import Prescriptions from '../../components/Perscriptions';
import theme from "../../theme";
import { getUserInformation, getUserPrescriptions } from '../../actions';
import { getUserNextExamination } from '../../api/user';
import call from 'react-native-phone-call'
import CustomButton from '../../components/Button';
import BackEffect from "../../components/BackEffects";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { examination: null };
  }

  componentDidMount() {
    const { getUserInformationAction, getUserPrescriptionsAction } = this.props;
    getUserInformationAction()
      .catch((e) => {
        console.log(e);
        alert.alert('Error, check internet connection.');
      });
    getUserPrescriptionsAction()
      .catch((e) => {
        console.log(e);
        alert.alert('Error, check internet connection.');
      });

      getUserNextExamination()
        .then(result => {
          console.log(result);
          this.setState({ examination: result.data.data });
        });
  }

  render() {
    const { user, prescriptions } = this.props;
    const { examination } = this.state;
    const style = {tabBarOptions:{
      //other properties
      pressColor: 'gray',//for click (ripple) effect color
      style: {
        backgroundColor: 'white',//color you want to change
      }
  }}
    return <Tabs>
      <Tab heading="Profile"  tabBarOptions={style}>
      <View style={styles.container}>
      <BackEffect />
      <Header user={user} />
      {user ? <PersonalInfo user={user} examination={examination} /> : <Text>No data</Text>}
      <View style={styles.panicContainer} >
      <CustomButton style={{ borderRadius: 4 }} onPress={() => Actions.mesure()}>Add measure</CustomButton>
        {user && user.emergency && <Panic onPress={() => call({ number: user.emergency }) } /> }
      </View>
    </View>
      </Tab>
      <Tab heading="Prescriptions">
      <View style={{ flex: 1 }}>
          {prescriptions ? <Prescriptions prescriptions={prescriptions} /> : <Text>No data</Text>}
      </View>
      </Tab>
    </Tabs>
  }
}

const mapDispatchToProps = dispatch => ({
  getUserInformationAction: () => dispatch(getUserInformation()),
  getUserPrescriptionsAction: () => dispatch(getUserPrescriptions()),
});

const mapStateToProps = state => ({
  user: state.userReducer.user,
  prescriptions: state.userReducer.prescriptions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  panicContainer: {
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
  },
  header: {
    height: 70,
    paddingTop: 20,
    backgroundColor: theme.colors.header,
  },
  headerBottomPart: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: theme.colors.borders,
  },
  name: {
    alignSelf: 'center',
    color: theme.colors.text,
    fontSize: 24,
    marginTop: 60,
  },
  content: {

  },  
});
