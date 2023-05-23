import { View, Text ,StyleSheet,ScrollView,Image,TouchableOpacity,onPress} from 'react-native'
import React from 'react'

const BestMatches = () => {
    return (
        <View>
            <View style={styles.container_heading}>
                <Text style={styles.text}>Best Matches</Text>
            </View>

            <Text style={styles.heading}> Best Matches </Text>


            <ScrollView style={styles.container_scroll}>
            <View style={styles.container_card}>
                <Image source={require("../../assets/card1.png")} style={styles.image_card} />
                <Text style={styles.title_card}>DY Hall</Text>
                <TouchableOpacity style={styles.button_card} onPress={onPress}>
                    <Text style={styles.buttonText_card}>Det</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container_card}>
                <Image source={require("../../assets/card1.png")} style={styles.image_card} />
                <Text style={styles.title_card}>DY Hall</Text>
                <TouchableOpacity style={styles.button_card} onPress={onPress}>
                    <Text style={styles.buttonText_card}>Det</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container_card}>
                <Image source={require("../../assets/card1.png")} style={styles.image_card} />
                <Text style={styles.title_card}>DY Hall</Text>
                <TouchableOpacity style={styles.button_card} onPress={onPress}>
                    <Text style={styles.buttonText_card}>Det</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container_card}>
                <Image source={require("../../assets/card1.png")} style={styles.image_card} />
                <Text style={styles.title_card}>DY Hall</Text>
                <TouchableOpacity style={styles.button_card} onPress={onPress}>
                    <Text style={styles.buttonText_card}>Det</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container_card}>
                <Image source={require("../../assets/card1.png")} style={styles.image_card} />
                <Text style={styles.title_card}>DY Hall</Text>
                <TouchableOpacity style={styles.button_card} onPress={onPress}>
                    <Text style={styles.buttonText_card}>Det</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container_card}>
                <Image source={require("../../assets/card1.png")} style={styles.image_card} />
                <Text style={styles.title_card}>DY Hall</Text>
                <TouchableOpacity style={styles.button_card} onPress={onPress}>
                    <Text style={styles.buttonText_card}>Det</Text>
                </TouchableOpacity>
            </View>
</ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //right:0,

        width: '80%',
        // backgroundColor: "#FCE1CE"

    },
    heading:{
        fontSize:19,
        fontWeight:'bold',
        paddingBottom:5,
        paddingTop:140,
        flex:1,
        justifyContent:'flex-start'
    },
    text: {
        backgroundColor: '#1B2F4D',
        color: 'white',
        paddingLeft: 100,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 5,
        paddingRight: 30,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'KaushanScript',
        marginLeft:60

    },
    container_heading: {
        
        position: 'absolute',
        top: 0,
        right: 0,
        paddingTop: 50,
        width: '80%',
        backgroundColor: "#FCE1CE"

    },
    container_card: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'left',
        backgroundColor: '#EAC5B5',
        borderRadius: 7,
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 5,
        paddingLeft: 0,
        with: '100%',
        marginTop:13,
        marginBottom:13
        

    },
    image_card: {
        width: 65,
        height: 75,
        resizeMode: 'cover',
        borderRadius: 8,
        marginRight: 16,
        //alignSelf: 'flex-start',
        marginLeft: 13,
        paddingBottom: 40


    },
    title_card: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingRight: 125
    },
    button_card: {
        backgroundColor: '#5D6B80',
        padding: 10,
        width: 78,
        borderRadius: 5,
        alignItems: 'center',
        //marginVertical: 10,
    },
    buttonText_card: {
        color: 'white',
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container_scroll:{
        //flex: 1,
        marginTop:20
    }
}
)
export default BestMatches