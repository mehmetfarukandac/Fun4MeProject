// import React from 'react';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// const Randomdogimages = () => {
//     return (
//         <View>
//             <Text>Randomdogimages</Text>
//         </View>
//     );
// };
// export default Randomdogimages;


import { Button, Card } from '@ui-kitten/components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
const Randomdogimages = () => {

    const [data, setData] = useState({});
    useEffect(() => {
        newDog()
    }, []);

    const newDog = () => {
        axios({
            method: 'GET',
            url: `https://dog.ceo/api/breeds/image/random`,
        }).then((response) => {
            // console.log(response.data);
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <View>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: data?.message,
                }}
            />
            <Button onPress={newDog}>Change Photo</Button>
        </View>
    );
};
export default Randomdogimages;
const styles = StyleSheet.create({
    tinyLogo: {
        margin: 20,
        width: 390,
        height: 400,
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
});