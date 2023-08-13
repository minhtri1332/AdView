import {memo} from "react";
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/VideoScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "./utils/navigation";
import {Platform} from "react-native";

const RootStack = createStackNavigator();

export const Routes = memo(function Routes() {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator
                initialRouteName={"Home"}
                screenOptions={{ headerShown: false }}
            >
                <RootStack.Screen
                    name={"Home"}
                    component={HomeScreen}
                    options={{ animationTypeForReplace: "pop" ,headerShown: false}}
                />
                <RootStack.Screen options={{presentation:'fullScreenModal',headerShown: false}}
                                  name={"VideoScreen"}
                                  component={VideoScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
});

export default Routes;
