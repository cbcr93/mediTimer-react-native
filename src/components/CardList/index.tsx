import {
    View,
    VirtualizedList,
    Text,
} from 'react-native';
import {
    SafeAreaView,
    SafeAreaProvider
} from 'react-native-safe-area-context';

import styles from './styles'
import { Card } from '../Card';

interface Props {
    text?: string;
}

type ItemData = {
    id: string;
    title: string;
    time: string[]
};

export const CardList = ({ text }: Props) => {
    const getItem = (_data: unknown, index: number): ItemData => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`,
        time: [
            '20:00',
            '8:00',
        ]
    });

    const getItemCount = (_data: unknown) => 50;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
                <VirtualizedList
                    initialNumToRender={4}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            time={item.time}
                        />
                    }
                    keyExtractor={item => item.id}
                    getItemCount={getItemCount}
                    getItem={getItem}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
};