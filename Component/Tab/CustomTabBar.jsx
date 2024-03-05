import React from 'react'
import { View, StyleSheet, Pressable} from "react-native";
import { useTheme } from "@react-navigation/native";
import BottomSheetMusic from '../BottomMusic/BottomSheetMusic'
import Ionicons from "react-native-vector-icons/Ionicons"
import Animated, { FadeInLeft, FadeInRight} from "react-native-reanimated";
export default function CustomTabBar({ state, descriptors, navigation }) {
  const theme = useTheme()
    return (
        <>
          <BottomSheetMusic/>
          <View style={{
            ...styles.mainContainer,
            backgroundColor:theme.colors.background,
          }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            return (
              <View key = {index} style = {styles.mainItemContainer}>
                <Pressable
                  onPress = {onPress}
                  style = {{backgroundColor: isFocused ? "rgba(57,136,201,0.12)" : "rgba(0,0,0,0)", borderRadius: 20, height:40 }}>
                  {!isFocused && <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    paddingHorizontal: 15,
                    gap: 5,
                  }}>
                    <Ionicons name={label !== "Discover" ? label.toString().toLowerCase() : "globe"}
                              color={theme.colors.text} size={14} />
                  </View>}
                  {isFocused && <Animated.View entering={FadeInRight} style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    paddingHorizontal: 15,
                    gap: 5,
                  }}>
                    <Ionicons name={label !== "Discover" ? label.toString().toLowerCase() : "globe"}
                              color={ theme.colors.primary } size={14} />
                    <Animated.Text entering={FadeInLeft} style={{
                      fontSize: 10,
                      color: theme.colors.primary,
                    }}>{label}</Animated.Text>
                  </Animated.View>}
                </Pressable>
              </View>
            );
          })}
        </View></>
      );
}

const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      height:50,
      alignItems:"center",
    },
    mainItemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
