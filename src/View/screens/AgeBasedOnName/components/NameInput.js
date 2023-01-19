import { TextInput } from "react-native";

const NameInput = ({ setName, nameFetchHandler, name }) => {
    return (
        <TextInput
            onChangeText={text => setName(text)}
            placeholder='Write a name'
            placeholderTextColor={'#000'}
            onSubmitEditing={nameFetchHandler}
            value={name}
            style={{
                borderBottomColor: '#2196F3',
                borderRightColor: '#C8E6C9',
                backgroundColor: '#fff',
                borderRadius: 15,
                paddingVertical: 20,
                marginHorizontal: 10,
                fontSize: 45,
                textAlign: 'center',
                borderBottomWidth: 8,
                borderRightWidth: 8,
                borderRightWidth: 8,
                marginVertical: 20,
            }}
        />
    );
};
export default NameInput;
