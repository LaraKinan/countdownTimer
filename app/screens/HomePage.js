import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';

export default function HomePage( {navigation} ) {
  return (
    <View style={styles.outsideContainer}>
      <Text style={{fontSize: 20, marginBottom: 10}}>Choose How to Set Time: </Text>
      <View style={{flexDirection: 'row'}} >
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Countdown')}>Countdown</TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Timer')}>Timer</TouchableOpacity>
      </View>
    </View>
  );
}
