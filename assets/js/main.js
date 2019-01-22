// function listAllMethods(obj) {
//   let association;
//   let MyMethodArray = Object.getOwnPropertyNames(obj);
//   let MyFilteredArray = MyMethodArray.filter(function(element) {
//     association = obj[element];
//     if (typeof association != "number") {
//       // if (typeof association == "function") {
//       console.log(element);
//     }
//   });
// }
function listAllMethods(obj) {
  const FilteredArray = Object.getOwnPropertyNames(obj).filter(
    key => typeof obj[key] === "function"
  );
  return FilteredArray;
}
console.log(listAllMethods(Array));
console.log(listAllMethods(Math));
console.log(listAllMethods(String));
