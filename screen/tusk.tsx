import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Tusk = (props: any) => {
    return (
        <View style={styles.item}>
            <View >

                <Text numberOfLines={1} style={{ fontSize: 20, color: 'black' }}>{props.text}</Text>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
    },


})
export default Tusk;