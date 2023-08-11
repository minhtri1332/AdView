import React, {memo, useCallback} from 'react';
import { View } from 'react-native';
import {useAsyncFn} from "../../hooks";

export interface VideoScreenProps {}

const VideoScreen = memo(function VideoScreen(props: VideoScreenProps) {
    const {} = props;
    const [{loading: loadingData, error}, loadData] =
    useAsyncFn(async () => {}, []);

    const func = useCallback(() => {}, []);
    return (
        <View style={{flex:1, backgroundColor: 'green'}}>

        </View>
    );
});

export default VideoScreen;
