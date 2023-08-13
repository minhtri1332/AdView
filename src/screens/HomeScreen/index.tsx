import React, { memo, useCallback, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { goBack, openVideoScreen } from "../../utils/navigation";
import { onValue, ref } from "firebase/database";
import { database } from "../../services/firebase";

const HomeScreen = memo(function HomeScreen() {
    useEffect(() => {
        const starCountRef = ref(database, 'URLVideo/');

        try {
            onValue(starCountRef, (snapshot) => {
                const data = snapshot?.val();
                openVideoScreen({urlVideo: data})
            });
        }catch (e) {
            // console.log(e.message);
        }
    }, []);

    const func = useCallback(() => {
        // openVideoScreen({})
    }, []);
    return (
        <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}} onPress={func}>
            <Text style={{fontFamily:'Walecriture-Regular', fontSize:60}}>Ad View</Text>
        </TouchableOpacity>
    );
});

export default HomeScreen;
