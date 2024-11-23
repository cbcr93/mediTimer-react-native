import { StyleSheet, Dimensions } from 'react-native';

import { colors, variables } from '@themes/index';
import { fontScale } from '@services/dimensions';


export default StyleSheet.create({   
    container: {
      borderColor: colors.black,
      alignItems: 'center',
      paddingVertical: 11,
    },
    title:{
      width: "100%",
      backgroundColor: colors.oldGold,
    },
    input: {
      height: 40,
      width: '100%',
      margin: 12,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.gray[500],
      padding: 10,
      color: colors.gray[200],
      fontWeight: '700',
      fontSize: fontScale(12),
      lineHeight: fontScale(13),
      textAlign: 'left',
    },
});