import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Avatar, Button, Card, Text } from '@ui-kitten/components';

const RickAndMorty = () => {

    const [data, setData] = useState({});
    const [order, setOrder] = useState(1);


    useEffect(() => {
        getCharacter()
    }, [order]);

    const getCharacter = () => {
        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/character/${order}`,
        }).then((response) => {
            // console.log(response.data);
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }

    const increaseOrder = () => {
        !(order >= 826) && setOrder(order + 1)
    }
    const decreaseOrder = () => {
        !(order <= 1) && setOrder(order - 1)
    }

    return (

        <ApplicationProvider {...eva} theme={eva.light}>
            <Card style={{ marginTop: 50, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                <View style={styles.cardContent}>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: data?.image,
                            }}
                        />
                    </View>
                    <View style={{ backgroundColor: "#9e9e9e", width: 250 }}>
                        <Text style={styles.name}>{data?.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar style={{ width: 15, height: 15 }} source={data?.status == "Alive" ? require('../../../../assets/greenlight.png') : require('../../../../assets/redlight.png')} /><Text style={styles.status}>{data?.status}</Text>
                        </View>
                        <Text style={styles.gender}>{data?.gender}</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginTop: 4, fontWeight: 'bold' }}>Last known location:</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{data?.location?.name}</Text>
                        </View>
                    </View>
                </View>
            </Card>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
                <Button style={{ width: 300, borderStyle: 'dotted', marginBottom: 5, backgroundColor: '#65647C' }} onPress={decreaseOrder} >-</Button>
                <Button style={{ width: 300, borderStyle: 'dotted', backgroundColor: '#65647C' }} onPress={increaseOrder} >+</Button>
            </View>
        </ApplicationProvider >

    );
};
export default RickAndMorty;
const styles = StyleSheet.create({
    cardContent: {
        flexDirection: 'row',
        // justifyContent: 'space-bett',
        // margin: 5,
        borderRadius: 10,
        color: '#000',
        alignSelf: 'center'
    },
    tinyLogo: {
        width: 130,
        height: 200,
        resizeMode: 'stretch',
    },
    gender: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold'
    },
    name: {
        fontSize: 25,
        color: "#fff",
        fontWeight: 'bold'
    },
    status: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold'
    },
});