import {
    StyleSheet
  } from "react-native";
  
  export var backgroundColor = '#f8eaed';
  
  export const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
      },
      outsideContainer: {
        flex: 1,
        backgroundColor: '#ffdccb',
        alignItems: 'center',
        justifyContent: 'center',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: backgroundColor,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      TextInput: {
        alignItems: "center",
        textAlign: 'center',
        width: 35,
        marginBottom: 20,
      },
      buttonStyle: {
        margin: 15,
        borderRadius: 13,
        backgroundColor: '#fc94af',
        width: 150,
        height: 60,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 5,
      },
    }
    );