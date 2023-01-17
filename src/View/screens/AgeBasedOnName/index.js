import { ApplicationProvider, Avatar, Card, Text } from '@ui-kitten/components';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NameInput from './components/NameInput';
import * as eva from '@eva-design/eva';


const AgeBasedOnName = () => {

    const [name, setName] = useState();
    const [data, setData] = useState({
        age: "",
        count: "",
        name: "",
        gender: "",
        probability: "",
    });

    const nameFetchHandler = useCallback(async () => {
        axios({
            method: 'GET',
            url: `https://api.agify.io?name=${name}`,
        }).then((res) => {
            axios({
                method: 'GET',
                url: `https://api.genderize.io?name=${name}`,
            }).then((response) => {
                setData({
                    gender: response.data.gender,
                    probability: response.data.probability,
                    age: res.data.age,
                    count: res.data.count,
                    name: res.data.name
                });
            }).catch((error) => {
                alert(error.message);
            });
        }).catch((error) => {
            alert(error.message);
        });

    }, [name])

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View>
                <NameInput name={name} setName={setName} nameFetchHandler={nameFetchHandler} />
                {
                    data.age && (
                        <Card style={styles.card}>
                            <View>
                                <Avatar style={styles.avatar} shape='square' source={data?.gender == "male" ? require('../../../../assets/male.jpg') : require('../../../../assets/female.png')} />
                            </View>
                            <View>
                                <Text style={styles.name}>{data?.name}</Text>
                                <Text style={styles.count} >The average age of this name is <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{data?.age}</Text></Text>
                            </View>
                            <View style={styles.countGender}>
                                <Text style={styles.count} category='s1'>Frequency of use: <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{data?.count}</Text></Text>
                                <Text style={styles.gender} category='s1'>Gender: <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{data?.gender}</Text></Text>
                            </View>
                            <View>
                                <Text style={styles.count} >Probability <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{data?.probability}</Text></Text>
                            </View>
                        </Card>
                    )
                }
            </View>
        </ApplicationProvider>
    );
};
export default AgeBasedOnName;
const styles = StyleSheet.create({
    avatar: {
        margin: 8,
        alignSelf: 'center',
        width: 70,
        height: 70
    },
    countGender: {
        flexDirection: 'column',
        color: "#fff",
        alignSelf: 'center'
    },
    count: {
        fontSize: 15,
        marginHorizontal: 2,
        textAlign: 'center'
    },
    gender: {
        fontSize: 15,
        marginHorizontal: 2,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#13005A',
        textTransform: 'capitalize'
    },
    card: {
        borderRadius: 50,
        margin: 15,
        backgroundColor:"#fffff9"
    }
});