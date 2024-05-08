import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import houses from '../constants/houses';
import news from '../constants/news';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  Input,
  Icon,
  SearchIcon,
  Button,
  ArrowUpIcon,
  InfoOutlineIcon,
  ScrollView,
} from 'native-base';
import colors from '../constants/colors';
import Carousel from 'react-native-snap-carousel';

const Houses = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSlide, setActiveSlide] = React.useState(0);
  const handleGender = value => {
    setSelectedCategory(value);
  };
  const images = [
    // make a list of random images from picsum
    {uri: 'https://picsum.photos/id/1/200/300'},
    {uri: 'https://picsum.photos/id/2/200/300'},
    {uri: 'https://picsum.photos/id/3/200/300'},
    {uri: 'https://picsum.photos/id/3/200/300'},
  ];

  const headlines = [
    {
      title:
        'The city is expacting a million dollar donation from the UAE government.',
    },
    {
      // make a headline about technology
      title:
        'The technology sector is expanding the fintech industry through market injections.',
    },
    {
      title: 'Fashion is the new trend in the city.',
    },
    {
      title:
        'Religion comes back after dozens fled the capital in search of free will',
    },
  ];

  const renderItem = ({item, index}) => {
    // concat house.image and house.interiors

    return (
      <Box
        position={'relative'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginLeft: -10,
        }}>
        <Box
          position={'absolute'}
          backgroundColor="#000"
          opacity={0.3}
          zIndex={1}
          top="0"
          right={0}
          bottom={0}
          borderRadius={20}
          height={height * 0.35}
          left={0}></Box>
        <Box
          padding={3}
          display={'flex'}
          justifyContent={'space-between'}
          position={'absolute'}
          zIndex={2}
          top="0"
          right={0}
          bottom={0}
          borderRadius={20}
          height={height * 0.35}
          left={0}>
          <Text style={{color: '#fff', zIndex: 2, fontWeight: '600'}}>
            12 Jan 2023
          </Text>
          <Box>
            <Text
              style={{
                color: '#fff',
                zIndex: 2,
                fontSize: 18,
                fontWeight: '700',
                width: '80%',
              }}>
              {/* display the headlines one by one */}
              {headlines[index].title}
            </Text>
          </Box>
        </Box>
        <Box>
          <Image
            source={item}
            alt="house"
            resizeMode="cover"
            style={{
              width: '100%',
              height: height * 0.35,
              borderRadius: 20,
              marginBottom: 20,
            }}
          />
        </Box>
      </Box>
    );
  };
  const renderPagination = () => {
    const dots = [];
    for (let i = 0; i < images?.length; i++) {
      const dotColor = activeSlide === i ? '#000' : 'grey';
      dots.push(
        <View key={i} style={[styles.dot, {backgroundColor: dotColor}]} />,
      );
    }
    return <View style={styles.paginationContainer}>{dots}</View>;
  };
  const categories = [
    {value: 'All'},
    {value: 'Politics'},
    {value: 'Sports'},
    {value: 'Technology'},
    {value: 'Fashion'},
    {value: 'Food'},
    {value: 'Religion'},
    {value: 'Weather'},
  ];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    item: {
      width: screenWidth - 60,
      height: height - 350,
      marginTop: 50,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 30,
    },
    inactiveDot: {
      backgroundColor: colors.gray,
    },
    activeDot: {
      backgroundColor: colors.dark,
    },
    container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slideContainer: {
      width: 'auto',
      height: 400,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgrey',
    },
    paginationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    image: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 2,
      marginBottom: 10,
    },
  });
  return (
    <SafeAreaView>
      <ScrollView
        marginX={'3'}
        // remove scrollbar
        showsVerticalScrollIndicator={false}>
        {/* loop houses */}
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
          {/* make a search box */}
          <Input
            leftElement={<SearchIcon size={5} marginLeft={2} />}
            bg={'gray.200'}
            margin="2"
            marginTop={8}
            width={'100%'}
            borderRadius={'10'}
            placeholder="Search for interesting news"
            variant="filled"
          />
        </Box>
        <ScrollView
          display={'flex'}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            marginTop: 10,
            alignItems: 'center',
          }}>
          {categories.map(item => {
            return (
              <View
                key={item.value}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  // width: '25%',
                  marginBottom: 10,
                }}>
                <Pressable
                  style={{
                    width: 80,
                    height: 30,
                    borderRadius: 10,
                    marginRight: 10,
                    //   if item is selected, change the background colo
                    backgroundColor:
                      item.value === selectedCategory
                        ? '#2e2f91'
                        : colors.light,

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => handleGender(item.value)}>
                  <Text
                    style={{
                      color:
                        item.value !== selectedCategory
                          ? colors.dark
                          : colors.white,
                    }}>
                    {item.value}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
        <Carousel
          layout="default"
          data={images}
          renderItem={renderItem}
          sliderWidth={screenWidth - 20}
          itemWidth={screenWidth - 40}
          keyExtractor={(item, index) => index.toString()}
          onSnapToItem={index => setActiveSlide(index)}
        />
        {renderPagination()}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Box>
            <Text style={{fontSize: 16, fontWeight: '900', marginVertical: 10}}>
              Suggestions
            </Text>
          </Box>
          {news.map(house => (
            <Box
              display={'flex'}
              flexDirection="row"
              borderColor={'gray.300'}
              marginBottom={'10px'}
              borderWidth="1"
              key={house.id}
              style={{
                border: '1px solid #222',
                shadowColor: '#000',
                borderRadius: 10,
                width: '45%',
              }}>
              <Image
                source={{uri: house.image}}
                alt="house"
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
              />
              <Box
                marginLeft={5}
                display="flex"
                justifyContent={'space-between'}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('HouseDetails', {house: house})
                  }>
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                    {house.headline}
                  </Text>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'light',
                        marginTop: 3,
                      }}>
                      {/* cut the description and put ... */}
                      {house.article.substring(0, 50)}...
                      {/* {house.article} */}
                    </Text>
                  </Box>
                </Pressable>

                <Text style={{fontSize: 10, textAlign: 'right'}}>
                  {house.date}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Houses;
