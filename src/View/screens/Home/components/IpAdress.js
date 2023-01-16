import axios from 'axios';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
    Card,
    Text
} from '@ui-kitten/components';
const IpAdress = () => {

    const [data, setData] = useState();
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.ipify.org/?format=json`,
        }).then((response) => {
            console.log(JSON.stringify(response.data));
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }, []);

    return (
        <Card style={styles.card} status='warning'>
            <Text style={{ textAlign: 'center' }}>{data?.ip}</Text>
        </Card>
    );
};
export default IpAdress;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        marginBottom: 2,

    },
});