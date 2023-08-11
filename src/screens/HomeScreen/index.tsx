import React, {memo, useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {openVideoScreen} from "../../utils/navigation";

const HomeScreen = memo(function HomeScreen() {


    const func = useCallback(() => {
        openVideoScreen({})
    }, []);
    return (
        <TouchableOpacity style={{flex:1, backgroundColor: 'pink'}} onPress={func}>

        </TouchableOpacity>
    );
});

export default HomeScreen;
