import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import SocialAuth from '../components/SocialAuth';
import BottomTextButton from '../AuthOptionScreen/BottomTextButton';
import TextField from '../../../components/TextField';
import {EmailPurple, Eye, EyeCross, Key} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors.jsx';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import GradientButton from '../../../components/buttons/GradientButton';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {isEmpty} from '../../../utils/PermissionsAndValidations';
import AlertDialog from '../components/AlertDialog';
import {useDispatch, useSelector} from 'react-redux';
import {loginThunk, resetError} from '../../../redux/slices/authSlice';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, isFailed, error} = useSelector(state => state.auth);

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [passwordEmpty, setPasswordEmpty] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clickPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const navigateToSignup = () => {
    navigation.navigate('Register');
  };

  const closeAlert = () => {
    dispatch(resetError());
  };

  const signIn = () => {
    if (isEmpty(username)) {
      setEmailEmpty(true);
      return;
    }
    if (isEmpty(password)) {
      setPasswordEmpty(true);
      return;
    } else {
      dispatch(loginThunk({username, password}));
    }
  };

  return (
    <AuthScreensSafeArea hasShadow top>
      <View style={[styles.container, {paddingHorizontal: getSize(24)}]}>
        <Headings
          h1={'Sign in, Start Investing, and Begin Earning'}
          h2={'Get Started and enjoy the savings'}
        />

        <TextField
          placeholder={'Username'}
          isEmpty={emailEmpty}
          onChangeText={setUsername}
          prefixIcon={
            <EmailPurple
              color={Colors.iconPurple}
              width={getSize(20)}
              height={getSize(20)}
            />
          }
        />
        <TextField
          placeholder={'Password'}
          validateInput={'password'}
          isEmpty={passwordEmpty}
          onChangeText={setPassword}
          prefixIcon={<Key width={getSize(20)} height={getSize(20)} />}
          suffixIcon={
            isPasswordVisible ? (
              <Eye width={getSize(20)} height={getSize(20)} />
            ) : (
              <EyeCross width={getSize(20)} height={getSize(20)} />
            )
          }
          isSecure={isPasswordVisible}
          onSuffixPress={clickPasswordVisibility}
        />
        <TouchableOpacity
          style={styles.forgetPassword}
          onPress={navigateToForgotPassword}>
          <TextSemiBold
            text={'Forget Password?'}
            fontSize={14}
            extraStyles={styles.extraTextStyle}
          />
        </TouchableOpacity>
        <View style={{marginTop: getSize(45), marginBottom: getSize(130)}}>
          <GradientButton
            disable={loading}
            buttonText={'Sign In'}
            onPress={signIn}
          />
        </View>

        <SocialAuth />
        <BottomTextButton
          text1={'Don’t have an account? '}
          text2={'Sign Up'}
          onPress={navigateToSignup}
        />
      </View>
      <AlertDialog isVisible={isFailed} onClose={closeAlert} message={error} />
    </AuthScreensSafeArea>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
});
