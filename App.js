import React, {useState, useRef} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import OTPTextView from './OTPTextView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    height: 40,
    width: '100%',
  },
});

const App = () => {
  const [otpText, updateOtpText] = useState('');

  const otpInput = useRef(null);

  const clear = () => {
    updateOtpText('');
    otpInput.current.clear();
  };

  return (
    <View style={styles.container}>
      <Text>{otpText}</Text>
      <OTPTextView
        ref={otpInput}
        inputCellLength={2}
        inputCount={5}
        // value={otpText}
        handleTextChange={(e) => updateOtpText(e)}
      />
      <Button title="Clear" onPress={clear} />
    </View>
  );
};

export default App;
