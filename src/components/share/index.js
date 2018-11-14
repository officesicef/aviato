import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform
} from 'react-native';
import Share, {ShareSheet, Button} from 'react-native-share';
import { 
    CLIPBOARD_ICON,
    EMAIL_ICON,
    FACEBOOK_ICON,
    GOOGLE_PLUS_ICON,
    MORE_ICON,
    PINTEREST_ICON,
    REACT_ICON,
    TWITTER_ICON,
    WHATSAPP_ICON
} from '../../consts'

export default class ShareView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  onCancel() {
    console.log("CANCEL")
    this.setState({visible:false});
  }
  onOpen() {
    console.log("OPEN")
    this.setState({visible:true});
  }
  render() {

    let shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };

    let shareImageBase64 = {
      title: "React Native",
      message: "Hola mundo",
      url: REACT_ICON,
      subject: "Share Link" //  for email
    };

    return (
      <View style={styles.container}>


        <TouchableOpacity onPress={()=>{
          Share.open(shareImageBase64);
        }}>
          <View style={styles.instructions}>
            <Text>Simple Share Image Base 64</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          Share.open(shareOptions);
        }}>
          <View style={styles.instructions}>
            <Text>Simple Share</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onOpen.bind(this)}>
          <View style={styles.instructions}>
            <Text>Share UI Component</Text>
          </View>
        </TouchableOpacity>

        <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
          <Button iconSrc={{ uri: TWITTER_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "twitter"
                }));
              },300);
            }}>Twitter</Button>
          <Button iconSrc={{ uri: FACEBOOK_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "facebook"
                }));
              },300);
            }}>Facebook</Button>
          <Button iconSrc={{ uri: WHATSAPP_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "whatsapp"
                }));
              },300);
            }}>Whatsapp</Button>
          <Button iconSrc={{ uri: GOOGLE_PLUS_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "googleplus"
                }));
              },300);
            }}>Google +</Button>
          <Button iconSrc={{ uri: EMAIL_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "email"
                }));
              },300);
            }}>Email</Button>
          <Button iconSrc={{ uri: PINTEREST_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "pinterest"
                }));
              },300);
            }}>Pinterest</Button>
          <Button
            iconSrc={{ uri: CLIPBOARD_ICON }}
            onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                if(typeof shareOptions["url"] !== undefined) {
                  Clipboard.setString(shareOptions["url"]);
                  if (Platform.OS === "android") {
                    ToastAndroid.show('Link copiado al portapapeles', ToastAndroid.SHORT);
                  } else if (Platform.OS === "ios") {
                    AlertIOS.alert('Link copiado al portapapeles');
                  }
                }
              },300);
            }}>Copy Link</Button>
          <Button iconSrc={{ uri: MORE_ICON }}
            onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.open(shareOptions)
              },300);
            }}>More</Button>
        </ShareSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
});
