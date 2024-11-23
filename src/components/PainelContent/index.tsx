import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View,
} from "react-native";
import {
    SafeAreaProvider,
    SafeAreaView,
} from "react-native-safe-area-context";

import styles from './styles'

import {
    CardList,
    ContainerBody,
    ContainerHeader,
    ContainerPlus,
} from '@components/index';
import translate from "@services/i18n";

interface Props {
    page: 'plus' | 'home' | 'about';
    text?: string;
    textArray?: string[];
    title: string;
}

export const PainelContent = ({
    page,
    text,
    title,
    textArray }: Props) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>


                {page === 'plus' &&
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : 'height'}
                        keyboardVerticalOffset={700}
                    >
                        <ScrollView>
                            <View style={styles.box}>
                                <ContainerHeader
                                    title={title}
                                />
                                <ContainerPlus />
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                }

                {page === 'home' &&

                    <View style={styles.box}>
                        <ContainerHeader
                            title={title}
                        />
                        <CardList />
                    </View>
                }

                {page === 'about' &&
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : 'height'}
                        keyboardVerticalOffset={700}
                    >
                        <ScrollView>
                            <View style={styles.box}>
                                <ContainerHeader
                                    title={title}
                                />
                                {(textArray?.length) &&
                                    <ContainerBody
                                        text={textArray}
                                    />
                                }
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                }


            </SafeAreaView>
        </SafeAreaProvider>
    )
};