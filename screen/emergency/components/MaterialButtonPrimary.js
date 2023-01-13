import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HospitalButton(props) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={()=>{navigation.navigate("Hospital")}}>
      <Text style={styles.policeService}>Police Service</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  policeService: {
    color: "#fff",
    fontSize: 14
  }
});

export default HospitalButton;
