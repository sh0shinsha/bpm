const Store = require('electron-store');
const store = new Store({name: 'bpm_settings'});

const setStore = (key, value) => {
    return store.set(key, value);
}

const getStore = (key) => {
    return store.get(key);
}

export {setStore, getStore};
