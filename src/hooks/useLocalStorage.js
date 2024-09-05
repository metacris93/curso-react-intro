import { useState } from 'react';
import { getStorage, updateStorage } from "../db/localStorage"

export function useLocalStorage (itemName, initialValue) {
    const localStorageItem = getStorage(itemName);
    let parsedItem;
    if (!localStorageItem) {
        updateStorage(itemName, initialValue);
        parsedItem = initialValue;
    } else {
        parsedItem = localStorageItem;
    }
    const [item, setItem] = useState(parsedItem);
    const saveItem = (newItem) => {
        updateStorage(itemName, newItem);
        setItem(newItem);
    }
    return [item, saveItem];
}