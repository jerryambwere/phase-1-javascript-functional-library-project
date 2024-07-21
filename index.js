// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        callback(collection[keys[i]], keys[i], collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, (value, key, collection) => {
      newArray.push(callback(value, key, collection));
    });
    return newArray;
  }
  
  function myReduce(collection, callback, acc) {
    let startIndex = 0;
    if (!acc) {
      acc = collection[0];
      startIndex = 1;
    }
    myEach(collection.slice(startIndex), (value, key, collection) => {
      acc = callback(acc, value, collection);
    });
    return acc;
  }
  
  function myFind(collection, predicate) {
    let foundValue;
    myEach(collection, (value, key, collection) => {
      if (predicate(value)) {
        foundValue = value;
        return false; // break out of loop
      }
    });
    return foundValue;
  }
  
  function myFilter(collection, predicate) {
    const newArray = [];
    myEach(collection, (value, key, collection) => {
      if (predicate(value)) {
        newArray.push(value);
      }
    });
    return newArray;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  
  function myFirst(array, n) {
    if (n) {
      return array.slice(0, n);
    } else {
      return array[0];
    }
  }
  
  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    } else {
      return array[array.length - 1];
    }
  }
  
  // BONUS: mySortBy (uncomment if you want to implement it)
  
  // function mySortBy(array, callback) {
  //   return array.slice().sort((a, b) => {
  //     const aValue = callback(a);
  //     const bValue = callback(b);
  //     if (aValue 
  