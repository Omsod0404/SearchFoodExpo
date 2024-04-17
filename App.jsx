import React, {useState} from "react";
import { SafeAreaView, StatusBar, StyleSheet, Platform, View } from "react-native";
import Products from "./Products.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProductsList from "./components/ProductsList.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const handleSearch = (text) => {
    const filtered = Products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredProducts(filtered);
    setSearch(text);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'default'} backgroundColor={'#ff0534'}/>
      <View style={styles.container}>
        <Header />
        <SearchBar value={search} onChangeText={handleSearch} />
        <ProductsList products={filteredProducts} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default App;