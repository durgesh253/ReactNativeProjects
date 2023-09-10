import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Feutureresturants } from "./Api";

const CartScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
        Cart Items
      </Text>
      <ScrollView>
        {Feutureresturants.map((restaurant) => (
          <View key={restaurant.id}>
            <Text style={{ fontSize: 18, fontWeight: "bold", margin: 10 }}>
              {restaurant.name}
            </Text>
            {restaurant.dishes.map((dish) => (
              <View key={dish.id} style={{ margin: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {dish.name}
                </Text>
                <Text>{dish.description}</Text>
                <Text>Price: ${dish.price}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default CartScreen;
