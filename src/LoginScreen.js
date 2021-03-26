import React from 'react'
import { View, Text, Image, StatusBar, StyleSheet, TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
export default function LoginScreen({ navigation }) {
    const [email, onemailchange] = React.useState('reactnative@test.com');
    const [password, onpasswordchange] = React.useState('Test@1234');


    const buttonpress = () => {
        // alert(Base_URL)
        axios.get('https://empti.org/empti/public/api/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                
                alert('Res .....' + JSON.stringify(response))
                navigation.navigate('HomeScreen', {
                    Email: email,
                });

            }).catch(function (error) {
                console.log('Error .....' + error)
            }).finally(function () {
                console.log('Finaly .....')
            });

    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#eee' translucent={false} />

            <View style={{ flex: 1, backgroundColor: '#eee', paddingTop: 150 }}>

                <Text style={{ fontSize: 34, fontWeight: 'bold', textAlign: 'left', marginLeft: 25 }}>SignIn</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'left', marginLeft: 25 }}>Please enter the email and password</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onemailchange(text)}
                    value={email}
                    placeholder="Email"
                    style={{ alignSelf: 'center', height: 50, width: '90%', backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#000', marginTop: 20, paddingHorizontal: 10 }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onpasswordchange(text)}
                    secureTextEntry={true}
                    value={password}
                    placeholder="Password"
                    style={{ alignSelf: 'center', height: 50, width: '90%', backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#000', marginTop: 20, paddingHorizontal: 10 }}
                />
                <TouchableOpacity style={{ width: '90%', alignSelf: 'center', marginTop: 20, backgroundColor: '#eee', paddingVertical: 10, borderRadius: 5, borderColor: '#000', borderWidth: 1 }} onPress={buttonpress}>
                    <Text style={styles.panelButtonTitle}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },

    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#eee',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});