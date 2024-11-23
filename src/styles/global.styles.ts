import { StyleSheet, Dimensions } from 'react-native';
import { colors, variables } from '@themes/index';

export default StyleSheet.create({   
    container: {
        backgroundColor: colors.gray[800],
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 0,
    },
    text: {
        color: colors.oldGold,
    },
});