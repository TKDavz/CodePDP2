import {StyleSheet} from 'react-native';

export enum Colors {
  primary = '#2CB3FC',
  secondary = '#EAEAEA',
  tertiary = '#F9F9F9',
  textPrimary = '#000000',
  textSecondary = '#6E6E6E',
  background = '#FFFFFF',
  accent = '#FA7544',

  white = '#FFFFFF',
  black = '#000000',

  error = '#ED2E7E',
  errorLight = '#ED2E7E80',
  success = '#2ED47A',
  successLight = '#2ED47A80',
  warning = '#FEBB2E',
  warningLight = '#FEBB2E80',
}

export const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
  },
});

export const fonts = StyleSheet.create({
  header: {
    fontSize: 36,
    fontFamily: 'OpenSans-BoldItalic',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSans-BoldItalic',
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    fontFamily: 'OpenSans-LightItalic',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-Light',
  },
  tag: {
    fontSize: 12,
    fontFamily: 'OpenSans-Light',
  },
});

export const components = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.black
  },
  dash:{
    height: 1,
    backgroundColor: Colors.black,
  },
  rowAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpaceEvently: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  raido_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  btnFilled: {
    width: 150,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 75,
  },
  btnFilledIcon: {
    width: 80,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  btnLinear: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: Colors.primary,
  },
  btnFloat: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: Colors.primary,
  },
  btnIcon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAddImage:{
    width: 250,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  textInput:{
    paddingLeft: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  textUser_Container: {

  },
  textUser_input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  textPass_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  textPass_input: {
    width: '80%',
  },
  textForm: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    height: 40
  },
  cardBig_Container: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    paddingBottom: 20
  },
  cardMedium_Container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 5
  },
  cardSmall_Container: {
    width: '100%',
    paddingBottom: 5
  },
  tag_Container: {
    marginLeft: 15,
    marginBottom: 25,
    flexGrow: 0,
  }
});
