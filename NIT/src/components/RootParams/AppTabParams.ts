import React from 'react';
import Home from '../main/appTab/Screens/Home';
import Activity from '../main/appTab/Screens/Activity';
import Search from '../main/appTab/Screens/Search';
import User from '../main/appTab/Screens/User';



export enum AppTabScreensEnum {
    Home = 'Home',
    Activity = 'Activity',
    Seach = 'Seach',
    User = 'User',
}

export type AppTabParamList = {
    [AppTabScreensEnum.Home]: undefined;
    [AppTabScreensEnum.Activity]: undefined;
    [AppTabScreensEnum.Seach]: undefined;
    [AppTabScreensEnum.User]: undefined;
};


export const AppTabScreens = () => {
    const Screens: any[] = [
        {
            id: 1, name: AppTabScreensEnum.Home,
            component: Home,
            options: {

            },
        }, {
            id: 2, name: AppTabScreensEnum.Activity,
            component: Activity,
            options: {

            },
        }, {
            id: 3, name: AppTabScreensEnum.Seach,
            component: Search,
            options: {

            },
        }, {
            id: 4, name: AppTabScreensEnum.User,
            component: User,
            options: {

            },
        }

    ];
    return Screens;
};


// export type RootStackNavigationProps<T extends keyof RootStackParamList> = {
//     navigation: StackNavigationProp<RootStackParamList, T>;
//     route: RouteProp<RootStackParamList, T>;
//     };

