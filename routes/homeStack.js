import { createStackNavigator } from 'react-navigation-stack';
import TaskHome from '../screens/taskHome';
import Header from '../shared/header';
import React from 'react';

const screens = {
    TaskHome: {
        screen: TaskHome,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='TaskZone' />,
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#000',
        }
        
    }
});

export default HomeStack;