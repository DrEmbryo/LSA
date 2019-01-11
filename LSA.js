Storage.prototype.setArray = function (key , Arr) {
    if (this === window.localStorage) {
        let array = JSON.stringify(Arr) ;
        localStorage.setItem(key , array);
    }
    else {
        let array = JSON.stringify(Arr) ;
        sessionStorage.setItem(key , array);
    }
}

Storage.prototype.getArray = (key) => {
    if (this === window.localStorage) {
        return JSON.parse(localStorage.getItem(key));
    }
    else {
        return JSON.parse(sessionStorage.getItem(key));
    }
}

Storage.prototype.push = function (key , item) {
    if (this === window.localStorage) {
        let arr = localStorage.getArray(key);
        arr.push(item);
        localStorage.setArray(key , arr);
    }
    else {
        let arr = sessionStorage.getArray(key);
        arr.push(item);
        sessionStorage.setArray(key , arr);
    }
}

Storage.prototype.pop = function (key) {
    if (this === window.localStorage) {
        let arr = localStorage.getArray(key);
        let popped = arr.pop();
        localStorage.setArray(key , arr);
        return popped;
    }
    else {
        let arr = sessionStorage.getArray(key);
        let popped = arr.pop();
        sessionStorage.setArray(key , arr);
        return popped;
    }
}

Storage.prototype.shift = function (key) { 
    if (this === window.localStorage) {
        let arr = localStorage.getArray(key);
        arr.shift();
        localStorage.setArray(key , arr);
    }
    else {
        let arr = sessionStorage.getArray(key);
        arr.shift();
        sessionStorage.setArray(key , arr);
    }
}

Storage.prototype.unshift = function (key, item) { 
    if (this === window.localStorage) {
        let arr = localStorage.getArray(key);
        arr.unshift(item);
        localStorage.setArray(key , arr);
    }
    else {
        let arr = sessionStorage.getArray(key);
        arr.unshift(item);
        sessionStorage.setArray(key , arr);
    }

}

Storage.prototype.splice = function (key) { 
    if (this === window.localStorage) {
        let arr = localStorage.getArray(key);
        if (arguments[2] === undefined) {
            arr.splice(arguments[1]);
        } else {
            arr.splice(arguments[1],arguments[2]);
        }
        localStorage.setArray(key , arr);    
    }
    else {
        let arr = sessionStorage.getArray(key);
        if (arguments[2] === undefined) {
            arr.splice(arguments[1]);
        } else {
            arr.splice(arguments[1],arguments[2]);
        }
        sessionStorage.setArray(key , arr);
    
    }
}

Storage.prototype.slice = function (key) { 
    if (this === window.localStorage) {
        let arr = localStorage.getArray(key);
        let newArr ;
        if (arguments[2] === undefined) {
            newArr = arr.slice(arguments[1]);
        } else { 
         newArr = arr.slice(arguments[1] , arguments[2]);
        }
        return newArr;
    }
    else {
        let arr = sessionStorage.getArray(key);
        let newArr ;
        if (arguments[2] === undefined) {
            newArr = arr.slice(arguments[1]);
        } else { 
         newArr = arr.slice(arguments[1] , arguments[2]);
        }
        return newArr;
    }
}

