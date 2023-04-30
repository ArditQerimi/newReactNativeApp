import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NativeModules} from 'react-native';

// ...

const {StatusBarManager} = NativeModules;

interface Props {}
const SplashScreen: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);
  }, []);
  const statusBarHeight = StatusBarManager.HEIGHT;
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#fb2219" // Change status bar color
        // translucent={false} // Make status bar translucent
        hidden={true}
      />
      <Image
        source={require('./utils/Kopertina.jpg')}
        // style={[styles.logo, {marginBottom: statusBarHeight}]}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb2219',
  },
  logo: {
    width: '100%',
    height: '75%',
    objectFit: 'cover',
    //
    marginBottom: 30,
  },
});
