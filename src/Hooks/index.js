import {useState} from 'react';

export const useTextInputController = (initialValue) => {
  const [value,setvalue]= useState(initialValue)
  const onChangeText = (e) => {
    setvalue(e)
  }
  return {value,onChangeText}
}