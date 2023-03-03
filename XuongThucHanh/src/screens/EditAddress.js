import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import FastImage from 'react-native-fast-image'

const data = [
  { key: '1', value: 'Mobiles', disabled: true },
  { key: '2', value: 'Appliances' },
  { key: '3', value: 'Cameras' },
  { key: '4', value: 'Computers', disabled: true },
  { key: '5', value: 'Vegetables' },
  { key: '6', value: 'Diary Products' },
  { key: '7', value: 'Drinks' },
]

const EditAddress = () => {
  const [selected, setSelected] = useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgBack}
        source={require('../../assets/images/back.png')} />
      <Text style={styles.textNewAddress}>Edit Address</Text>
      <SelectList
        style={styles.selectList}
        //onSelect={() => alert(selected)}
        setSelected={setSelected}
        data={data}
        search={false}
        boxStyles={{ borderRadius: 5, marginBottom: 30, backgroundColor: '#F3F3F3', borderColor: '#F3F3F3' }} //override default styles
        inputStyles={{ color: '#AC8E71' }}
        defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}  //default selected option
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="mati egh"
          placeholderTextColor='#AC8E71' />
      </View>
      <SelectList
        style={styles.selectList}
        //onSelect={() => alert(selected)}
        setSelected={setSelected}
        data={data}
        search={false}
        boxStyles={{ borderRadius: 5, marginBottom: 30, backgroundColor: '#F3F3F3', borderColor: '#F3F3F3' }} //override default styles
        inputStyles={{ color: '#AC8E71' }}
        defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}   //default selected option
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Lungangen 6, 41722"
          placeholderTextColor='#AC8E71' />
      </View>
      <View style={styles.update}>
        <Text style={styles.textUpdate}>Update Address</Text>
      </View>
    </View>
  )
}

export default EditAddress

const styles = StyleSheet.create({
  textUpdate: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    letterSpacing: 0.17,
    color: '#ffffff',
  },
  update: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 112
  },
  imgSpinner: {
    position: 'absolute',
    right: 22,
    top: 22
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    paddingLeft: 27,
    marginBottom: 30,
    position: 'relative',
  },
  textNewAddress: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    lineHeight: 28.8,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 64
  },
  imgBack: {
    marginTop: 54
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20
  }
})
