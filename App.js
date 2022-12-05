import React, { useRef } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;
const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const springAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };
  const moveLeft = () => {
    Animated.spring(springAnim, {
      toValue: -50,
      friction: 2,
      tension: 100,
    }).start();
  };
  const moveRight = () => {
    Animated.spring(springAnim, {
      toValue: 50,
      friction: 2,
      tension: 100,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateX: springAnim }],
          },
        ]}>
        <Text style={styles.fadingText}> Animation Box </Text>
      </Animated.View>
 
      <View style={styles.buttonRow}>
        <Separator />
        <Button title="Fade In" onPress={fadeIn} color="#f194ff" />
        <Separator />
        <Button title="Move Left" onPress={moveLeft} color="#f194ff" />
        <Separator />
        <Button title="Move Right" onPress={moveRight} color="#f194ff" />
        <Separator />
        <Button title="Fade Out" onPress={fadeOut} color="#f194ff" />
        <Separator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'purple', 
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: '#f194ff',
    borderWidth: 5,
    borderColor: 'white',
  },
  fadingText: {
    backgroundColor: '#f194ff',
    fontSize: 28,
    color: 'white',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
    backgroundColor: 'purple',
  },
    separator: {
    marginVertical: 8,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
