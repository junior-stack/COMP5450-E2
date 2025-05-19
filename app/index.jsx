import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'


const Home = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>

      <Link href="/explore" style={styles.link}>Explore Page</Link>
      <Link href="/cart" style={styles.link}>Cart Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})