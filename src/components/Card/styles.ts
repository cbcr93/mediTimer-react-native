import { StyleSheet, StatusBar } from 'react-native';
import { colors, variables } from '@themes/index';

export default StyleSheet.create({   
    container: {
        flex: 1,
        width: '100%',
        marginTop: StatusBar.currentHeight,
      },
      item: {
        backgroundColor: colors.oldGold,
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 30,
        padding: 20,
      },
      title: {
        fontSize: 32,
      },
      time: {
      },
      btns: {
        marginTop: 10,
        width: '80%',
        gap: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
      }
});