import { StyleSheet, StatusBar } from 'react-native';
import { colors, variables } from '@themes/index';

export default StyleSheet.create({   
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        borderTopColor: colors.white,
        borderTopWidth: 2,
      },
});