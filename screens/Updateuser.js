import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateuser } from "../redux/Userslice";
import { useRoute } from "@react-navigation/native";

const Updateuser = () => {
  const route = useRoute();
  const dispatch = useDispatch();

  // Extract 'id' from route.params
  const { id } = route.params;

  // Access users from Redux state
  const users = useSelector((state) => state.users);

  // Find the user with the specified 'id'
  const user = users.find((user) => user.id === id);

  // Initialize state variables with user data
  const [uemail, setUemail] = useState(user ? user.email : "");
  const [uname, setUname] = useState(user ? user.userName : "");

  const handleUpdate = () => {
    // Dispatch the updateuser action with the new values
    dispatch(updateuser({ id, userName: uname, email: uemail }));

    // Optionally, you can navigate back to the previous screen
    // navigation.goBack();
  };

  return (
    <View style={styles.addcontainer}>
      <TextInput
        style={styles.textinput}
        placeholder="Enter Name"
        value={uname}
        onChangeText={(text) => setUname(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter Email"
        value={uemail}
        onChangeText={(text) => setUemail(text)}
      />
      <TextInput style={styles.textinput} placeholder="Enter Phone" />
      <TextInput style={styles.textinput} placeholder="Enter Address" />
      <TouchableOpacity style={styles.addbtn} onPress={handleUpdate}>
        <Text style={{ textAlign: "center", color: "white", fontSize: 19 }}>
          Update User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addcontainer: {
    flex: 1,
  },
  textinput: {
    height: 50,
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addbtn: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 20,
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
    borderRadius: 20,
  },
});

export default Updateuser;
