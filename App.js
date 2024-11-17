import React, { useState } from 'react';
import { FlatList, SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';

const DATA = [
  {
    id: 1,
    headText: 'Javascript',
    descrText: 'Text with experience of learning Javascript',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 2,
    headText: 'TypeScript',
    descrText: 'Text with experience of learning TypeScript',
    imageUrl: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
  },
  {
    id: 3,
    headText: 'C#',
    descrText: 'Text with experience of learning C#',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
];


const Item = ({itm}) => (
  <View style={styles.item}>
    <Image
        style={styles.logo}
        source={{
          uri: itm.imageUrl,
        }}
      />
    <Text style={styles.title}>{itm.headText}</Text>
    <Text>{itm.descrText}</Text>   
    
  </View>
);

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item itm={item} />}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={()=>{
          setIsRefreshing(true);
          setTimeout(() => {
            setIsRefreshing(false);
          }, 500);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#a4d4cc',
  },
  logo: {
    width: 50,
    height: 50, 
  },
  title: {
    fontSize: 32,
  },
});
