import React, { memo } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import Video from "react-native-video";
import { useNavigationParams } from "../../hooks/useNavigationParams";

export interface VideoScreenProps {
  urlVideo:string
}

const VideoScreen = memo(function VideoScreen() {
    const {urlVideo} = useNavigationParams<VideoScreenProps>();

    return (
    <View style={{flex:1, backgroundColor: 'green'}}>
      {urlVideo != ''?<Video source={{ uri: urlVideo }}   // Can be a URL or a local file.
              autoplay={true}
              controls={false}
              disableFocus={true}
              resizeMode={"cover"}
              repeat={true}
              fullscreen={true}
              onError={e => {
                ToastAndroid.show(e?.error?.errorString || '')
              }}
              style={styles.backgroundVideo} />: null}
    </View>
    );
});

export default VideoScreen;
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'black'
  },
  backgroundVideo1: {
    height:300,
    width:300,
    backgroundColor:'black'
  },
});
