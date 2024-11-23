import { ScrollView, Text, View } from "react-native";

import styles from './styles'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface Props {
    title?: string;
    text: string[];
    disabled?: boolean;
    isLoading?: boolean;
    onPress?: () => void;
}

export const ContainerBody = ({ title, text }: Props) => {
    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={styles.box} edges={['top']}>
                {title &&
                    <Text style={styles.title}>
                        {title}
                    </Text>
                }

                {text.length &&
                    text.map((t, i) => (
                        <Text style={styles.text} key={i}>
                            {t}
                        </Text>
                    ))
                }
            </SafeAreaView>
        </SafeAreaProvider>
    )
};