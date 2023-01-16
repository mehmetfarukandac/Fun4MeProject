import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const Jokes = () => {

    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    useEffect(() => {
        makeJoke()
    }, []);

    const makeJoke = () => {
        setOpen(false)
        axios({
            method: 'GET',
            url: `https://v2.jokeapi.dev/joke/Any?safe-mode`,
        }).then((response) => {
            console.log(response.data);
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }

    const openDelivery = () => {
        setOpen(true)
    }

    return (
        <View>
            <Text>{data?.category}</Text>
            <Text>{data?.type}</Text>
            {
                data.type == "twopart" ? (
                    <Text>{data?.setup}</Text>
                ) : (
                    <Text>{data?.joke}</Text>
                )
            }

            {
                data?.setup && open == true && (
                    <Text>{data?.delivery}</Text>
                )
            }
            {
                data?.setup && open == false && (
                    <Button title="Open Delivery" onPress={openDelivery} />
                )
            }
            {
                open == true && (
                    <Button title="Make New Joke" onPress={makeJoke} />
                )
            }
            {
                data.type == "single" && (
                    <Button title="Make New Joke" onPress={makeJoke} />
                )
            }
        </View>
    );
};
export default Jokes;