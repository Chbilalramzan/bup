import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import SocialAuth from '../components/SocialAuth';
import BottomTextButton from '../AuthOptionScreen/BottomTextButton';
import TextField from '../../../components/TextField';
import {EmailPurple, Eye, EyeCross, Key, User} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors.jsx';
import GradientButton from '../../../components/buttons/GradientButton';
import TextStyles from '../../../styles/TextStyles';
import AlertDialog from '../components/AlertDialog';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from '../../../utils/PermissionsAndValidations';
import {registerThunk, resetError} from '../../../redux/slices/authSlice';

const AccountSetupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, isFailed, error} = useSelector(state => state.auth);

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');

  const clickPasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const navigateTologin = () => {
    navigation.goBack();
  };
  const gotoConfirmationScreen = () => {
    navigation.navigate('TopicSelection');
  };

  const closeAlert = () => {
    dispatch(resetError());
  };

  const register = () => {
    if (isEmpty(username)) {
      return;
    }
    if (isEmpty(email)) {
      return;
    }
    if (isEmpty(password1)) {
      return;
    } else {
      dispatch(registerThunk({username, email, password1}));
      // console.log(email, password);
      // navigation.navigate('Confirmation');
    }
  };

  return (
    <AuthScreensSafeArea hasShadow>
      <View style={[styles.container, {paddingHorizontal: getSize(24)}]}>
        <Headings
          h1={'Sign up, Start Investing, and Begin Earning'}
          h2={'Get Started and enjoy the savings'}
        />

        <TextField
          placeholder={'Username'}
          onChangeText={setUsername}
          prefixIcon={<User width={getSize(20)} height={getSize(20)} />}
        />
        <TextField
          placeholder={'Email'}
          validateInput="email"
          onChangeText={setEmail}
          prefixIcon={<EmailPurple width={getSize(20)} height={getSize(20)} />}
        />
        <TextField
          placeholder={'Password'}
          validateInput={'password'}
          onChangeText={setPassword1}
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

        <View style={{marginTop: getSize(32), marginBottom: getSize(32)}}>
          <GradientButton
            disable={loading}
            buttonText={'Create Account'}
            onPress={register}
          />
        </View>
        <View style={{marginBottom: getSize(120)}}>
          <Text style={[TextStyles.style500, styles.textStyle]}>
            {'By creating an account, you agree to our '}
            <Text style={[TextStyles.style600, {color: Colors.textPurple}]}>
              {'Terms and Conditions. '}
            </Text>
            <Text>{'Please read our '}</Text>
            <Text style={[TextStyles.style600, {color: Colors.textPurple}]}>
              {'Policies.'}
            </Text>
          </Text>
        </View>
        <SocialAuth />
        <BottomTextButton
          text1={'Already have an account? '}
          text2={'Sign in'}
          onPress={navigateTologin}
        />
      </View>

      <AlertDialog isVisible={isFailed} onClose={closeAlert} message={error} />
    </AuthScreensSafeArea>
  );
};

export default AccountSetupScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24), flex: 1},
  forgetPassword: {alignSelf: 'flex-end'},
  extraTextStyle: {textDecorationLine: 'underline'},
  textStyle: {
    color: Colors.white,
    fontSize: getSize(14),
    lineHeight: getSize(24),
    textAlign: 'center',
  },
});
