import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
 import { HapticTab } from '@/components/HapticTab';
 import { IconSymbol } from '@/components/ui/IconSymbol';
 import TabBarBackground from '@/components/ui/TabBarBackground';
 import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
         tabBarButton: HapticTab,
         tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: '#7700FF', 
        tabBarInactiveTintColor: '#aaa', 
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
          tabBarIcon: ({ color }) => <Ionicons size={28} name="search" color={color} />,
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <Ionicons name="book" size={28} color={color} />,
        }}/>
    </Tabs>
  );
}
