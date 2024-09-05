export const getStorage = (key) => {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data) || null;
}

export const updateStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}
