import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../AppInner';
import {Button, TextInput} from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Item} from '../api/item';

function ItemModify() {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [expDate, setExpDate] = useState(new Date());
  const [expOpen, setExpOpen] = useState(false);
  const [regDate, setRegDate] = useState(new Date());
  const [regOpen, setRegOpen] = useState(false);
  const propsItem = route.params as Item;
  const [item, setItem] = useState(propsItem);
  return (
    <View>
      <ScrollView>
        <View style={Style.imageBox}>
          <Image style={Style.image} source={require('../assets/close.png')} />
        </View>
        <View style={Style.content}>
          <Text style={Style.title}>제품명 </Text>
          <TextInput
            activeUnderlineColor={'#0094FF'}
            value={item.name}
            style={Style.description}
          />
        </View>
        <View style={Style.content}>
          <Text style={Style.title}>바구니 </Text>
          <TextInput
            activeUnderlineColor={'#0094FF'}
            value={item.basketName}
            style={Style.description}
          />
        </View>
        <View style={Style.content}>
          <Text style={Style.title}>카테고리 </Text>
          <TextInput
            activeUnderlineColor={'#0094FF'}
            style={Style.description}
          />
        </View>
        <View style={Style.content}>
          <Text style={Style.title}>등록일자 </Text>
          <Pressable
            onPress={() => {
              setRegOpen(true);
            }}
            style={Style.description}>
            <Text>{regDate.toJSON()}</Text>
          </Pressable>
          <DateTimePicker
            isVisible={regOpen}
            mode="date"
            onConfirm={date => {
              setRegDate(date);
              setRegOpen(false);
              console.log(date);
            }}
            onCancel={() => {
              setRegOpen(false);
            }}
          />
        </View>
        <View style={Style.content}>
          <Text style={Style.title}>유통기한 </Text>
          <Pressable
            onPress={() => {
              setExpOpen(true);
            }}
            style={Style.description}>
            <Text>{expDate.toJSON()}</Text>
          </Pressable>
          <DateTimePicker
            isVisible={expOpen}
            mode="date"
            onConfirm={date => {
              setExpDate(date);
              setExpOpen(false);
              console.log(date);
            }}
            onCancel={() => {
              setExpOpen(false);
            }}
          />
        </View>
        <View style={Style.content}>
          <Text style={Style.title}>상세설명</Text>
          <TextInput
            activeUnderlineColor={'#0094FF'}
            numberOfLines={5}
            style={Style.description}
            multiline={true}
            value={item.content}
          />
        </View>
        <View style={Style.buttonContent}>
          <Button style={Style.modify} mode="contained">
            수정
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
const Style = StyleSheet.create({
  modify: {
    backgroundColor: 'green',
    borderRadius: 6,
    marginLeft: 40,
  },
  buttonTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  imageBox: {
    alignItems: 'center',
    marginTop: 30,
    height: 150,
  },
  image: {
    width: '60%',
    height: '100%',
  },
  content: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    marginLeft: '40%',
    marginTop: 20,
    marginBottom: 7,
  },
  title: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
    width: '25%',
  },
  description: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
    width: '68%',
  },
});
export default ItemModify;
