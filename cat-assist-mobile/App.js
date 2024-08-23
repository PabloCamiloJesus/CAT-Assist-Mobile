import { StyleSheet,Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Image src={require()} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
