import { Image, Text, View } from "react-native";

import styles from './styles'

interface Props {
    title?: string;
    disabled?: boolean;
    isLoading?: boolean;
    onPress?: () => void;
}

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://github.com/cbcr93.png"
                    }}
                />
            </Text>
        </View>
    )
};