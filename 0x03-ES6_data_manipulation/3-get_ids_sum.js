export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, arr) => accumulator + Number(arr.id), 0);
}
