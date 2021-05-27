const disc = {
    x: 100,
    y: 20,
    z: 1,
}

const money = {
    x: 100,
    y: 30,
    z: 2,
}


const ratio = {
    x: money.x / disc.x ,
    y: money.y / disc.y,
    z: money.z / disc.z,
}

const sortedRatioKeys = Object.keys(ratio).sort(function(a,b){return ratio[a]-ratio[b]})

const sortedRatio = {};
for (let key of sortedRatioKeys) {
    sortedRatio[key] = ratio[key]
}

let n = 53;
let amount = 0;

for (let r in sortedRatio) {
    let packAmount = disc[r];
    let packPrice = money[r];

    if (n === 0) {
        break
    }

    if( n / packAmount >= 1) {
        amount = amount + packPrice*(Math.floor(n / packAmount))
        n = n - (packAmount * Math.floor(n / packAmount))
    }


}

console.log('Amount : ', amount)