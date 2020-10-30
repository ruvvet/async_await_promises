// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?

// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json())
// .then((json) => {console.log(json);
//     console.log('I should log after the data!')})

//await keeps code from executing to the next line until promise is fulfilled

// async function exercise1() {
//     // putting await in front of the fetch/async operation >>> await until fetch is done getting data, then save to a var
//     console.log('I should log before the data!');
//     // const res === .then(res) =>...
//     // await for res and assign to var
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
//     //.then((res) => res.json())

//     // const json ==== .then(json)
//     //await json, then save to json var
//     const json = await res.json();
//     // .then((json) => {console.log(json);
//         // console.log('I should log after the data!')})
//     console.log(json);
//     console.log('I should log after the data!');

// }

// exercise1();

    //^^ to run this, we need to wrap in a function with async


// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {console.log(json); console.log('I should be between the cats and dogs');})

// fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
// .then((res) => res.json()).then((json) => {console.log(json); console.log('I should be last');})

// async function exercise2() {
//     console.log('I should be before the cats data');

//     const res1 = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     const json1 = await res1.json();
//     console.log(json1);
//     console.log('I should be between the cats and dogs')




//     const res2 = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no');
//     const json2 = await res2.json();
//     console.log(json2);
//     console.log('I should be last')


// }

// exercise2();


//PROMISES
// need promises to work with delayed operations
// fetch returns a promise
// fetch consumes a promise
//.then//.catch ===> consume

// promise is a class
// pass a function into the promise ===>>> this is the executor
// executor takes 2 arguments (resolve, reject)
//invoke either reoslve/reject inside


const successPromise = new Promise(function(resolve, reject){
    setTimeout(resolve, 3000);

        // setTimeout(function() {
    //     resolve(); //puts promise in fulfilled state
    //   }, 3 * 1000);
})


const failPromise = new Promise(function(resolve, reject){
    setTimeout(reject, 3000);
})


// all promises exist in one of 3 possible states
    // pending...
    // fulfilled
    // rejected


console.log(successPromise);  ///happens right away === pending

setTimeout(function() {
    console.log(successPromise); /// success after promise is fulfilled
  }, 4000);

  setTimeout(function() {
    console.log(failPromise);  // after promise is reject
  }, 4000);



  const thing = 11;
const conditionalPromise = newPromise(function(resolve, reject){
    if (thing > 10) {resolve('this goes into .then')}
    else {reject('this goes into .catch')}
})


//consuming the promise

conditionalPromise.then((res)=>console.log(res)).catch((err)=>console.error(err))


// fetch is a function that returns a promise
// fetch("url") >> this is a promise instance with .then.catch chains
//building our own fetch

function myFetch(url){
    const myPromise = new Promise(function(resolve, reject){
        //get data from api url
        const webData = getData();
        if (webData.statusCode < 400){
            // STATUS CODES
            //2xx SUCCESS
            //3xx REDICRECT
            //4xx client error with request
            //5xx server issues
            resolve(webData); //if success, return web data
        } else if (400 <= webData.statusCode <=599) {
            reject('you got an error');
        }

    return myPromise

    //function that returns a promise has to construct it first

    })

}

myFetch('url').then(...).catch(...);

///

