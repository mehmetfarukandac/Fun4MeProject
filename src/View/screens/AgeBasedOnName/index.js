import axios from 'axios';
import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import NameInput from './components/NameInput';
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
        <View>
            <NameInput name={name} setName={setName} nameFetchHandler={nameFetchHandler} />
            <Text>{data?.age}</Text>
            <Text>{data?.count}</Text>
            <Text>{data?.name}</Text>
            <Text>{data?.gender}</Text>
            <Text>{data?.probability}</Text>
        </View>
    );
};
export default AgeBasedOnName;
