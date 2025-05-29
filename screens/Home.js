import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Geymat from "../components/geymatBox";

export default function Home() {
  const [data, setData] = useState();
  let icon = "";
  let isHas = false;

  const request = () => {
    axios
      .get(
        "https://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency_v2.json"
      )
      .then((result) => {
        setData(result.data.currency);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderItem = ({ item }) => {
    isHas = false;
    console.log(item.name);

    switch (item.name) {
      case "دلار":
        icon = "america";
        isHas = true;
        break;
      case "يورو":
        icon = "european";
        isHas = true;
        break;
    }

    if (isHas) {
      return (
        <Geymat
          price={item.price}
          name={item.name}
          unit={item.unit}
          icon={icon}
        />
      );
    }
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.name}/>
    </View>
  );
}
