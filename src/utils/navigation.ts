import React from "react";
import {ParamListBase, StackActions} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {VideoScreenProps} from "../screens/VideoScreen";

export const navigationRef = React.createRef<any>();

export const navigation = () => navigationRef.current!;

export const createNavigation = <T extends ParamListBase>() => {
    return navigation as unknown as () => NativeStackNavigationProp<T>;
};

export const createReplace =
    <T extends object>(screenName: string) =>
        (params?: T) => {
            return navigation().dispatch(StackActions.replace(screenName, params));
        };

export const createNavigate =
    <T extends object>(screenName: string) =>
        (params?: T) =>
            navigation().navigate(screenName, params);

export const createPush =
    <T extends object>(screenName: string) =>
        (params?: T) =>
            navigation().dispatch(StackActions.push(screenName, params));

export const mainNavigation = createNavigation();

export const goBack = () => navigation().goBack();

export const openVideoScreen =
    createNavigate<VideoScreenProps>("VideoScreen");
