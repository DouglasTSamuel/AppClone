import * as React from 'react';
import Login from './src/pages//Login';
import Home from './src/pages//Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;

                            if (route.name === 'Mensagens') {
                                iconName= 'chatbox';
                            } else if (route.name === 'Amigos') {
                                iconName= 'people-sharp';
                            } else if (route.name === 'Pesquisa') {
                                iconName= 'search-sharp';
                            } else if (route.name === 'Mencionar') {
                                iconName= 'at-sharp';
                            } else if (route.name === 'Perfil') {
                                iconName= 'person-circle-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;                
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'white',
                        inactiveTintColor: 'gray',
                        activeBackgroundColor: '#202225',
                        inactiveBackgroundColor: '#202225'
                    }}
                >
                    <Tab.Screen name="Mensagens" component={Home} />
                    <Tab.Screen name="Amigos" component={Home} />
                    <Tab.Screen name="Pesquisa" component={Home} />
                    <Tab.Screen name="Mencionar" component={Home} />
                    <Tab.Screen name="Perfil" component={Login} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App;
