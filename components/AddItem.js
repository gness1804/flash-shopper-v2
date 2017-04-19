import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/AddItem-styles';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      aisle: null,
      note: '',
      quantity: null,
      id: null,
    }
  }

  addItem = () => {
    const { name, aisle, note, quantity } = this.state
    const newItem = {
      name,
      aisle,
      note,
      quantity,
      id: Date.now(),
      inCart: false,
    };
    this.props.addNewItem(newItem);
    this.resetItemStates()
  }


  resetItemStates = () => {
    this.setState({ name: '' });
    this.setState({ aisle: null });
    this.setState({ note: '' });
    this.setState({ quantity: null });
    this.setState({ id: null });
  }

  render() {
    return (
      <View>
        <Text>Add Item to Main List</Text>
        <TextInput
          id="item-input"
          value={this.state.name}
          style={styles.inputField}
          placeholder="Item Name"
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          id="aisle-input"
          value={this.state.aisle}
          style={styles.inputField}
          placeholder="Aisle Name"
          onChangeText={aisle => this.setState({ aisle })}
        />
        <TextInput
          id="note-input"
          value={this.state.note}
          style={styles.inputField}
          placeholder="Note"
          onChangeText={note => this.setState({ note })}
        />
        <TextInput
          id="quantity-input"
          value={this.state.quantity}
          style={styles.inputField}
          placeholder="Quantity"
          onChangeText={quantity => this.setState({ quantity })}
        />
        <View style={styles.editViewButtonContainer}>
          <TouchableOpacity
            onPress={this.addItem}
          >
            <Text style={styles.editViewButtonSave}>
                Add Item
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.warnUser}
          >
            <Text style={styles.editViewButtonCancel}>
                Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AddItem