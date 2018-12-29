Storage.prototype.setArray = function (key , Arr) {
    let array = JSON.stringify(Arr) ;
    localStorage.setItem(key , array);
}

Storage.prototype.getArray = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

Storage.prototype.push = function (key , item) {
    let arr = localStorage.getArray(key);
    arr.push(item);
    localStorage.setArray(key , arr);
}

Storage.prototype.pop = function (key) {
    let arr = localStorage.getArray(key);
    let popped = arr.pop();
    localStorage.setArray(key , arr);
    return popped;
}

Storage.prototype.shift = function (key) { 
    let arr = localStorage.getArray(key);
    arr.shift();
    localStorage.setArray(key , arr);
}

Storage.prototype.unshift = function (key, item) { 
    let arr = localStorage.getArray(key);
    arr.unshift(item);
    localStorage.setArray(key , arr);
}

Storage.prototype.splice = function (key) { 
    let arr = localStorage.getArray(key);
    if (arguments[2] === undefined) {
        arr.splice(arguments[1]);
    } else {
        arr.splice(arguments[1],arguments[2]);
    }
    localStorage.setArray(key , arr);
}

Storage.prototype.slice = function (key) { 
    let arr = localStorage.getArray(key);
    let newArr ;
    if (arguments[2] === undefined) {
        newArr = arr.slice(arguments[1]);
    } else { 
     newArr = arr.slice(arguments[1] , arguments[2]);
    }
    return newArr;
}

