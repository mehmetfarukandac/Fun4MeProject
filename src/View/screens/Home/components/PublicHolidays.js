import { Button, Card, Layout } from '@ui-kitten/components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Text
            style={styles.footerControl}
            size='small'
            status='basic'>
            {props?.data.date}
        </Text>
        <Text
            style={styles.footerControl}
            size='small'>
            {props?.data.countryCode}
        </Text>
    </View>
);


const PublicHolidays = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://date.nager.at/api/v2/publicholidays/2020/TR`,
        }).then((response) => {
            // console.log(response.data[0]);
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }, []);
    return (
        <React.Fragment>
            <Card style={styles.cardHoliday}>
                <Text style={{ color: "#fff", textAlign: "center", fontWeight: 'bold', fontSize: 21, }} category='h6'>Milli Bayramlar</Text>
            </Card>
            {
                data?.map((dt, index) => (
                    <Card key={index} style={styles.card} footer={<Footer data={dt} />}>
                        <Text style={{ color: "#000", fontWeight: 'bold' }} category='h6'>{dt.localName}</Text>
                        <Text style={{ color: "#000", fontWeight: 'bold' }} category='s1'>{dt.name}</Text>
                    </Card>
                ))
            }


        </React.Fragment>
    );
};
export default PublicHolidays;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: "#fff"
    },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        borderBottomWidth: 8,
        borderBottomColor: '#2196F3',
        borderColor:'#C8E6C9',
        borderWidth:3
    },
    cardHoliday: {
        flex: 1,
        color: "#fff",
        margin: 2,
        backgroundColor: "#2196F3"
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: "#fff",
        borderTopWidth:2,
        borderTopColor:'#C8E6C9'
    },
    footerControl: {
        marginHorizontal: 2,
        color: "#2196F3",
        fontWeight:'bold'
    },
});