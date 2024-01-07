import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key) => {
        try {
            const password = await AsyncStorage.getItem(key);
            return JSON.parse(password) || [];
        } catch (e) {
            alert("Erro ao buscar ", e);
            return [];
        }
    }

    const saveItem = async (key, password) => {
        try {
            let passwords = await getItem(key);
            passwords.push(password);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (e) {
            alert("Erro ao salvar ", e);
        }

    }

    const removeItem = async (key, password) => {
        try {
            let passwords = await getItem(key);
            passwords = passwords.filter(pass => pass != password);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
            return passwords;
        } catch (e) {
            alert("Erro ao remover ", e);
        }

    }

    return {
        getItem,
        saveItem,
        removeItem
    }

}

export default useStorage;