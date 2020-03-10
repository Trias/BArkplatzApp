import { AsyncStorage } from "react-native";

const cache = {};

export async function initStorage(){
    const allKeys = await AsyncStorage.getAllKeys();
    for (let key of allKeys){
        let value = await AsyncStorage.getItem(key);
        cache[key] = value;
    }
}

export function getItem(name){
    return cache[name];
}

export function setItem(name, item){
    cache[name] = item;
    setItemAsync(name, item);
}

export function removeItem(name){
    delete cache[name];
    removeItemAsync(name);
}

export async function getItemAsync(name){
    return AsyncStorage.getItem(name)
}

export async function setItemAsync(name, item){
    cache[name] = item;
    return AsyncStorage.setItem(name, item);
}

export async function removeItemAsync(name){
    cache[name] = undefined;
    return AsyncStorage.removeItem(name);
}