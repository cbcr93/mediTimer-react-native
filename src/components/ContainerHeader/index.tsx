import { Text, View } from "react-native";

import styles from './styles'

interface Props {
    title: string;
    disabled?: boolean;
    isLoading?: boolean;
    onPress?: () => void;
}

export const ContainerHeader = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </View>
    )
};