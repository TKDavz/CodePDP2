// import React from 'react';
// import { View, StyleSheet, Modal } from 'react-native';
// import { WebView } from 'react-native-webview';

// type WebViewModalProps = {
//   url: string;
//   visible: boolean;
//   onClose: () => void;
// };

// const WebViewModal: React.FC<WebViewModalProps> = ({ url, visible, onClose }) => {
//   return (
//     <Modal
//       animationType="slide"
//       transparent={false}
//       visible={visible}
//       onRequestClose={onClose}>
//       <View style={styles.modalContainer}>
//         <WebView source={{ uri: url }} style={styles.webview} />
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//   backgroundColor: 'white',
//   paddingTop: 20, // (Optional) You can adjust the top padding as needed
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '100%',
//   height: '100%',
//   position: 'relative',
//   top: 0,
//   left: 0,
//   zIndex: 999, // Ensure the modal appears above other components
//   borderWidth: 0,
//   borderColor: 'transparent',
//   margin: 0,
//   padding: 0,
//   borderTopWidth: 0,
//   borderBottomWidth: 0,
//   borderLeftWidth: 0,
//   borderRightWidth: 0,
// },
// webview: {
//   flex: 1,
// },
// });

// export default WebViewModal;
