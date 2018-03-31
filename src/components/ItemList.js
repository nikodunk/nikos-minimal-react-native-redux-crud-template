import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../actions/items';

class ItemList extends React.Component {

  componentDidMount() {
        this.props.fetchData('https://5ab9ea97d9ac5c001434ecd0.mockapi.io/items');
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is screen TWO</Text>
        {this.props.items.map((item) => (
                    <Text key={item.id}>
                        {item.name} {item.age}
                    </Text> ))}
        <Button 
          onPress={()=> {this.props.fetchData('https://5ab9ea97d9ac5c001434ecd0.mockapi.io/items')}} 
          title={'Reload'} />
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
        fetchData: (url) => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);