function listAllMethods(obj) {
  console.log(obj);
  Object.getOwnPropertyNames(obj).forEach(property => {
    console.log(property);
  });
}
listAllMethods(Array);
listAllMethods(Math);
