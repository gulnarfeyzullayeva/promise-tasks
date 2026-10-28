// Task-1
function sehrliQutuAc(number) {
    return new Promise ((resolve, reject)=>{
        if (number===7) {
            resolve("Təbriklər, sehrli rəqəmi tapdın! ✨");
        } else {
            reject("Təəssüf ki, səhv rəqəm! ❌");
        }
    })
}
sehrliQutuAc(7)
    .then(respond=>{
    console.log(respond);
    })
    .catch(error=>{
    console.log(error);
    })


// Task-2
async function balYoxla(bal) {
    try{
        if(bal<0 || bal>100){
            throw new Error("Yanlış bal daxil edildi!");
        }
        if(bal>=50){
            return "İmtahandan keçdin! 🎉";
        } else {
            return "Kəsildin! 📚";
        }
    }
    catch{
        console.log(`Xəta baş verdi: ${Error}`);

    }
}
console.log(balYoxla(55));


// Task-3
function sifarisVer(metbexHazirdirmi) {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(metbexHazirdirmi===true){
                resolve(("Sifarişiniz hazırdır, nuş olsun! 🍕");
            }
            else {
                reject("Üzr istəyirik, mətbəx bağlandı! 🍳");
            }
        })
    })
}
async function anaProqram() {
    try{
        // await???
    }
    catch((error)=>{
        console.log(error); 
    })
}


// Task-4
const qardash1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Əli finişə çatdı! 🏃‍♂️");
    }, 2000)
})
const qardash2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Vəli finişə çatdı! 🏃‍♂️");
    }, 1000)
})
const qardash3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Pirməmməd finişə çatdı! 🏃‍♂️");
    }, 3000)
})
Promise.all([qardash1, qardash2, qardash3])
    .then((result)=>{
        console.log(result);
    })


// Task-5
const tapşırıq1 = new Promise((resolve, reject)=>{
    resolve("1-ci tapsiriq ugurla tamamlandi!");
})
const tapşırıq2 = new Promise((resolve, reject)=>{
    reject("2-ci tapşırıqda xəta baş verdi! ⚠️");
})
const tapşırıq3 = new Promise((resolve, reject)=>{
    resolve("3-cu tapsiriq ugurla tamamlandi!");
})
Promise.all([tapşırıq1, tapşırıq2, tapşırıq3])
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })