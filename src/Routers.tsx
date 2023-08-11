import {memo} from "react";
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/VideoScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "./utils/navigation";
import {Platform} from "react-native";

const RootStack = createNativeStackNavigator();

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
                    options={{ animationTypeForReplace: "pop" }}
                />
                <RootStack.Screen options={{presentation:'fullScreenModal',  animation:
                        Platform.OS == "ios" ? "slide_from_bottom" : "fade_from_bottom",}} name={"VideoScreen"} component={VideoScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
});

export default Routes;
