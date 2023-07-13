import { useState } from 'react'

import { ILocalStorage } from '../interface/LocalStorage'

export const useLocalStorage=<T>({
  key, initalValue
}:ILocalStorage<T>)=> {
  const [valueLocalStorage, setValue] = useState<T>(()=>{
    try {
      const item = window.localStorage.getItem(key)
      return item ?JSON.parse(item):initalValue
    } catch (error) {
      return initalValue
    }
  })

  const setValueLocalStorage = (value:T) => {
    try {
      setValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    valueLocalStorage,
    setValueLocalStorage
  }
}
