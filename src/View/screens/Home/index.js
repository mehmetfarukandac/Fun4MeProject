import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import InstallButton from './components/InstallButton';
import ItemImage from './components/ItemImage';
import IpAdress from './components/IpAdress';
import PublicHolidays from './components/PublicHolidays';

const listElement = [
    {
        name: "Age Based On Name",
        url: "ageBasedOnName",
        description: "Write a name and let us to gues information",
        imageUrl: "age"
    },
    {
        name: "Daily Astronomy Picture",
        url: "dailyAstronomyPicture",
        description: "Daily Astronomy Picture",
        imageUrl: "age"
    },
    {
        name: "Activity Suggestions",
        url: "activitySuggestions",
        description: "Did you bored? Let us to give you activity suggestions",
        imageUrl: "age"
    },
    {
        name: "Random dog Images",
        url: "randomdogimages",
        description: "Do you love Dogs? :) Let me find dogs pict for you",
        imageUrl: "age"
    },
    {
        name: "Popular Memes",
        url: "popularMemes",
        description: "Popular Memes",
        imageUrl: "age"
    },
    {
        name: "Jokes",
        url: "Jokes",
        description: "Let me show you my ability to joke :Ddd",
        imageUrl: "age"
    },
    {
        name: "Rick And Morty",
        url: "rickAndMorty",
        description: "Rick and Morty",
        imageUrl: "age"
    },
]

const Home = () => {
    const navigation = useNavigation();

    return (
        <>
            <IpAdress />
            <ScrollView>
            {
                listElement?.map(element => (
                    <ListItem
                        title={element?.name}
                        description={element?.description}
                        accessoryLeft={<ItemImage element={element} />}
                        accessoryRight={<InstallButton url={element?.url} navigation={navigation} />}
                    />
                ))
            }
                <PublicHolidays />
            </ScrollView>
            {/* <Layout style={styles.container} level='1'>

                <Card style={styles.card} status='primary'>
                    <Text>Primary</Text>
                </Card>

                <Card style={styles.card} status='success'>
                    <Text>Success</Text>
                </Card>

                <Card style={styles.card} status='info'>
                    <Text>Info</Text>
                </Card>

                <Card style={styles.card} status='warning'>
                    <Text>Warning</Text>
                </Card>

                <Card style={styles.card} status='danger'>
                    <Text>Danger</Text>
                </Card>

                <Card style={styles.card} status='basic'>
                    <Text>Basic</Text>
                </Card>

            </Layout> 
            <Card>
                <Text>
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                </Text>
            </Card> */}

        </>
    );
};
export default Home;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderStyle: "none"
    },
    card: {
        margin: 2,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: "none"
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});
