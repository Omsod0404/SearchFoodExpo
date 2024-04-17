import React from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import ProductItem from "./ProductItem.jsx";

const ProductsList = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: "90%",
    alignSelf: "center",
  },
});

export default ProductsList;