import React, { useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Alert } from 'react-native';
import { Avatar, Button, Image } from 'react-native-elements'

interface ko {
  id: number
  text: string
}
export default function App() {
  const [text, setText] = useState('')
  const [num, setNum] = useState(0)

  const selifu: ko[] = [
    { id: 1, text: 'いいことあるよ〜' },
    { id: 2, text: 'いいことあるよ〜2' },
    { id: 3, text: 'いいことあるよ〜3' },
    { id: 4, text: 'いいことあるよ〜4' },
    { id: 5, text: 'いいことあるよ〜5' },
    { id: 6, text: 'いいことあるよ〜6' },
    { id: 7, text: 'いいことあるよ〜7' },
    { id: 8, text: 'いいことあるよ〜8' },
    { id: 9, text: 'いいことあるよ〜9' },
  ]



  const count = () => {
    const a = num + 1
    setNum(a);

    if (a == 10) {
      setText("10回！！！")
    }
  }
  const reset = () => {
    setText("")
    setNum(0)
  }

  const test2 = () => {
    const num = Math.floor(Math.random() * selifu.length) + 1
    const te = selifu.find(({ id }) => id == num)
    // console.log(te.text)
    // setText(num.toString())
    setText(te.text)
  }
  return (
    <View style={styles.container} >
      <View style={{ alignItems: "center" }} onTouchStart={count}>
        <Text>{num}</Text>
        {/* <Image source={require('./assets/koupen.jpg')}
          style={{ width: 200, height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        /> */}
        <Text style={{ fontSize: 25 }}>{text}</Text>
      </View>

      <View>
        <Button title="らんだむ(0~9)" type="clear" onPress={test2} />
        <Button title="りせっと" type="clear" onPress={reset} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

