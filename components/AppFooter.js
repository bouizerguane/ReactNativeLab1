import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppFooter = ({ appName = 'MonApp' }) => {
    const currentYear = new Date().getFullYear();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {appName} - All rights reserved, {currentYear}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: '#555',
    },
});

export default AppFooter;
