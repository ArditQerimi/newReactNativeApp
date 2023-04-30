import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {WebView} from 'react-native-webview';
import ChapterModal from './components/ChapterModal';
import ModalComponent from './components/NewModal';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import SplashScreen from './SplashScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

interface IBook {
  order?: number;
  title?: string;
  arabicLanguageVerse?: string;
  albanianLanguageVerse?: string;
  albanianAyah?: string;
  hadith?: string;
  hadithTransmitters?: string;
  wisdom?: string;
  dilemma?: string;
  dilemmaSolving?: string;
  advice?: string;
}

const data: IBook[] = [
  {
    order: 1,
    title: 'Namazi është lidhja e robit me Krijuesin',
    arabicLanguageVerse:
      'بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ.',
    albanianLanguageVerse:
      ' "Thuaju robërve të Mi, të cilët besojnë: Le të falin namazin...". ',
    albanianAyah: '(Kurani, 14:31)',
    hadith:
      'I Dërguari i Allahut, Muhamedi صلى الله عليه وسلم ,ka thënë: “Islami është ndërtuar mbi pesë (shtylla): (1) të dëshmuarit se nuk meriton të adhurohet askush përveç Allahut dhe se Muhamedi është i Dërguar i Tij, (2) faljen e namazit, (3) dhënien e zekatit, (4) haxhillëkun dhe (5) agjërimin e Ramazanit.',
    hadithTransmitters: 'E SHËNOJNË BUHARIU DHE MUSLIMI',
    wisdom:
      'Ibn Kajimi thoshte: "Namazi sjell furnizimin (rizkun), ruan shëndetin, shmang dëmin, përzë sëmundjet, forcon zemrën, shndrit fytyrën, kënaq shpirtin, flak përtacinë, gjallëron gjymtyrët, dhuron fuqi, zgjeron kraharorin, ushqen shpirtin, zbardh zemrën, ruan begatinë, largon ndëshkimin, tërheq bereqetin, të mban larg nga shejtani dhe të afron me të Gjithëmëshirshmin.',
    dilemma: 'Namazi është i rëndë për t’u kryer (!)',
    dilemmaSolving:
      'Po të ishte namazi i vështirë, nuk do ta kryenin miliona njerëz. Përkundrazi, namazi, jo vetëm që është i lehtë, por është edhe shkak për lehtësimin e të gjitha punëve. Në të vërtetë, namazi është çelësi i suksesit.',
    advice:
      'Namazi është lidhja e robit me Krijuesin, andaj, nëse vërtet e do Zotin tënd, përgjigjju thirrjes së Tij; fillo ta falësh namazin e mos e lër për nesër!',
  },
  {
    title: 'Fale namazin, që ta fitosh Xhenetin',
  },
  {
    title: 'Bëhu prej atyre që e falin sabahun',
  },
];

const Stack = createStackNavigator();
export const QuranicVerse = ({
  arabicLanguageVerse,
  albanianLanguageVerse,
  albanianAyah,
}: any) => {
  return (
    <View style={styles.argumentContainer}>
      <Text style={styles.argumentTitle}>Ajeti Kuranor</Text>
      <Text style={{marginVertical: 2, fontSize: 16}}>
        Allahu i Madhërishëm thotë:{' '}
      </Text>
      <Text
        style={{
          fontFamily: 'Uthmani',
          marginBottom: 18,
          fontSize: 24,
          lineHeight: 40,
          color: '#222222',
        }}>
        {arabicLanguageVerse}
      </Text>

      <Text
        style={{
          textAlign: 'right',
          fontSize: 16,
          marginVertical: 2,
          color: '#222222',
          lineHeight: 24,
        }}>
        {albanianLanguageVerse}
      </Text>
      <Text style={{textAlign: 'right', marginVertical: 2, fontSize: 14}}>
        {albanianAyah}
      </Text>
    </View>
  );
};

export const Hadith = ({hadith, hadithTransmitter}: any) => {
  return (
    <>
      <View style={styles.argumentContainer}>
        <Text style={styles.argumentTitle}>THËNIE PROFETIKE</Text>

        <Text
          style={{
            textAlign: 'justify',
            marginVertical: 2,
            color: '#222222',
            lineHeight: 24,
            fontSize: 16,
          }}>
          {hadith}
        </Text>
        <Text
          style={{
            textTransform: 'uppercase',
            textAlign: 'right',
            marginVertical: 2,
            fontSize: 12,
          }}>
          [{hadithTransmitter}]
        </Text>
      </View>
    </>
  );
};

export const Wisdom = ({wisdom}: any) => {
  return (
    <View style={styles.argumentContainer}>
      <Text style={styles.argumentTitle}>URTËSI</Text>

      <Text
        style={{
          textAlign: 'justify',
          marginVertical: 2,
          color: '#222222',
          lineHeight: 24,
          fontSize: 16,
        }}>
        {wisdom}
      </Text>
    </View>
  );
};

export const Dilemma = ({dilemma, dilemmaSolving}: any) => {
  const [webviewHeight, setWebviewHeight] = useState<number | undefined>();

  const onWebViewMessage = (event: any) => {
    console.log(event.nativeEvent.data);
    setWebviewHeight(Number(event.nativeEvent.data) * 0.1);
  };
  return (
    <View style={styles.argumentContainer}>
      <Text style={styles.argumentTitle}>DILEMË</Text>
      {/*<WebView*/}
      {/*  source={{*/}
      {/*    html: `<div style="font-size: 40px; ">${dilemma}</div>`,*/}
      {/*  }}*/}
      {/*  style={{height: webviewHeight}}*/}
      {/*  onMessage={onWebViewMessage}*/}
      {/*  injectedJavaScript={`window.ReactNativeWebView.postMessage(document.body.scrollHeight)`}*/}
      {/*/>*/}
      {/*<WebView*/}
      {/*  source={{*/}
      {/*    html: `<div style="font-size: 40px; ">${dilemmaSolving}</div>`,*/}
      {/*  }}*/}
      {/*  style={{height: webviewHeight}}*/}
      {/*  onMessage={onWebViewMessage}*/}
      {/*  injectedJavaScript={`window.ReactNativeWebView.postMessage(document.body.scrollHeight)`}*/}
      {/*/>*/}
      <Text
        style={{
          fontStyle: 'italic',
          marginVertical: 2,
          color: '#666666',
          lineHeight: 24,
          fontSize: 16,
        }}>
        {dilemma}
      </Text>

      <Text
        style={{
          textAlign: 'justify',
          marginVertical: 2,
          color: '#222222',
          lineHeight: 24,
          fontSize: 16,
        }}>
        {dilemmaSolving}
      </Text>
    </View>
  );
};

export const Advice = ({advice}: any) => {
  return (
    <View style={styles.argumentContainer}>
      <Text style={styles.argumentTitle}>KËSHILLË</Text>
      <Text
        style={{
          textAlign: 'justify',
          marginVertical: 2,
          color: '#222222',
          lineHeight: 24,
          fontSize: 16,
        }}>
        {advice}
      </Text>
    </View>
  );
};

interface LessonModalProps {
  book: IBook;
  modalVisible?: boolean;
  onClose?(): void;
  handleSave?(book: IBook): void;
  chapter?: IBook;
  lessonNumber?: number;
}

const LessonModal: React.FC<LessonModalProps> = (props: LessonModalProps) => {
  const [chapterModalVisible, setChapterModalVisible] = useState(false);
  const handleOpenChapterModal = () => {
    setChapterModalVisible(true);
  };

  const handleCloseChapterModal = () => {
    setChapterModalVisible(false);
  };

  const handleSave = (book: IBook) => {
    console.log(book);
    props.handleSave(book);
  };
  return (
    <>
      <ModalComponent
        visible={props.modalVisible}
        onClose={props.onClose}
        title={props.lessonNumber + '.  ' + props.book?.title}>
        <ScrollView
          style={{
            backgroundColor: '#e34b34',
          }}>
          <View
            style={{
              padding: 10,
              marginBottom: 20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                // onPress={handleDelete}
                style={{
                  backgroundColor: '#FDF0E6',
                  padding: 10,
                  borderRadius: 10,
                  width: 80,
                  height: 40,
                }}>
                <Text
                  style={{fontSize: 16, color: '#000', textAlign: 'center'}}>
                  Delete
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleOpenChapterModal}
                style={{
                  backgroundColor: '#FDF0E6',
                  padding: 10,
                  borderRadius: 10,
                  width: 80,
                  height: 40,
                }}>
                <Text
                  style={{fontSize: 16, color: '#000', textAlign: 'center'}}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>

            {props.book?.arabicLanguageVerse &&
              props.book?.albanianLanguageVerse && (
                <QuranicVerse
                  arabicLanguageVerse={props.book?.arabicLanguageVerse}
                  albanianLanguageVerse={props.book?.albanianLanguageVerse}
                  albanianAyah={props.book?.albanianAyah}
                />
              )}
            {props.book?.hadith && (
              <Hadith
                hadith={props.book?.hadith}
                hadithTransmitter={props.book?.hadithTransmitters}
              />
            )}
            {props.book?.wisdom && <Wisdom wisdom={props.book?.wisdom} />}
            {props.book?.dilemma && props.book?.dilemmaSolving && (
              <Dilemma
                dilemma={props.book?.dilemma}
                dilemmaSolving={props.book?.dilemmaSolving}
              />
            )}
            {props.book?.advice && <Advice advice={props.book?.advice} />}
          </View>
        </ScrollView>
        <ChapterModal
          chapter={props.book}
          visible={chapterModalVisible}
          onDismiss={handleCloseChapterModal}
          onSave={handleSave}
        />
      </ModalComponent>
    </>
  );
};

interface RenderLessonProps {
  book: IBook;
  index: number;
}
const RenderLesson: React.FC<RenderLessonProps> = (
  props: RenderLessonProps,
) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation();

  const [chapterModalVisible, setChapterModalVisible] = useState(false);
  const handleOpenChapterModal = () => {
    setChapterModalVisible(true);
  };

  const handleCloseChapterModal = () => {
    setChapterModalVisible(false);
  };
  console.log(props.index);
  return (
    <View style={styles.items}>
      {/*<Pressable style={styles.item} onPress={handleOpenModal}>*/}
      <Pressable
        style={styles.item}
        onPress={() =>
          navigation.navigate('LessonScreen', {
            book: props.book as IBook,
            lessonNumber: props.index + 1,
          })
        }>
        <Text style={styles.title}>
          {props.index + 1}. {props.book?.title}
        </Text>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            name={'chevron-right'}
            size={16}
            style={styles.icon}
          />
        </View>
      </Pressable>
      {/*<Button onPress={handleOpenChapterModal} title={'Add'} />*/}

      {/*<LessonModal*/}
      {/*  book={props.book}*/}
      {/*  modalVisible={modalVisible}*/}
      {/*  onClose={handleCloseModal}*/}
      {/*  lessonNumber={props.index + 1}*/}
      {/*/>*/}
      {/*<ChapterModal*/}
      {/*  book={props.book}*/}
      {/*  visible={chapterModalVisible}*/}
      {/*  onDismiss={handleCloseChapterModal}*/}
      {/*/>*/}
    </View>
  );
};

function HomeScreen() {
  const [chapters, setChapters] = useState<IBook[]>(null);
  console.log(chapters);

  const axiosInstance = axios.create({
    // baseURL: ,
    timeout: 60000,

    validateStatus: status => {
      return status == 201 || status == 202 || status == 302 || status == 200;
    },
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const status = error.response?.status;
      if (status === 408 || error.code === 'ECONNABORTED') {
        console.log(`A timeout happend on url ${error.config.url}`);
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    },
  );

  const getAllChapters = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.26:45455/api/Chapter`,
        {},
      );
      setChapters(response.data);
      return response.data; // explicitly return the response data
    } catch (error) {
      console.error('Error occurred while fetching chapters: ', error);
      throw error; // optionally, you can re-throw the error to propagate it up the call stack
    }
  };

  useEffect(() => {
    getAllChapters();
  }, []);

  return (
    <>
      <View
        style={{
          backgroundColor: '#e34b34',

          borderStyle: 'solid',
          borderBottomWidth: 2,
          borderColor: '#FDF0E6',
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#222',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: 34,
              fontWeight: 'bold',
              padding: 10,
              backgroundColor: '#FDF0E6',
              borderRadius: 15,
              // marginTop: 10,

              width: '90%',
            }}>
            Për ty që (s')falesh
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <RenderLesson index={index} book={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LessonScreen"
            component={ModalComponent}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e34b34',
    paddingTop: 10,
  },
  button: {
    // padding: 10,
    backgroundColor: '#007aff',
    color: 'white',
    borderRadius: 5,
    marginTop: 20,
  },
  items: {
    paddingHorizontal: 6,
    // backgroundColor: '#FFA07A',
    flex: 1,
  },
  item: {
    backgroundColor: '#FDF0E6',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    // borderColor: '#111111',
    // borderWidth: 1,
  },
  title: {
    fontSize: 18,
    color: '#222222',
    width: '94%',
  },
  iconContainer: {
    width: '6%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  icon: {
    color: '#222222',
  },
  textInput: {
    height: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  // button: {
  //   padding: 10,
  //   backgroundColor: '#007aff',
  //   borderRadius: 5,
  //   marginBottom: 10,
  // },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  preview: {
    marginTop: 10,
  },
  argumentContainer: {
    padding: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#FDF0E6',
    marginVertical: 3,
  },
  argumentTitle: {
    color: '#222222',
    textTransform: 'uppercase',
    marginVertical: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  argumentContent: {
    color: '#222222',
  },
});
