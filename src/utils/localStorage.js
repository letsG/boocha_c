export const setStorageItem = (key, item) => {
    if (!key) {
        return;
    }
    if (typeof item === "object") {
        item = JSON.stringify(item);
    }
    return localStorage.setItem(key, item)
};

export const getStorageItem = (key) => {
    if (!key) {
        return;
    }
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        return localStorage.getItem(key)
    }
};