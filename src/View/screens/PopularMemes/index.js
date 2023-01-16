
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const PopularMemes = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.imgflip.com/get_memes`,
        }).then((response) => {
            // console.log(JSON.stringify(response.data.data.memes));
            setData(response?.data.data.memes);
        }).catch((error) => {
            alert(error.message);
        });
    }, []);

    return (
        <View>
            {
                data?.map(dt => (
                    <View>
                        <Text>{dt?.name}</Text>
                        <Text>{dt?.url}</Text>
                    </View>
                ))
            }

        </View>
    );
};
export default PopularMemes;