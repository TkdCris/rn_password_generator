import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { PasswordItem } from '../../components/passwordItem';

import useStorage from '../../hooks/useStorage';

export function Passwords() {
    const [listPass, setListPass] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        const loadPasswords = async () => {
            const passwords = await getItem('tkdcris-passwords');
            setListPass(passwords);
        };

        loadPasswords();
    }, [focused])

    const handleDeletePassword = async (password) => {
        const passwords = await removeItem('tkdcris-passwords', password);
        setListPass(passwords);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={styles.list} 
                    data={listPass}
                    keyExtractor={item => String(item)} 
                    renderItem={({ item }) => <PasswordItem password={item} removePassword={() => handleDeletePassword(item)}/> }
                    />
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

        backgroundColor: '#rgba(1,200,1,0.2)',
    },
    list: {
        flex: 1,
        paddingTop: 14,
    }
})