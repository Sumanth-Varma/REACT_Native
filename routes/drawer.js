import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import ReviewStack from './reviewStack';
import AboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Reviews: {
        screen: ReviewStack
    },
    About: {
        screen: AboutStack
    },  
},{
    hideStatusBar: true
});

export default createAppContainer(RootDrawerNavigator);