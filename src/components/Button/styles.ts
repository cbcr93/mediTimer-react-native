import { StyleSheet, Dimensions } from 'react-native';

import { colors, variables } from '@themes/index';
import { fontScale } from '@services/dimensions';


export default StyleSheet.create({   
    container: {
    },
    containerBig: {
        borderColor: colors.black,
        alignItems: 'center',
        paddingVertical: 11,
      },
      containerSmall: {
        borderColor: colors.black,
        alignItems: 'center',
        paddingVertical: 6,
      },
      primaryContainer: {
        borderWidth: 1,
        borderRadius: 10,
      },
      secondaryContainer: {
        borderWidth: 0,
        borderRadius: 10,
      },
      label: {
        paddingRight: 10,
        paddingLeft: 10,
        color: colors.black,
        fontWeight: '700',
        fontSize: fontScale(12),
        lineHeight: fontScale(13),
        textAlign: 'center',
      },
      labelSmall: {
        fontSize: fontScale(9),
      },
});