import {
    View,
    Text,
} from 'react-native';
import { Feather } from "@expo/vector-icons";
import { colors } from '@themes/index';

import styles from './styles'
import translate from '@services/i18n';
import { Button } from '../Button';

interface Props {
    id?: string;
    time?: string[];
    title: string;
};

export const Card = ({ title, time }: Props) => {
    const stringTime = (t: string[]) => {
        let value = t.toString().replaceAll(',', ' - ');

        return value;
    };

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text
                style={styles.time}>{
                    time && `${time.length > 1 ?
                        translate('COMPONENTS.CARD.TEXT_TIMES') :
                        translate('COMPONENTS.CARD.TEXT_TIME')
                    }: ${stringTime(time)}`
                }
            </Text>
            <View style={styles.btns}>
                <Button
                    size={'small'}
                    label={translate('SHARED.EDIT')}
                />
                <Button
                    size={'small'}
                    label={
                        < Feather name="trash-2" size={12} color={colors.black} />
                    }
                />
            </View>
        </View>
    )
};