import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { colors, variables } from '@themes/index';

export default StyleSheet.create({   
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
        marginBottom: 20,
        marginTop: StatusBar.currentHeight,
    },
    title: {
    },
    text: {
        textAlign: 'justify',
        fontSize: 12,
        padding: 12,
    },
    box: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 30,
        backgroundColor: colors.white,
        borderRadius: 20,
    },
});