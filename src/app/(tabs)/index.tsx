import { Text, View } from "react-native";

import styles from '@styles/global.styles'

import {
    Header,
    ContainerHeader,
    PainelContent,
} from '@components/index'

import translate from '@services/i18n';
import { CardList } from "@components/CardList";

export default function Index() {
    return (
        <View style={styles.container}>
            <Header />
            <PainelContent
                page='home'
                title={`${translate('PAGE.HOME.TEXT')}`}
            />
        </View>
    )
};