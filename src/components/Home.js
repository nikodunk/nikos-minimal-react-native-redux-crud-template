import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { putData } from '../actions/items';
import { ItemList } from './ItemList'

class Home extends React.Component {

      constructor(props) {
        super(props);
        this.state = {value: 'georgina'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(text) {
        this.setState({value: text.text});
      }

      handleSubmit(event) {
        this.props.putData('https://5ab9ea97d9ac5c001434ecd0.mockapi.io/items', this.state.value)
        event.preventDefault();
      }


  render() {
    return (
      <View style={styles.container}>
        <Text>This is screen one</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here to submit!"
            onChangeText={(text) => this.handleChange({text})}
          /> 
          <Button onPress={this.handleSubmit} title={'Submit'}></Button>
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    margin: 30,
    width: 300,
    height: 40,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        putData: (url, newItem) => dispatch(putData(url, newItem))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);