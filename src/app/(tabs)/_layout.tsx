import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors, variables } from '@themes/index';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                // headerStyle: {
                //     backgroundColor: colors.gray[500],
                //     borderTopColor: colors.gray[500]
                // },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.oldGold,
                tabBarInactiveBackgroundColor: colors.gray[800],
                tabBarStyle: {
                    paddingTop: 1,
                    backgroundColor: colors.gray[500],
                    borderTopColor: colors.gray[800],
                },
            }}
        >
            <Tabs.Screen
                name="About"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        < Feather name="info" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        < Feather name="home" size={size} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="Plus"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        < Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
};