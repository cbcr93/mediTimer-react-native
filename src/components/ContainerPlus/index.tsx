import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";

import styles from './styles'
import {
    SafeAreaProvider,
    SafeAreaView
} from "react-native-safe-area-context";

import {
    Button,
    Input,
} from '@components/index'
import translate from "@services/i18n";

interface Props {
    title?: string;
    text?: string[];
    disabled?: boolean;
    isLoading?: boolean;
    onPress?: () => void;
}

export const ContainerPlus = ({ title, text }: Props) => {

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView
                edges={['top']}
                style={styles.box}
            >
                <Text style={styles.title}>
                    {title}
                </Text>

                <Input
                    label={"1"}
                />
                <Input
                    label={"2"}
                />
                <Input
                    label={"3"}
                />
                <Input
                    label={"4"}
                />
                <Input
                    label={"5"}
                />
                <Input
                    label={"6"}
                />
                <Button
                    label={translate('SHARED.SAVE')}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
};