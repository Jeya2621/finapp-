class LoanManager{
    /**
     * This function used to store date in local storage.
     * @param {String} key 
     * @param {any} value 
     */
    static saveToStorage(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }
} 