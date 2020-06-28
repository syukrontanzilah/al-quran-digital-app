import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tab from '../Tab';
import { colors } from '../../../utils';

const BottomNavigator = ({state, descriptors, navigation}) => {
    return (
        <View style={styles.container}>
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
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <Tab
            key={index}
            title = {label}
            active = {isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            />
          );
        })}
      </View>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:50,
    backgroundColor: colors.green, 
    paddingVertical:8
  }
})
