// import {StateStorage} from "zustand/middleware";
//
// const MMKVS = require("react-native-mmkv")
//
// export const storage = MMKVS ? new MMKVS.MMKV() : null;
//
// const StorageMMKV: StateStorage = {
//   setItem: (name, value) => {
//     if (!storage) {
//       return
//     }
//     return storage.set(name, value)
//   },
//   getItem: (name) => {
//     if (!storage) {
//       return
//     }
//     const value = storage.getString(name)
//     return value ?? null
//   },
//   removeItem: (name) => {
//     if (!storage) {
//       return
//     }
//     return storage.delete(name)
//   },
//   removeAll: (name) => {
//     if (!storage) {
//       return
//     }
//     return storage.clearAll()
//   },
// };
//
// export default StorageMMKV;
