import {memo, useCallback, useEffect, useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {appFire, database} from './src/services/firebase'
import { getDatabase, ref, set } from "firebase/database";

// Initialize Firebase
const App = memo(function App() {
    const [state, setState] = useState('');
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

  useEffect(() => {
      // const onChildAdd =  database()
      //     .ref('/users')
      //     .on('value', snapshot => {
      //         console.log('User data1: ', snapshot.val());
      //     });
      //
      // return () => database().ref('/users').off('child_added', onChildAdd);
  }, []);

  const onPress = useCallback(
      async () => {

          set(ref(database, 'users/' ), {
              username: 'name',
              email: 'email',
              profile_picture : '21'
          });
          // database().refFromURL('https://my-database-url.firebase.com/users')
          //     .set([{
          //         name: state,
          //         age: 31,
          //     }, {name :'tri2'}])
          //     .then(() => console.log('Data set.'));
      },
      [state],
  );


  return <View>
<TouchableOpacity onPress={onPress}>
    <Text>asd21</Text>
<TextInput onChangeText={(e) => setState(e)} placeholder={'okasdo'}/>
</TouchableOpacity>
  </View>
})

export default App
