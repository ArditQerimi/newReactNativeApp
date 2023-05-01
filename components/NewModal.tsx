import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Modal,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import ChapterModal from './ChapterModal';
import {Advice, Dilemma, Hadith, QuranicVerse, Wisdom} from '../App';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface Props {
  visible?: boolean;
  onClose?(): void;
  children?: React.ReactNode;
  title?: string;
}

const ModalComponent: React.FC<Props> = (props: Props) => {
  // const [modalVisible, setModalVisible] = useState(visible);
  // console.log(props.visible);
  const route = useRoute();
  const {book, lessonNumber} = route.params;
  console.log(route.params);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };
  return (
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={props.visible}
    //   // statusBarTranslucent
    //   presentationStyle={'overFullScreen'}
    //   onRequestClose={() => {
    //     // setModalVisible(false);
    //     props.onClose();
    //   }}>
    <View>
      <StatusBar
        backgroundColor="#fb2219" // Change status bar color
        translucent={true} // Make status bar translucent
        hidden={true}
      />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              borderStyle: 'solid',
              borderBottomWidth: 2,
              borderColor: '#FDF0E6',
              // borderBottomWidth: 2,
              // marginBottom: 3,
              // backgroundColor: '#FDF0E6',
            }}>
            {/*<View*/}
            {/*  style={{*/}
            {/*    width: '10%',*/}
            {/*  }}></View>*/}

            <View
              style={{
                width: '10%',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => handlePress()}
                style={{
                  width: 30,
                  height: 40,

                  borderRadius: 40,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // backgroundColor: '#FFA07A',
                  backgroundColor: '#FDF0E6',
                }}>
                <FontAwesomeIcon
                  name={'chevron-left'}
                  size={18}
                  style={{color: '#222222'}}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '90%',
                paddingHorizontal: 6,
                paddingVertical: 10,
                borderRadius: 10,
                borderTopRightRadius: 25,
                backgroundColor: '#FDF0E6',
                marginHorizontal: 2,
              }}>
              <Text style={styles.modalTitle}>
                <Text style={{fontSize: 18}}>{lessonNumber}</Text>. {book.title}
              </Text>
            </View>

            {/*<View*/}
            {/*  style={{*/}
            {/*    width: '10%',*/}
            {/*    alignItems: 'center',*/}
            {/*    flexDirection: 'row',*/}
            {/*    justifyContent: 'center',*/}
            {/*  }}>*/}
            {/*  <TouchableOpacity*/}
            {/*    onPress={() => handlePress()}*/}
            {/*    style={{*/}
            {/*      width: 25,*/}
            {/*      height: 25,*/}

            {/*      borderRadius: 50,*/}
            {/*      alignItems: 'center',*/}
            {/*      flexDirection: 'row',*/}
            {/*      justifyContent: 'center',*/}
            {/*      // backgroundColor: '#FFA07A',*/}
            {/*      backgroundColor: '#FDF0E6',*/}
            {/*    }}>*/}
            {/*    <AntDesign name={'close'} size={24} color="#000" />*/}
            {/*  </TouchableOpacity>*/}
            {/*</View>*/}
          </View>
          {/*<View style={{height: '95%'}}>{props.children}</View>*/}
          <View style={{height: '95%'}}>
            <ScrollView
              style={{
                backgroundColor: '#e34b34',
              }}>
              <View
                style={{
                  padding: 10,
                  marginBottom: 20,
                }}>
                {/*<View style={{*/}
                {/*    flexDirection: 'row',*/}
                {/*    justifyContent: 'space-between',*/}
                {/*  }}>*/}
                {/*  <TouchableOpacity*/}
                {/*    // onPress={handleDelete}*/}
                {/*    style={{*/}
                {/*      backgroundColor: '#FDF0E6',*/}
                {/*      padding: 10,*/}
                {/*      borderRadius: 10,*/}
                {/*      width: 80,*/}
                {/*      height: 40,*/}
                {/*    }}>*/}
                {/*    <Text*/}
                {/*      style={{*/}
                {/*        fontSize: 16,*/}
                {/*        color: '#000',*/}
                {/*        textAlign: 'center',*/}
                {/*      }}>*/}
                {/*      Delete*/}
                {/*    </Text>*/}
                {/*  </TouchableOpacity>*/}
                {/*  <TouchableOpacity*/}
                {/*    // onPress={handleOpenChapterModal}*/}
                {/*    style={{*/}
                {/*      backgroundColor: '#FDF0E6',*/}
                {/*      padding: 10,*/}
                {/*      borderRadius: 10,*/}
                {/*      width: 80,*/}
                {/*      height: 40,*/}
                {/*    }}>*/}
                {/*    <Text*/}
                {/*      style={{*/}
                {/*        fontSize: 16,*/}
                {/*        color: '#000',*/}
                {/*        textAlign: 'center',*/}
                {/*      }}>*/}
                {/*      Edit*/}
                {/*    </Text>*/}
                {/*  </TouchableOpacity>*/}
                {/*</View>*/}

                {route.params?.book?.arabicLanguageVerse &&
                  route.params?.book?.albanianLanguageVerse && (
                    <QuranicVerse
                      arabicLanguageVerse={
                        route.params?.book?.arabicLanguageVerse
                      }
                      albanianLanguageVerse={
                        route.params?.book?.albanianLanguageVerse
                      }
                      albanianAyah={route.params?.book?.albanianAyah}
                    />
                  )}
                {route.params?.book?.hadith && (
                  <Hadith
                    hadith={route.params?.book?.hadith}
                    hadithTransmitter={route.params?.book?.hadithTransmitters}
                  />
                )}
                {route.params?.book?.wisdom && (
                  <Wisdom wisdom={route.params?.book?.wisdom} />
                )}
                {route.params?.book?.dilemma &&
                  route.params?.book?.dilemmaSolving && (
                    <Dilemma
                      dilemma={route.params?.book?.dilemma}
                      dilemmaSolving={route.params?.book?.dilemmaSolving}
                    />
                  )}
                {route.params?.book?.advice && (
                  <Advice advice={route.params?.book?.advice} />
                )}
              </View>
            </ScrollView>
            {/*<ChapterModal*/}
            {/*  chapter={props.book}*/}
            {/*  visible={chapterModalVisible}*/}
            {/*  onDismiss={handleCloseChapterModal}*/}
            {/*  onSave={handleSave}*/}
            {/*/>*/}
          </View>
        </View>
      </View>
    </View>
    // {/*// </Modal>*/}
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  modalContent: {
    // backgroundColor: 'white',
    // backgroundColor: '#F5F1E1',
    // backgroundColor: '#FF7046',
    // backgroundColor: '#FFA07A',
    backgroundColor: '#e34b34',
    // borderRadius: 10,

    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    // width: '100%',
    // color: '#222222',
    // color: '#fff',
    color: '#222222',
  },
  modalClose: {
    fontSize: 16,
    color: '#007aff',
    textAlign: 'right',
  },
});

export default ModalComponent;
