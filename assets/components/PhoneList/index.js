import React from "react";
import {View, Text, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import phones from "./phones";
import PhoneItem from "../PhoneItem";


const Carlist = () => {
    return (
        <View style={styles.container} >
             <FlatList 
             data={phones}
            renderItem={({item})=> <PhoneItem phone={item} > </PhoneItem> }
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
             ></FlatList>
        </View>
    );
};

export default Carlist;