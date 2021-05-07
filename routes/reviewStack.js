import { createStackNavigator } from 'react-navigation-stack';
import ReviewHome from '../screens/reviewHome';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    ReviewHome: {
        screen: ReviewHome,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Reviews' />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            headerStyle: {
                backgroundColor: '#fff'
            }
        }
    }
}

const ReviewStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#000',
        }
    }
});

export default ReviewStack;