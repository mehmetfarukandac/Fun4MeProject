import { Text } from '@ui-kitten/components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{data.title}</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: data?.hdurl,
                    }}
                />
                <Text style={styles.explanation}>{data.explanation}</Text> 
            </View>
            <View style={styles.footerContainer}>
                <Text
                    style={[styles.footerControl, { fontWeight: 'bold' }]}
                    size='small'
                    status='basic'>
                    {data.date}
                </Text>
                <Text
                    style={[styles.footerControl, { textAlign: 'center' }]}
                    size='small'>
                    {'\u00A9'} {data.copyright}
                </Text>
            </View>
        </ScrollView>
    );
};
export default DailyAstronomyPicture;
const styles = StyleSheet.create({
    tinyLogo: {
        width: 400,
        height: 500,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 10,
        color: "#000"
    },
    explanation: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 50,
        color: "#000"
    },
    footerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        color: "#000"
    },
    footerControl: {
        marginHorizontal: 2,
        color: "#000",
    },
});