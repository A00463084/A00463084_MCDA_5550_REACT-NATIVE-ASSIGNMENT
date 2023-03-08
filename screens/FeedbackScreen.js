import { View, FlatList, StyleSheet,Text,Image } from "react-native";


function FeedbackScreen({ navigation }) {
    
    const renderCategoryItem = (itemData) => {
      return (
        <CategoryTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => pressHandler(itemData)}
        />
      );
    };
  
    return (
      <View style={styles.container}>
        <Text>
          
        {"FEEDBACK"}
        {"\n"}
        {"----------"}
        {"\n"}
        {"\n"}
        {"Had Wonderful Time ... Very Much Interesting Lesson :)"}
        {"\n"}
        {"\n"}
        {"Thank you Simon for the amazing lecture"}
        {"\n"}
        {"\n"}
        {"Francis Alex A00463084"}
        {"\n"}
        {"\n"}
        {"\n"}

       </Text>

       <Image source={require('../assets/thankyou.jpg')}/>

      </View>
    );
  }
  
  export default FeedbackScreen;

  const styles = StyleSheet.create({
    container: {
      marginTop:200,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });