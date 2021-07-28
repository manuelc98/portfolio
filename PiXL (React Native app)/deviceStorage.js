import React, { useEffect, useReducer } from "react";
import { AsyncStorage } from "react-native";

const deviceStorage = () => {
  const initialState = { isLoading: true, jwt: null, isLoggedOut: false };
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "loadJWT":
        return {
          ...prevState,
          jwt: action.jwt,
          isLoading: false,
        };
      case "saveKey":
        return {
          ...prevState,
          jwt: action.jwt,
          isLoading: false,
        };
      case "deleteJWT":
        return {
          ...prevState,
          jwt: null,
          isLoggedOut: true,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const saveKey = async (key, valueToSave) => {
    try {
      await AsyncStorage.setItem(key, valueToSave);
      console.log("key saved", state);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  };
  const loadJWT = async () => {
    try {
      const value = await AsyncStorage.getItem("id_token");
      if (value !== null && !state.jwt) {
        dispatch({ type: "loadJWT", jwt: value });
      } else {
        dispatch({ type: "loadJWT", jwt: value });
      }
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  };
  const deleteJWT = async () => {
    try {
      await AsyncStorage.removeItem("id_token").then(() => {
        dispatch({ type: "deleteJWT" });
      });
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  };
};

//   const [jwt, setJwt] = useState("");
//   const [loading, setLoading] = useState(true);
//   const saveKey = async (key, valueToSave) => {
//     try {
//       await AsyncStorage.setItem(key, valueToSave);
//     } catch (error) {
//       console.log("AsyncStorage Error: " + error.message);
//     }
//   };

//   const loadJWT = async () => {
//     try {
//       const value = await AsyncStorage.getItem("id_token");
//       if (value !== null) {
//         setJwt(value);
//         setLoading(false);
//       } else {
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log("AsyncStorage Error: " + error.message);
//     }
//   };

//   const deleteJWT = async () => {
//     try {
//       await AsyncStorage.removeItem("id_token").then(() => {
//         setJwt("");
//       });
//     } catch (error) {
//       console.log("AsyncStorage Error: " + error.message);
//     }
//   };
// };

export default deviceStorage;
