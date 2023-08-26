import React from "react";
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";

const FilterList = () => {
  const Series = [
    {
      name: "all of us dead",
      year: "2022",
      creator: "Durgesh Jadhav",
      genre: "Horror , thriller",
    },
    {
        name: "all of us dead",
        year: "2022",
        creator: "Durgesh Jadhav",
        genre: "Horror , thriller",
      },
      {
        name: "all of us dead",
        year: "2022",
        creator: "Durgesh Jadhav",
        genre: "Horror , thriller",
      },
      {
        name: "all of us dead",
        year: "2022",
        creator: "Durgesh Jadhav",
        genre: "Horror , thriller",
      },
      {
        name: "all of us dead",
        year: "2022",
        creator: "Durgesh Jadhav",
        genre: "Horror , thriller",
      },
      {
        name: "all of us dead",
        year: "2022",
        creator: "Durgesh Jadhav",
        genre: "Horror , thriller",
      },
  ];

  return (
    <FlatList
    keyExtractor={(item) => item.name}
      data={Series}
      horizontal
      renderItem={({ item }) => {
        return (
          <View style={styles.card}>
            <Image source={require('../assets/cardimg.jpeg')} style={styles.img} />
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.genre}</Text>
            <Text>{item.year}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Sorry but Booking Is Already Done')}>
              <Text style={styles.btntext}>Join Now</Text>
            </TouchableOpacity>
          </View>
        );
      }}
     
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 300,
    padding: 16,
    height:380,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 16,
    marginTop:20,
    marginRight:20,

  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#18c443',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btntext: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterList;



