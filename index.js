// promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
const myPromise = new Promise(res => {
  setTimeout(() => {
    res(5);
  }, 5000);
});

myPromise.then(value => {
  console.log(value);
});

console.log(5+6);


// fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const result = fetch('https://api.github.com/users/mikazakaryan');
result.then(fetchResult => {
  // https://en.wikipedia.org/wiki/JSON
  const bodyPromise = fetchResult.json();
  bodyPromise.then(result => {
    console.log(result);
  });
});