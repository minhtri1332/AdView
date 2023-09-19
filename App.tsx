import { memo } from "react";
import Routes from "./src/Routers";
import { Text, TouchableOpacity, View } from "react-native";

// Initialize Firebase
const App = memo(function App() {
    // const [state, setState] = useState('');
    // const a = useCallback(
    //     async () => {
    //
    //         const reference1 = database()
    //             .ref('/users')
    //             .on('value', snapshot => {
    //                 console.log('User data1: ', snapshot.val());
    //             });
    //
    //     },
    //     [],
    // );

  // useEffect(() => {
  //   const starCountRef = ref(database, 'users/');
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     // updateStarCount(postElement, data);
  //     console.log('da', data);
  //   });
  // }, []);

  // const onPress = useCallback(
  //     async () => {
  //
  //         set(ref(database, 'users/' ), {
  //             username: state||'asd',
  //             email: 'email',
  //             profile_picture : '21'
  //         });
  //     },
  //     [state],
  // );

// return <Routes />
  return <TouchableOpacity onPress={()=>{}} style={{flex:1, backgroundColor: 'pink'}}>
    <Text>asd21</Text>
</TouchableOpacity>
})

export default App
