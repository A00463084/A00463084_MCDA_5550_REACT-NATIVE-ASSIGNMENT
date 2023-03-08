import { FlatList } from "react-native";
import CategoryTile from "../components/CategoryTile";

import { CATEGORIES1 } from "../data";

function CategoriesScreen1({ navigation }) {
  const pressHandler = (itemData) => {
    if(itemData.item.id == "page_1"){
      navigation.navigate("FeedbackPg", { categoryId: itemData.item.id });
    }
    else{
      navigation.navigate("WeatherPg", { categoryId: itemData.item.id });
    }
  };

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
    <FlatList
      data={CATEGORIES1}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen1;
