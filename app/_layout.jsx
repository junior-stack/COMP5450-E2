import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


const TabLayout  = () => {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color}) => (
                    <Ionicons name='home-outline' size={22} color={color} />
                )
            }} />
            <Tabs.Screen name='explore' options={{
                title: 'Explore',
                tabBarIcon: ({color}) => (
                <Ionicons name='search-outline' size={22} color={color} />
                )
            }} />
            <Tabs.Screen name='cart' options={{
                title: 'Cart',
                tabBarBadge: 3,
                tabBarIcon: ({color}) => (
                <Ionicons name='cart-outline' size={22} color={color} />
                )
            }} />

        </Tabs>
    )
}

export default TabLayout;