import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
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
            console.log(response.data);
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
        <View>
            <Text>{data?.name}</Text>
            <Text>{data?.status}</Text>
            <Text>{data?.species}</Text>
            <Text>{data?.gender}</Text>
            <Text>{data?.image}</Text>
            <Text>{data?.location?.name}</Text>
            <Button onPress={decreaseOrder} title="-" />
            <Button onPress={increaseOrder} title="+" />
        </View>
    );
};
export default RickAndMorty;