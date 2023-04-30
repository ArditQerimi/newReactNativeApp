import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

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

interface IProps {
  visible: boolean;
  onDismiss: () => void;
  chapter: IBook;
  onSave?(book: IBook): void;
}

const BookModal: React.FC<IProps> = props => {
  const [inputs, setInputs] = useState<IBook>({});
  console.log(props.chapter);
  const handleInputChange = (key: keyof IBook, value: string) => {
    setInputs({...inputs, [key]: value});
  };
  // useEffect(() => {
  //   props.onSave(inputs);
  // }, [inputs]);
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <Button onPress={props.onDismiss} title={'Close'} />
        <ScrollView style={styles.scrollView}>
          <TextInput
            style={styles.input}
            placeholder="Order"
            value={inputs.order?.toString()}
            keyboardType="numeric"
            onChangeText={text => handleInputChange('order', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={inputs.title}
            onChangeText={text => handleInputChange('title', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Arabic Language Verse"
            value={inputs.arabicLanguageVerse}
            onChangeText={text =>
              handleInputChange('arabicLanguageVerse', text)
            }
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Albanian Language Verse"
            value={inputs.albanianLanguageVerse}
            onChangeText={text =>
              handleInputChange('albanianLanguageVerse', text)
            }
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Albanian Ayah"
            value={inputs.albanianAyah}
            onChangeText={text => handleInputChange('albanianAyah', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Hadith"
            value={inputs.hadith}
            onChangeText={text => handleInputChange('hadith', text)}
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Hadith Transmitters"
            value={inputs.hadithTransmitters}
            onChangeText={text => handleInputChange('hadithTransmitters', text)}
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Wisdom"
            value={inputs.wisdom}
            onChangeText={text => handleInputChange('wisdom', text)}
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Dilemma"
            value={inputs.dilemma}
            onChangeText={text => handleInputChange('dilemma', text)}
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Dilemma Solving"
            value={inputs.dilemmaSolving}
            onChangeText={text => handleInputChange('dilemmaSolving', text)}
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Advice"
            value={inputs.advice}
            onChangeText={text => handleInputChange('advice', text)}
            multiline={true}
            numberOfLines={4}
          />
        </ScrollView>
        <Button onPress={() => props.onSave(inputs)} title={'Save'} />
      </View>
    </Modal>
  );
};
export default BookModal;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  input: {
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
