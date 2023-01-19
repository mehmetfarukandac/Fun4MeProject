import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

const InstallButton = ({ url, navigation }) => (
    <Button style={styles.installButton} size='small'
        onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate(url);
        }}
    >
        Open
    </Button>
);
export default InstallButton;

const styles = StyleSheet.create({
    installButton: {
        backgroundColor: '#2196F3',
        borderRadius: 10, 
    }
})