import React from "react";
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import themeReducer from "./stores/themeReducer";
import {
    Login,
    Register,
    Walkthrough,
    ChooseCategory,

    MainLayout,

    CourseListing,
    CourseDetails,

    Notification,
    Membership,
    InstructorProfile,

    PopularCourses,
    CategoryList,

    Feedback,
} from "./screens";

//const Stack = createNativeStackNavigator();
const Stack = createSharedElementStackNavigator();
const options = {
    gestureEnabled: false,
    transitionSpec: {
        open: {
            animation: 'timing',
            config: { duration: 400, easing: Easing.inOut(Easing.ease) },
        },
        close: {
            animation: 'timing',
            config: { duration: 400, easing: Easing.inOut(Easing.ease) },
        },
    },
    cardStyleInterpolator: ({ current: { progress } }) => {
        return {
            cardStyle: {
                opacity: progress,
            },
        };
    },
};

const store = createStore(
    themeReducer,
    applyMiddleware(thunk)
)

const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        useNativeDriver: true,
                        headerShown: false,
                    }}
                    initialRouteName={'Login'}
                    detachInactiveScreens={false}
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />

                    <Stack.Screen
                        name="Register"
                        component={Register}
                    />

                    <Stack.Screen
                        name="Walkthrough"
                        component={Walkthrough}
                    />

                    <Stack.Screen
                        name="ChooseCategory"
                        component={ChooseCategory}
                    />

                    <Stack.Screen
                        name="Dashboard"
                        component={MainLayout}
                    />

                    <Stack.Screen
                        name="CourseListing"
                        component={CourseListing}
                        options={() => options}
                    />

                    <Stack.Screen
                        name="CourseDetails"
                        component={CourseDetails}
                    />

                    <Stack.Screen
                        name="PopularCourses"
                        component={PopularCourses}
                    />

                    <Stack.Screen
                        name="CategoryList"
                        component={CategoryList}
                    />

                    <Stack.Screen
                        name="Notification"
                        component={Notification}
                    />

                    <Stack.Screen
                        name="Membership"
                        component={Membership}
                    />

                    <Stack.Screen
                        name="InstructorProfile"
                        component={InstructorProfile}
                    />

                    <Stack.Screen
                        name="Feedback"
                        component={Feedback}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App