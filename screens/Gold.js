import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Geymat from "../components/geymatBox";

export default function Bazar() {
  const [data, setData] = useState([]);
  let icon = "";
  let isHas = false

  const request = () => {
    axios
      .get(
        "https://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency_v2.json"
      )
      .then((result) => {
        setData(result.data.gold);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderItem = ({ item }) => {
    isHas = false

    switch (item.name) {
      case "سکه امامی":
        icon = "ic_emami";
        isHas = true
        break;
      case "نیم سکه":
        icon = "ic_nimsekeh";
        isHas = true
        break;
      case "ربع سکه":
        icon = "ic_robsekeh";
        isHas = true
        break;
      case "سکه گرمی":
        icon = "ic_sekeh_kr";
        isHas = true
        break;
      case "طلای 18 عیار":
        icon = "ic_gold18";
        isHas = true
        break;
    }

    if(isHas) {
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

    // setInterval(() => {
    //   request();
    // }, 100000000000);
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
