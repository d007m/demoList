// src/components/AddItemModal.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { logout, setItems, addItem } from '../actions';

const AddItemModal = ({ visible, onClose, dispatch }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleAddItem = () => {
    // Check for empty fields
    if (itemName.trim() === '' || itemDescription.trim() === '') {  
      Alert.alert('Invalid Data', 'Pease fill in both name and desciption.');
      return;
    }

    // Generating a unique id for new item using timestamp
    const newItemId = Date.now();

    // Create a new item object
    const newItem = {
      id:newItemId,
      name: itemName,
      description: itemDescription,
    };

    // Dispatch 'addItem' action with new item
    dispatch(addItem(newItem));

    // Clear input fields
    setItemName('');
    setItemDescription('');

    // Close modal
    onClose();
  };


  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Add New Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={itemDescription}
            onChangeText={(text) => setItemDescription(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={handleAddItem} />
            <Button title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black background with 50% transparency
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    width: '80%', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%', 
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
});

export default AddItemModal;
