import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Bienvenue !</Text>
            <Text style={styles.description}>
                Ceci est un composant de type "Card" réutilisable. Il présente un fond
                blanc avec des coins arrondis et une ombre légère pour créer un effet
                de profondeur. Ce composant peut être utilisé pour afficher différents
                types de contenu dans votre application React Native.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 24,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Pour Android
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        textAlign: 'center',
    },
});

export default MainCard;
