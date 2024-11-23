import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { colors, variables } from '@themes/index';

export default StyleSheet.create({   
    container: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
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
    },
});