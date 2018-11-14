import React, { Component } from 'react';
import { Alert, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container, Content, Form, Input, Item, Spinner, DatePicker, Picker, Icon, Label, Card,
} from 'native-base';
import Button from '../Button';
import styles from './style';
import { editProfile as editProfileApi } from '../../api/profile';
import theme from '../../theme';
import { connect } from 'react-redux';
import moment from 'moment';
import BackEffect from '../BackEffects';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    console.log(new Date(props.user.birthday));
    const { user } = props;
    if(user) {
      this.state = {
        birthday: user.birthday,
        bloodType: user.bloodType,
        height: user.height && user.height.toString(),
        weight: user.weight && user.weight.toString(),
        gender: user.gender ? user.gender : 'M',
        emergency: user.emergency,
        loading: false,
      };
    } else {
      this.state = {
        birthday: null,
        bloodType: 'A-',
        height: null,
        weight: null,
        gender: 'M',
        emergency: null,
        loading: false,
      };
    }

    this.bloodTypes = ['A-', 'A+', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    this.editProfile = this.editProfile.bind(this);
  }

  async editProfile() {
    this.setState({ loading: true });
    const { bloodType, height, weight, birthday, gender, emergency } = this.state;

    try {
      await editProfileApi(bloodType, height, weight, birthday, gender, emergency);
      Actions.main();
    } catch (e) {
      console.log(e); 
      Alert.alert('Error.');
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <Container style={styles.containerStyle}>
        <Content padder contentContainerStyle={styles.contentStyle}>
        <BackEffect />
        <Card>
          <Form>
            <Item>
              <Label style={{ width: 100}}>Birthday:</Label>
                <DatePicker
                defaultDate={new Date(this.state.birthday)}
                minimumDate={new Date(1920, 1, 1)}
                maximumDate={new Date()}
                locale={"en"}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                onDateChange={birthday => this.setState({ birthday })}
                />
            </Item>
            <Item>
            <Label style={{ width: 100}}>Blood type:</Label>
                <Picker
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    mode="dropdown"
                    style={{ width: undefined }}
                    selectedValue={this.state.bloodType}
                    onValueChange={bloodType => this.setState({ bloodType })}
                >   
                {this.bloodTypes.map(
                        (bloodType, index) => (<Picker.Item key={index} label={bloodType} value={bloodType} />),
                    )}
                </Picker>
            </Item>
            <Item>
              <Label style={{ width: 100}}>Height:</Label>
                <Input
                  onChangeText={height => this.setState({ height })}
                  value={this.state.height}
                />
            </Item>
            <Item>
              <Label style={{ width: 100}}>Weight:</Label>
                <Input
                  onChangeText={weight => this.setState({ weight })}
                  value={this.state.weight}
                />
            </Item>
            <Item>
            <Label style={{ width: 100 }}>Gender:</Label>
                <Picker
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    mode="dropdown"
                    style={{ width: undefined }}
                    selectedValue={this.state.gender}
                    onValueChange={gender => this.setState({ gender })}
                >   
                  <Picker.Item key={0} label="Male" value="M" />
                  <Picker.Item key={1} label="Female" value="F" />
                </Picker>
            </Item>
            <Item last>
              <Label style={{ width: 100}}>Emergency contact:</Label>
                <Input
                  onChangeText={emergency => this.setState({ emergency })}
                  value={this.state.emergency}
                />
            </Item>
          </Form>
          { loading ? <Spinner color={theme.colors.borders} /> : <Button syle={{ borderRadius: 4 }} onPress={this.editProfile}>Submit</Button> }
        </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(EditProfile);
