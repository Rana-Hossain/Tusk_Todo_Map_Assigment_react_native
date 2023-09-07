import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Tusk from './tusk';

const Todo = (props:any) => {

    const [data, setData] = useState([]);


    const getList = async () => {
        const url = "https://jsonplaceholder.typicode.com/todos";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getList();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.tusksWrapper} >
                <Text style={styles.sectionTitle} >Todo List</Text>
            </View>
            <ScrollView  >
                {
                    data.length ?
                        data.map((item) =>
                            
                            <TouchableOpacity onPress={() => props.navigation.navigate("TaskDetails",{val:(item.title)})} >
                                <Tusk text={item.title} />
                            </TouchableOpacity>
                        ) : (
                            <Text style={styles.sectionTitle} >No tasks available.</Text>
                        )
                }
            </ScrollView>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tusksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        color: 'black',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    

});

export default Todo;