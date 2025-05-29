import { Text, View, Image } from "react-native";
import formatNumber from "../utils/formatNumber"

export default function Geymat(props) {
    // const srcIcon = require(`../assets/webp/${props.icon}.webp`)
    const images = {
        ic_emami:  require(`../assets/webp/ic_emami.webp`),
        ic_nimsekeh:  require(`../assets/webp/ic_nimsekeh.webp`),
        ic_robsekeh:  require(`../assets/webp/ic_robsekeh.webp`),
        ic_sekeh_kr:  require(`../assets/webp/ic_sekeh_kr.webp`),
        ic_gold18:  require(`../assets/webp/ic_gold18.webp`),
        america:  require(`../assets/webp/america.webp`),
        european:  require(`../assets/webp/european.webp`),
    }

    return (
        <View style={{justifyContent: "space-between", flexDirection: "row-reverse", alignItems: "center", width: "90%", margin: "auto", marginTop: 30, backgroundColor: "white", padding: 10, borderRadius: 7}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{marginRight: 10}}>{props.name}</Text>
                <Image source={images[props.icon]}/>
            </View>
            <View>
                <Text>{formatNumber(props.price)} تومان</Text>
            </View>
        </View>
    )
}

