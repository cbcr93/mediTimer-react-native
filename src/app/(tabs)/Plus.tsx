import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View
} from "react-native";

import styles from '@styles/global.styles'
import translate from "@services/i18n";

import {
    Header,
    ContainerHeader,
    ContainerPlus,
    PainelContent,
} from '@components/index'

export default function Plus() {
    return (
        <View style={styles.container}>
            <Header />

            <PainelContent
                page="plus"
                title={`${translate('PAGE.PLUS.TITLE')}`}
            />

        </View>
    )
};