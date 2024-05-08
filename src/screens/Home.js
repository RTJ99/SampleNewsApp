import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StatusBar} from 'native-base';

const Home = ({navigation}) => {
  const height = Dimensions.get('window').height;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: height,
      }}>
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <StatusBar translucent backgroundColor="transparent" />

        <Image
          source={require('../../assets/newspapers.jpeg')}
          alt="house"
          resizeMode="cover"
          style={{
            width: '100%',
            height: height * 0.65,
            borderBottomLeftRadius: 50,
          }}
        />
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '700',
              marginTop: 10,
              paddingHorizontal: 40,
              margin: 'auto',
              color: '#2e2f91',
              textAlign: 'center',
            }}>
            Stories from the world over to your doorstep
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'light',
              marginTop: 20,
              paddingHorizontal: 45,
              color: 'gray',
              textAlign: 'center',
            }}>
            The best place to read more of the current affairs in the comfort of
            your home.
          </Text>

          {/* make a button */}

          <Button
            onPress={() => navigation.navigate('Houses')}
            style={{
              marginTop: 30,
              marginHorizontal: 20,
              backgroundColor: '#2e2f91',
              borderRadius: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Get Started</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Home;
