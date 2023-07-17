import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
  
function Link(props) {
  return <Text {...props} accessibilityRole="link" style={StyleSheet.compose(styles.link, props.style)} />;
}

function App() {
  var [barcode_data, setbarcode_data] = useState("...");

  setInterval(() => {
    setbarcode_data( window["getBarcodeData"]() );
  }, 300);

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zebra EB - Welcome to React Native for Web</Text>
      </View>
      <Text style={styles.text}>
      <p>{barcode_data}</p>
      </Text>

      <Button onPress={() => {window["triggerBarcodeScanner"]();}} title="Scan with Datawedge!" />
    </View>
  ); 
}
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  link: {
    color: '#1B95E0'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});
export default App;