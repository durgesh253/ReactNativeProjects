import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { onAuthStateChanged } from 'firebase/auth'; // Corrected the import
import { auth } from "./Firbase"; // Assuming you have correctly imported your Firebase configuration


const UseAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsub
  }, []);

  return user
}

export default UseAuth;
