import React, {useRef} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IArgument, IMatter} from '../App';

type Props = {
  arguments?: IArgument[];
  matters?: IMatter[];
  // chapter?: IArgument;
  chapterTitle?: string;

  setModal?(modal: any): void;
  onClose?(): void;
};

const Modal: React.FC<Props> = props => {
  const modalizeRef = useRef<Modalize>(null);
  const [bookMatters, setBookMatters] = React.useState(false);
  // eslint-disable-next-line no-shadow-restricted-names
  const [bookArguments, setBookArguments] = React.useState(true);

  const onOpenMatters = () => {
    setBookMatters(true);
  };
  const onCloseMatters = () => {
    setBookMatters(false);
  };

  const onOpenDescription = () => {
    setBookArguments(true);
  };
  const onCloseDescription = () => {
    setBookArguments(false);
  };

  React.useEffect(() => {
    // @ts-ignore
    props.setModal(modalizeRef);
  }, [modalizeRef]);
  // @ts-ignore

  const onStyleText = (text: string | undefined) => {
    let textForStyle: any[] = [];

    text.split(/[<>]+/)?.map(t => {
      if (t.includes('#')) {
        textForStyle.push(
          <Text style={{fontWeight: 'bold'}}>{`${t.replace('#', '')} `}</Text>,
        );
      } else if (t.includes('%')) {
        textForStyle.push(
          <Text style={{fontStyle: 'italic'}}>{`${t.replace('%', '')} `}</Text>,
        );
      } else {
        textForStyle.push(t);
      }
    });
    return textForStyle;
  };

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={400}
      onClose={() => {
        onCloseMatters();
        onOpenDescription();
      }}
      modalStyle={{paddingHorizontal: 5}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}>
        <View />
        {bookArguments ? (
          <View style={{width: '90%'}}>
            <Text style={{fontSize: 18, textAlign: 'justify'}}>
              {onStyleText(props?.chapterTitle)}
            </Text>
          </View>
        ) : (
          <View style={{width: '90%'}}>
            <Text
              style={{
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Çështjet e temës
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={props.onClose}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 1,
          }}>
          <AntDesign name={'close'} size={25} />
        </TouchableOpacity>
      </View>
      {bookArguments && (
        <View>
          {props.arguments?.map((argument: IArgument, i) => {
            return (
              <View key={i} style={{padding: 10}}>
                <Text style={{textAlign: 'justify'}}>
                  {onStyleText(argument.title)}
                </Text>
              </View>
            );
          })}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title={'Matters'}
              color="#841584"
              onPress={() => {
                onOpenMatters();
                onCloseDescription();
              }}
            />
          </View>
        </View>
      )}

      {bookMatters && (
        <View>
          {props.matters?.map((matter: IMatter, i) => (
            <View key={i} style={{padding: 10}}>
              <Text style={{textAlign: 'justify'}}>
                {onStyleText(matter.title)}
              </Text>
            </View>
          ))}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title={'Description'}
              color="#841584"
              onPress={() => {
                onOpenDescription();
                onCloseMatters();
              }}
            />
          </View>
        </View>
      )}
    </Modalize>
  );
};

export default Modal;
