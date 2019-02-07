import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { login } from "../Actions/actionCreator";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: ''};
  }


 onClick = () => {
      this.props.login(this.state.userName)

 //  return {
 //   type: this.props.login,
 //   payload: this.setState.userName
 // };

  }

  static navigationOptions = {
    title: "Login"
  };
  render() {
    return (
      <View style={styles.rootContainer}>
      <TextInput
         style={{height: 40}}
         placeholder="Enter Name"
         onChangeText={(userName) => this.setState({userName})}
       />
        <Text style={styles.textStyles}>
          This is a dummy Login Screen, only Dummy Login button.
        </Text>
        <Text style={[styles.textStyles, { marginTop: 10 }]}>
          This is a completely synchronous flow, just for demo.
        </Text>
        <Text style={[styles.textStyles, { marginTop: 10 }]}>
          In real life situation, you might be doing async task like calling a
          remote server to authenticate.You might need redux-thunk to dispatch
          action asynchronously.
        </Text>
        <TouchableOpacity
          onPress={this.onClick}
          style={styles.touchableStyles}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyles: {
    textAlign: "center",
    color: "rgba(0,0,0,0.8)",
    fontSize: 16
  },
  touchableStyles: {
    marginTop: 15,
    backgroundColor: "indigo",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  }
});


const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter,
  counterString: state.CounterReducer.counterString,
  userName: state.CounterReducer.userName
});

const mapDispatchToProps = {
  login
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default Login;
