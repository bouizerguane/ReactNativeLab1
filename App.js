import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import MainCard from './components/MainCard';

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
                <View style={styles.container}>
                    {/* Header en haut */}
                    <AppHeader />

                    {/* Zone de contenu centrale avec flex: 1 */}
                    <View style={styles.content}>
                        <MainCard />
                    </View>

                    {/* Footer en bas */}
                    <AppFooter appName="MonApp" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#495E57', // Vert foncé
    },
    container: {
        flex: 1,
        backgroundColor: '#495E57', // Vert foncé
    },
    content: {
        flex: 1, // Cette propriété permet au contenu de prendre tout l'espace disponible
        justifyContent: 'center', // Centre verticalement
        alignItems: 'center', // Centre horizontalement
    },
});
