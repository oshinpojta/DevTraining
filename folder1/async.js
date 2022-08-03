console.log('person 1 shows tickets');
console.log('person 2 shows tickets');

const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('husband: lets go in');
    console.log('wife: i am hungry');
    return new Promise((resolve, reject)=>{
        resolve(`${t} , popcorn`);
    })
})

const getButter = getPopcorn.then((t)=>{
    console.log("Need Butter");
    return new Promise((resolve, reject)=>{
        resolve(`${t} , Butter`);
    })
});

let getColdDrinks = getButter.then((t)=>{
    console.log("Getting Cold Drinks");
    return new Promise((resolve,reject)=>{
        resolve(`${t} Cold Drinks`);
    })
});

getColdDrinks.then((t)=>console.log(t));

console.log('person 4 shows tickets');
console.log('person 5 shows tickets');

const preMovie = async () => {

    console.log(" --------------------------PREMOVIE ASYNC -------------------------");
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('Tickets')},3000)
    })
    const getPopcorn = new Promise((resolve, reject)=>resolve(' Popcorn'));
    const getButter = new Promise((resolve, reject)=>resolve(`got ${popcorn} Butter`));
    const getColdDrinks = new Promise((resolve, reject)=>{resolve(" Cold Drinks");})

    let ticket = await promiseWifeBringingTicks;
    let [popcorn, Butter, colddrinks] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
    // runs after await
    console.log('husband: lets go in');
    console.log('wife: i am hungry');
    return Butter+ticket+colddrinks;

}

preMovie().then((t)=>{console.log(t)});