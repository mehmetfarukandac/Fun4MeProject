import { Button } from '@ui-kitten/components';
import React from 'react';

const InstallButton = ({ url, navigation }) => (
    <Button size='small'
        onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate(url);
        }}
    >
        Open
    </Button>
);
export default InstallButton;
