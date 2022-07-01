import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { names } from "./name"


export default function App() {

  const renderName = ({ item }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </SafeAreaView>
    )

  }

  const namesAsObjects = names.map((item) => {
    return { name: item }

  });

  return (
    <FlatList
      data={namesAsObjects}
      renderItem={renderName}
      keyExtractor={(item) => item.name}
    />
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#add8e6',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#ccc',
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 6,
  },
  title: {
    fontSize: 14,
  },
});
