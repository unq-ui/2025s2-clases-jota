import { Tabs, useRouter } from 'expo-router';
import React from 'react';

import { HomeIcon, PlusSquareIcon, SearchIcon } from '@/components/Icons';

const TabLayout = () => {
  const router = useRouter();

  const handleCreatePress = (e: any) => {
    e.preventDefault();
    router.push('/crear');
  };

  return (
  <Tabs
    screenOptions={{ tabBarActiveTintColor: 'red', headerShown: false }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <HomeIcon color={color} />,
      }}
    />
    <Tabs.Screen
      name="custom"
      options={{
        title: 'Crear Usuario',
        tabBarIcon: ({ color }) => <PlusSquareIcon color={color} />,
      }}
      listeners={{
        tabPress: handleCreatePress,
      }}
    />
    <Tabs.Screen
      name="users"
      options={{
        title: 'Users',
        tabBarIcon: ({ color }) => <SearchIcon color={color} />,
      }}
    />
  </Tabs>
  );
};

export default TabLayout;
