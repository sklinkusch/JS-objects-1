function listAllMethods(obj) {
  let association;
  let MyMethodArray = Object.getOwnPropertyNames(obj);
  let MyFilteredArray = MyMethodArray.filter(function(element) {
    association = obj[element];
    if (typeof association != "number") {
      console.log(element);
    }
  });
}
listAllMethods(Array);
listAllMethods(Math);
listAllMethods(String);
