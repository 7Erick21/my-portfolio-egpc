import { ELocalStorage } from '../enums/LocalStorage'

export interface ILocalStorage<T>{
    key: ELocalStorage
    initalValue: T
}