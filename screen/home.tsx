import { Text, View, Button } from 'react-native';


const Home = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={{marginBottom:30}}>
                <Button title='Todo List' onPress={() => props.navigation.navigate("Todo")} />

            </View>
            <Button title='Map' onPress={() => props.navigation.navigate("Map")} />
        </View>
    )
}

export default Home;