import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const TaskDetails = (props:any) => {


    const data = props.route.params.val;
    // console.warn(props.route.params.val);

    const Del = ()=>{
        console.warn("This feture currently unavailable");
    }

    return (
        <View style={styles.container}>
            <View style={styles.tusksWrapper} >
                <Text style={styles.sectionTitle} >Task Details</Text>
                <Button onPress={Del} title= 'Delete Task'  />
            </View>
            <View style={styles.item}>
                <Text style={{ color: 'black', fontSize: 20 }}> {data}</Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tusksWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
        color: 'black',
        marginBottom:30,
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textTransform:'capitalize',
    },
    item: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
    },


});

export default TaskDetails;