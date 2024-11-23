import { Text, View } from "react-native";

import translate from "@services/i18n";
import styles from '@styles/global.styles'

import {
    Header,
    ContainerHeader,
    ContainerBody,
    PainelContent,
} from '@components/index'

export default function About() {

    const textAbout = [
        translate('PAGE.ABOUT.PARAGRAPH.ONE'),
        translate('PAGE.ABOUT.PARAGRAPH.TWO'),
        translate('PAGE.ABOUT.PARAGRAPH.THREE'),
        translate('PAGE.ABOUT.PARAGRAPH.FOUR'),
        translate('PAGE.ABOUT.PARAGRAPH.FIVE'),
    ]

    return (
        <View style={styles.container}>
            <Header />
            <PainelContent
                title={`${translate('PAGE.ABOUT.TITLE')}`}
                textArray={textAbout}
                page="about"
            />

        </View>
    )
};