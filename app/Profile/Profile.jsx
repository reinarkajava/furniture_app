import TabMenu from '@/components/TabMenu';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' }}
                style={styles.avatar}
            />
            <Text style={styles.name}>User</Text>
            <Text style={styles.email}>email@email.com</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TabMenu atProfile={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        
        width: '100%',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    email: {
        fontSize: 16,
        color: '#888',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#4F8EF7',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 24,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
