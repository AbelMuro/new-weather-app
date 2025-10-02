import {ref, onMounted, onUnmounted} from 'vue';

function useLocalStorage(item) {
    const savedQueries = ref(JSON.parse(localStorage.getItem(item)) || []);

    const handleLocalStorage = () => {
        console.log('hello world')
        savedQueries.value = JSON.parse(localStorage.getItem(item));
    }    

    onMounted(() => {
        document.addEventListener('change_local_storage', handleLocalStorage);
    });

    onUnmounted(() => {
        document.removeEventListener('change_local_storage', handleLocalStorage);
    })

    return [savedQueries];
}

export default useLocalStorage;