export default function appendToEachArrayValue(array, appendString) {
  let myarr = [];
  for (let i of array) {
     let value = appendString + i;
     myarr.push(value);
  }
  return myarr;
}
