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
                <Text style={{color: "#fff", textAlign: "center" }} category='h6'>Milli Bayramlar</Text>
            </Card>
            {
                data?.map(dt => (
                    <Card style={styles.card} footer={<Footer data={dt} />}>
                        <Text style={{ color: "#fff" }} category='h6'>{dt.localName}</Text>
                        <Text style={{ color: "#fff" }} category='s1'>{dt.name}</Text>
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
        color: "#fff",
        marginTop: 2
    },
    cardHoliday: {
        flex: 1,
        color: "#fff",
        marginTop: 2
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: "#fff"
    },
    footerControl: {
        marginHorizontal: 2,
        color: "#fff"
    },
});