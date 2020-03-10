import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [props.name],
      tableData: [
        ['1. - 3. Stunde', 'je 1.50€' ],
        ['4. Stunde', '1.00€'],
        ['Tageshöchstgebühr', '5.50€'],
        ['Kongressticket 7-Tage', '25.00€'],
        ['Kongressticket 28-Tage', '50.00€'],
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.texthead}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    width: "100%",
    padding: 16, 
    backgroundColor: '#fff' },
  head: { 
    height: 40, 
    backgroundColor: '#BB2D37', 
    alignItems: "center"},
  text: { 
  margin: 6 },
  texthead:{
    fontSize: 15,
    marginTop: 10, 
    padding: 5,
     color: '#fff',
    alignContent: "center",
    textAlign: "center"
  },
});

