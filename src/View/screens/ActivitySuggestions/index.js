import { Button, Card, Text } from '@ui-kitten/components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';


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
        <Card style={styles.card} header={<Header type={data.type} />} footer={<Footer findNewActivity={findNewActivity} />}>
            <Text style={styles.activity}>
                {data.activity}
            </Text>
            <Text style={styles.price}>Price: {data.price}</Text>
        </Card>
    );
};
export default ActivitySuggestions;

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Button
            style={styles.footerControl}
            size='small'
            onPress={props.findNewActivity}
            status='basic'>
            Change Activity
        </Button>
    </View>
);

const Header = (props) => (
    <View {...props}>
        <Text style={styles.type} category='h6'>{props.type}</Text>
    </View>
);

const styles = StyleSheet.create({
    activity: {
        fontSize: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: 20
    },
    type: {
        fontSize: 40,
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: "#2196F3",
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});