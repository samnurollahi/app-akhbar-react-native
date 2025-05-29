import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Disconnect from "../screens/Disconnect";
import * as NetInfo from "@react-native-community/netinfo";
import Home from "../screens/Home";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Bazar from "../screens/Gold";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator(); // return tow component
  const netInfo = NetInfo.useNetInfo();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // headerShown: false,
        headerTitleAlign: "center",
      }}
    >

      {
        !netInfo.isConnected && <Tab.Screen
        name="Disconnect"
        component={Disconnect}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      }

      <Tab.Screen name="News" component={Home} options={{
        headerTitle: "",
        tabBarIcon: ({color, focused}) => <FontAwesome5 name="money-bill" size={24} color={focused ? "green" : ""} /> 
      }} />
      <Tab.Screen name="Bazar" component={Bazar} options={{
        headerTitle: "",
        tabBarIcon: ({color, focused}) => <MaterialCommunityIcons name="gold" size={24} color={focused ? "gold" : "" } />
      }} />
    </Tab.Navigator>
  );
}
