import React from 'react';


import Splash from '../main/userStack/Screens/Splash';
import SignIn from '../main/userStack/Screens/SignIn';
import SignUp from '../main/userStack/Screens/SignUp';

export enum UserStackScreensEnum {
    Splash = 'Splash',
    SignIn = 'SignIn',
    SignUp = 'SignUp',
}

export type UserStackParamList = {
    [UserStackScreensEnum.Splash]: undefined;
    [UserStackScreensEnum.SignIn]: undefined;
    [UserStackScreensEnum.SignUp]: undefined;
};

export const UserStackScreens = () => {
    const Screens: any [] = [
        {
            id: 1, name: UserStackScreensEnum.Splash,
            component: Splash,
            options: {

            },
        }, {
            id: 2, name: UserStackScreensEnum.SignIn,
            component: SignIn,
            options: {

            },
        }, {
            id: 3, name: UserStackScreensEnum.SignUp,
            component: SignUp,
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

