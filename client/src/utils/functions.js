import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function cutString(string) {
    return string?.slice(0,7)
}

export function firstUppercase(string) {
    if (string) {
        const res1 = string[0].toLocaleUpperCase()
        const res2 = string.slice(1-string.length)
        return `${res1}${res2}`
    }
}

export function returnArray(arrayObjects, key1, key2) {
    const array = []
    for (let i = 0; i < arrayObjects?.length; i++) {
        array.push(arrayObjects[i][key1][key2])
    }
    return array
}

export function getStateLocalStorage() {
    const getAccountLocalStorage = localStorage.getItem('account')
    return { 
        getAccountLocalStorage, 
    }
}

export function setStateLocalStorage(account) {
    localStorage.setItem('account', account);
}

export function isOwner(owner, account) {
    if (owner?.toLocaleLowerCase() == account?.toLocaleLowerCase()) return true
    else { return false }
}

export function successToast(inputText) {
    toast.success(inputText, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

export function warningToast(inputText) {
    toast.warning(inputText, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

export function convertArrayToObject(arrayOfArray) {
    const arrayOfObj = []
    for (let i = 0; i < arrayOfArray?.length; i++) {
        const obj = {
            'abilities': arrayOfArray[i]?.abilities,
            'created': arrayOfArray[i]?.created,
            'image': arrayOfArray[i]?.image,
            'name': arrayOfArray[i]?.name,
            'id': arrayOfArray[i]?.indexArray,
            'randDna': arrayOfArray[i]?.randDna,
            'tipes': arrayOfArray[i]?.tipes,
        }
        arrayOfObj.push(obj)
    }
    return arrayOfObj
}

export function convertObjectToArray(object) {
    const arrayResult = []
    const values = Object.values(object)
    for (let i = 0; i < values.length; i = i + 2) {
        arrayResult.push([values[i], values[i+1]? values[i+1]: ''])  
    }
    return arrayResult
}

export function next(contador, setContador, datos){
    if(contador >= 0 && contador < datos.length -1) {
      setContador(contador + 1) 
    }
}

export function previus(contador, setContador, datos){
    if(contador > 0 && contador < datos.length) {
        setContador(contador - 1) 
    }
}

export function convertToMatriz(object, datos1) {
    let matriz = []
    let objCompleted = []
    let keys = Object.keys(object)
    for (let i = 0; i < datos1.length; i++) {
        let obj = {}
        let key = keys[i]
        matriz.push(datos1[i].ans)
        matriz.push(object[key])
        obj['pre'] = datos1[i].ans
        obj['res'] = object[key]
        objCompleted.push(obj)
    }
    return matriz
}

export function setLengthAnswers(answersLength) {
    let array = []
    for (let i = 1; i <= answersLength.length; i++) {
        array.push(`r${i}`)
    }
    return array
}

/**
 * format a number as a clock value string minutes:seconds:miliseconds.
 * @param {number} time
 * @returns {string}
 *
 */

export const format = (time) => {
    let mil = time % 100 | 0;
    if (mil / 10 < 1) mil = "0" + mil;
    let seg = (time / 100) % 60 | 0;
    if (seg / 10 < 1) seg = "0" + seg;
    let min = (time / 6000) | 0;
    if (min / 10 < 1) min = "0" + min;
    return `${min}:${seg}:${mil}`;
};
  
