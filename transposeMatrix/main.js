console.log('connected🤩🤩');

// function transposeMatrix(matrix){
//     const rows = matrix.length;
//     const col = matrix[0].length;
//     const resultMatrix = [];
//     for(let j=0;j<col; j++){
//         const transposeMatrix = [];
//         for(let i=0;i<rows; i++){
//             transposeMatrix.push(matrix[i][j])
//         }
//         resultMatrix.push(transposeMatrix)
//     }
//     return resultMatrix;
// }

// const oMatrix = [
//             [1,2,3],
//             [4,5,6],
//             [7,8,9]]
// const transposeMatrixRes = transposeMatrix(oMatrix);
// console.log('original Matrix',oMatrix);
// console.log('transposedMatrix',transposeMatrixRes);


//transpose Matrix

function transposeMatrix(matrix){
    const rows = matrix.length;
    const col = matrix[0].length;
    resultMatrix = [];
    for(i=0; i<rows; i++){
        const transposeMatrix = [];
        for(j=0; j<col; j++){
            transposeMatrix.push(matrix[j][i]);
        }
        resultMatrix.push(transposeMatrix)
    }
    return resultMatrix;
}

const eMatrix = [
    [1,2,3],
    [5,6,7],
    [9,10,11]]

const transeposedMatrix = transposeMatrix(eMatrix);
console.log('original Matrix',eMatrix);
console.log('transeposedMatrix',transeposedMatrix);