import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
 import { HapticTab } from '@/components/HapticTab';
 import { IconSymbol } from '@/components/ui/IconSymbol';
 import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
         tabBarButton: HapticTab,
         tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'black',
          },
          default: {
            backgroundColor: 'black', 
          },
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
  
    </Tabs>
  );
}
