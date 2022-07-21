import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>

      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>

      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({ // 자동 완성 가능한 style 객체 생성 ... container를 전달
  // css 틀리면 놀랍게도 native에서는 오류를 알려준다 ...
  container : {
    flex: 1,
    backgroundColor: '#99bab1',
  },
  cityName : {
    color: "#ed5f80",
    fontSize: 54,
    fontWeight: 'bold'
  },  
  city : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weather : {
    flex: 3,
    backgroundColor: "yellow"
  },
  day : {
    flex: 1,
    alignItems: "center",
    backgroundColor: "skyblue"
  }, 
  temperature : {
    marginTop: 50,
    fontSize: 100,
  },
  description : {
    marginTop: -10,
    fontSize: 60,
  }
});
