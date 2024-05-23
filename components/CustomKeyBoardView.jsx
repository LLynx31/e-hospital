import { KeyboardAvoidingView, Platform } from "react-native";

const ios = Platform.OS == 'ios'
export default function CustomKeyBoardView({children}){
    return(
        <KeyboardAvoidingView
            behavior={ios ? 'padding': 'height'}
            style={{flex:1}}
            keyboardVerticalOffset={90}
        >

        </KeyboardAvoidingView>
    )

}