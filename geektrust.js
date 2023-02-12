const filename = process.argv[2];
const fs = require('fs');

let train_A = {
    CHN: 0,
    SLM: 350,
    BLR: 550,
    KRN: 900,
    HYB: 1200,
    NGP: 1600,
    ITJ: 1900,
    BPL: 2000,
    AGA: 2500,
    NDL: 2700
};

let train_B = {
    TVC: 0,
    SRR: 300,
    MAQ: 600,
    MAO: 1000,
    PNE: 1400,
    HYB: 2000,
    NGP: 2400,
    ITJ: 2700,
    BPL: 2800,
    PTA: 3800,
    NJP: 4200,
    GHY: 4700
}

function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
function selectionSort(arr, n) {
    let i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        swap(arr, min_idx, i);
        swap(stationName, min_idx, i);
    }
}

let distance = []
let stationName = []

function formOutputAB(start) {
    for (let o = stationName.length - 1; o >= 0; o--) {
        start += ' ' + stationName[o]
    }
    start = start.split(' HYB')
    start = start[0]
    return start
}

function getTrainAB(fileName) {
    try {

        let data = fs.readFileSync(fileName, 'utf8');
        data = data.split('\n')
        data[0] = data[0].split('\r')
        data[0] = data[0][0]

        data[0] = data[0].split(' ')
        let outputA = "ARRIVAL TRAIN_A ENGINE"

        data[1] = data[1].split(' ')
        let outputB = "ARRIVAL TRAIN_B ENGINE"

        for (let i = 2; i < data[0].length; i++) {
            if (train_A[data[0][i]] != undefined) {
                if (train_A[data[0][i]] >= train_A.HYB) {
                    outputA += ' ' + data[0][i]
                    distance.push(train_A[data[0][i]]-train_A.HYB)
                    stationName.push(data[0][i])
                }
            }

            else {
                if (train_B[data[0][i]] >= train_B.HYB) {
                    outputA += ' ' + data[0][i]
                    distance.push(train_B[data[0][i]]-train_B.HYB)
                    stationName.push(data[0][i])
                }
            }

        }


        for (let j = 2; j < data[1].length; j++) {
            if (train_B[data[1][j]] != undefined && train_B[data[1][j]] >= train_B.HYB) {
                outputB += ' ' + data[1][j]
                distance.push(train_B[data[1][j]]-train_B.HYB)
                stationName.push(data[1][j])
            }

            else {
                if (train_A[data[1][j]] >= train_A.HYB) {
                    outputB += ' ' + data[1][j]
                    distance.push(train_A[data[1][j]]-train_A.HYB)
                    stationName.push(data[1][j])
                }
            }
        }


        selectionSort(distance, distance.length)
        let outputAB = formOutputAB("DEPARTURE TRAIN_AB ENGINE ENGINE")
        if(stationName.length===0)
        {
            outputAB="JOURNEY_ENDED"
        }
        return outputA + '\n' + outputB + '\n' + outputAB
    } catch (error) {
        console.log(error)
    }

}

let consoleOutput = getTrainAB(filename)
console.log(consoleOutput)

module.exports = {
    getTrainAB
}