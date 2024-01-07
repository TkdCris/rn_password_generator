import { View, Text, StyleSheet, Pressable } from 'react-native'

export const PasswordItem = ({password, removePassword}) => {
    return (
        <Pressable style={styles.container} onLongPress={removePassword}>
            <Text style={styles.text}>{password}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5e5e9e',
        color: '#fff',
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
    },
    text: {
        color: "#ffd",
    }

})