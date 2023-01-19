
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

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
        <ScrollView>
            {
                data?.map((dt, index) => (
                    <View key={index} style={{ borderBottomWidth: 4 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25, marginTop: 10 }}>{dt?.name}</Text>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: dt?.url,
                            }}
                        />
                    </View>
                ))
            }

        </ScrollView>
    );
};
export default PopularMemes;
const styles = StyleSheet.create({
    tinyLogo: {
        margin: 20,
        width: 390,
        height: 400,
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
});