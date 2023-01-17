import { ApplicationProvider, Button, Card, Text } from '@ui-kitten/components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';

const Jokes = () => {

    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(false)
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
        <ApplicationProvider {...eva} theme={eva.light}>
            <Card style={styles.card} header={<Header data={data} />} footer={<Footer data={data} makeJoke={makeJoke} openDelivery={openDelivery} open={open} />}>
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
            </Card>
        </ApplicationProvider>
    );
};
export default Jokes;

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        {
            props.data?.setup && props.open == false && (
                <Button onPress={props.openDelivery} >Open Answer</Button>
            )
        }
        {
            props.open == true && (
                <Button onPress={props.makeJoke} >Make New Joke</Button>
            )
        }
        {
            props.data.type == "single" && (
                <Button onPress={props.makeJoke} >Make New Joke</Button>
            )
        }
        <Text style={{ marginTop: 50, textAlign: 'center' }}>Price: <Text style={{ fontWeight: 'bold' }}>I know it's a joke but all these jokes are free :Ddd</Text></Text>
    </View>
);

const Header = (props) => (
    <View {...props}>
        <Text style={styles.type} category='h6'>{props.data?.category}</Text>
    </View>
);

const styles = StyleSheet.create({
    activity: {
        fontSize: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000'
    },
    type: {
        fontSize: 15,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: '#000'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#000'
    },
    card: {
        margin: 5,
        borderRadius: 10,
        color: '#000'
    },
    footerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: '#000'
    },
    footerControl: {
        marginHorizontal: 2,
        color: '#000'
    },
});