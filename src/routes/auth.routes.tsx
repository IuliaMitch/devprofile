import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/signIn';
import { SignUp } from '../pages/signup';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Auth.Navigator
      initialRouteName="Sign Up"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="Sign In" component={SignIn} />
      <Auth.Screen name="Sign Up" component={SignUp} />
    </Auth.Navigator>
  );
};
