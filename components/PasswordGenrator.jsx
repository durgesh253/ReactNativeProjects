import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup'; // Import Yup correctly


const PasswordSchema = Yup.object().shape({
  PasswordLength: Yup.number()
    .min(4, "Should be a minimum of 4 characters")
    .max(16, "Should be a maximum of 16 characters")
    .required('Length is required')
});

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerate, setIsPasswordGenerate] = useState(false); // Initialize with false
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength) => {
    let charList = '';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitsChars = '0123456789';
    const specialChars = '/*+-!@#$%^&()';

    if (uppercase) {
      charList += uppercaseChars;
    }
    if (lowercase) {
      charList += lowercaseChars;
    }
    if (numbers) {
      charList += digitsChars;
    }
    if (symbols) {
      charList += specialChars;
    }

    const passwordResult = createPassword(charList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerate(true);
  };

  const createPassword = (characters, passwordLength) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerate(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>PasswordGenerator</Text>
      <Button title="Generate Password" onPress={() => generatePasswordString(8)} />
      <Button title="Reset Password" onPress={resetPassword} />
      {isPasswordGenerate && <Text>Password: {password}</Text>}
    </View>
  );
};

export default PasswordGenerator;
