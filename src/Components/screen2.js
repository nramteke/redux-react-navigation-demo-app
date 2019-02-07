import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { logout } from "../Actions/actionCreator";

class LogoutScreen extends Component {
  static navigationOptions = {
    title: "Screen2"
  };
  render() {
    const {
      userName
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "powderblue",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{userName}</Text>
        <TouchableOpacity
          onPress={this.props.logout}
          style={styles.touchableStyles}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userName:state.CounterReducer.userName
});

const mapDispatchToProps = {
  logout
};

const Logout = connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);

export default Logout;

const styles = StyleSheet.create({
  touchableStyles: {
    marginTop: 15,
    backgroundColor: "indigo",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  }
});
