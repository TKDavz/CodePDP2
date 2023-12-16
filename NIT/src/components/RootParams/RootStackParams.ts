import React from 'react';
import UserNavigation from '../main/userStack/UserNavigation';
import NewsNavigation from '../main/appTab/NewsNavigation';


export enum RootStackScreensEnum {
    UserNavigation = 'UserNavigation',
    NewsNavigation = 'NewsNavigation'
}

export type RootStackParamList = {
    [RootStackScreensEnum.UserNavigation]: undefined;
    [RootStackScreensEnum.NewsNavigation]: undefined;
};

export const RootStackScreens = () => {
    const Screens: any[] = [
        {
            id: 1, name: RootStackScreensEnum.UserNavigation,
            component: UserNavigation,
            options: {

            },
        }, {
            id: 2, name: RootStackScreensEnum.NewsNavigation,
            component: NewsNavigation,
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

