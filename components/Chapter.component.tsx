import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './Chapter.styles';

type Props = {
  data: any;

  onSetSheetRef?(ref: any): void;
  sheetRef?: any;
  onPress?(): void;
};

const ChapterComponent: React.FC<Props> = props => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold'}}>{props.data.name}</Text>
          <Icon name={'chevron-right'} size={25} color={'#000'} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ChapterComponent;
