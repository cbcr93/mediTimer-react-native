import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    View,
} from "react-native";

import styles from './styles'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface Props {
    value?: string;
    setValue?: (value: string) => void;
    label?: any;
    onPress?: () => void;
    type?:
    'default' |
    'number-pad' |
    'decimal-pad' |
    'numeric' |
    'email-address' |
    'phone-pad' |
    'url';
    loading?: boolean;
    disabled?: boolean;
    style?: any;
}

export const Input = ({
    value,
    setValue,
    label,
    style,
    type = 'default',
    disabled = false,
    ...props
}: Props) => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : 'height'}
            keyboardVerticalOffset={500}
        >
            {label &&
                <Text style={styles.title}>
                    {label}
                </Text>
            }
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                keyboardType={type}
                disableFullscreenUI={disabled}
                {...props}
            />
        </KeyboardAvoidingView>
    )
};