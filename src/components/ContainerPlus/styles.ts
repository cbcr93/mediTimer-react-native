import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { colors, variables } from '@themes/index';
import { fontScale } from '@//services/dimensions';

export default StyleSheet.create({   
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
    },
    title: {
    },
    inputSmall: {
        width: '90%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray[200],
        padding: 15,
        color: colors.gray[500],
        fontWeight: '700',
        fontSize: fontScale(12),
        lineHeight: fontScale(13),
        textAlign: 'justify',
    },
    inputBig: {
        width: '90%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray[200],
        padding: 15,
        color: colors.gray[500],
        fontWeight: '700',
        fontSize: fontScale(12),
        lineHeight: fontScale(13),
        textAlign: 'justify',
    },
    text: {
        textAlign: 'justify',
        fontSize: 12,
        padding: 12,
    },
    box: {
        flex: 1,
        width: "100%",
        marginTop: 10,
        padding: 30,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
});