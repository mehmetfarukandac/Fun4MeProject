import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
const ActivitySuggestions = () => {

    const [data, setData] = useState({});
    useEffect(() => {
        findNewActivity()
    }, []);

    const findNewActivity = () => {
        axios({
            method: 'GET',
            url: `https://www.boredapi.com/api/activity`,
        }).then((response) => {
            // console.log(response.data);
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <View>
            <Text>{data.activity}</Text>
            <Text>{data.type}</Text>
            <Text>{data.price}</Text>
            <Button onPress={findNewActivity} title="Change Activity" />
        </View>
    );
};
export default ActivitySuggestions;
