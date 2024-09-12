import { useState, useEffect } from 'react';
import { getStorage, updateStorage } from "../db/localStorage"

export function useLocalStorage (itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = getStorage(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    updateStorage(itemName, initialValue);
                    parsedItem = initialValue;
                } else {
                    parsedItem = localStorageItem;
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            } 
        }, 3000);
    }, []);

    const saveItem = (newItem) => {
        updateStorage(itemName, newItem);
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}