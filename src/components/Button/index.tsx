import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
} from "react-native";

import styles from './styles'

interface Props {
    label?: any;
    onPress?: () => void;
    type?: 'primary' | 'secondary';
    size?: 'big' | 'small';
    loading?: boolean;
    disabled?: boolean;
    style?: any;
}

export const Button = ({
    label,
    style,
    type = 'primary',
    size = 'big',
    loading = false,
    disabled = false,
    ...props
}: Props) => {
    return (
        <TouchableOpacity
            {...props}
            disabled={loading || disabled}
            style={[
                size === 'big' ? styles.containerBig : styles.containerSmall,
                type === 'primary'
                    ? styles.primaryContainer
                    : styles.secondaryContainer,
                style
            ]}
            activeOpacity={0.8}>
            <Text
                style={
                    size !== 'big' ? [styles.label, styles.labelSmall] : styles.label
                }>
                {loading ? <ActivityIndicator /> : label}
            </Text>
        </TouchableOpacity>
    )
};