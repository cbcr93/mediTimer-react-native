import { StyleSheet, Dimensions } from 'react-native';
import { colors, variables } from '@themes/index';

export default StyleSheet.create({   
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[300]
    },
    text: {
    },
    image: {
        width: 50,
        height: 50,
    },
});