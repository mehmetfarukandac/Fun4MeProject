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


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
const Randomdogimages = () => {

    const [data, setData] = useState({});
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://dog.ceo/api/breeds/image/random`,
        }).then((response) => {
            // console.log(response.data);
            setData(response.data);
        }).catch((error) => {
            alert(error.message);
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Text>{data.message}</Text>
        </View>
    );
};
export default Randomdogimages;
