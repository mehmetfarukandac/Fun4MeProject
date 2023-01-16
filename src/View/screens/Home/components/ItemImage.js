import { Avatar } from '@ui-kitten/components';
import React from 'react';

const ItemImage = (props) => (
    <Avatar
        {...props}
        style={[props.style, { tintColor: null }]}
        // size="large"
        source={
            props.element.url == "ageBasedOnName" ? require(`../../../../../assets/age.png`) :
                props.element.url == "dailyAstronomyPicture" ? require(`../../../../../assets/astronomy.jpg`) :
                    props.element.url == "activitySuggestions" ? require(`../../../../../assets/activity.jpg`) :
                        props.element.url == "randomdogimages" ? require(`../../../../../assets/dog.jpg`) :
                            props.element.url == "popularMemes" ? require(`../../../../../assets/meme.jpeg`) :
                                props.element.url == "Jokes" ? require(`../../../../../assets/joke.jpg`) :
                                    props.element.url == "rickAndMorty" && require(`../../../../../assets/ram.jpg`)

        }
    />
);
export default ItemImage;
