import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "./redux/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    // Dispatch the fetchproducts action when the component mounts
    dispatch(fetchproducts());
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    } else if (data.length === 0) {
      return <Text>No products available.</Text>;
    } else {
      return data.map((item) => (
        <View key={item.id}>
        <Text> {item.id}</Text>
       </View>
      ));
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.apitm}
        onPress={() => dispatch(fetchproducts())} // Add this onPress handler
        disabled={isLoading} // Disable the button while loading
      >
        <Text style={styles.textstyle}>Call Api</Text>
      </TouchableOpacity>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  apitm: {
    marginTop: 50,
    padding: 20,
    backgroundColor: "pink",
  },
  textstyle: {
    textAlign: "center",
    color: "black",
  },
});

export default Product;
