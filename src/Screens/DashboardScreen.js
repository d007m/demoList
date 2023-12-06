// src/Screens/DashboardScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { logout, setItems, addItem } from '../actions';
//import itemsData from '../items.json'; // Import data
import AddItemModal from '../components/AddItemModal'; // Import modal component

const DashboardScreen = ({ navigation, dispatch, items }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  // useEffect(() => {
  //   // Set imported JSON data (local items.json file)
  //   dispatch(setItems(itemsData.items)); // Use local data
  // }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.titleContainer}>
        <Text>Name:</Text><Text style={styles.titleText}> {item.name}</Text>
      </View>
      
      <Text>Description: {item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Item" onPress={() => setModalVisible(true)} />
        <Button title="Logout" onPress={handleLogout}  color={'#FF0000'}/>
      </View>
      <AddItemModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        dispatch={dispatch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16, 
    width: '100%', 
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  titleText:{
    fontWeight:'bold',
  }
});

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(DashboardScreen);
