import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
const DailyAstronomyPicture = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://go-apod.herokuapp.com/apod`,
        }).then((response) => {
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }, []);

    return (
        <View>
            <Text>{data.title}</Text>
            <Text>{data.hdurl}</Text>
            <Text>{data.explanation}</Text>
            <Text>{data.date}</Text>
            <Text>{data.copyright}</Text>
        </View>
    );
};
export default DailyAstronomyPicture;
