// promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// const myPromise = new Promise(res => {
//   setTimeout(() => {
//     res(5);
//   }, 5000);
// });

// myPromise.then(value => {
//   console.log(value);
// });

// console.log(5+6);


// fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// const result = fetch('https://api.github.com/users/mikazakaryan');
// result.then(fetchResult => {
//   // https://en.wikipedia.org/wiki/JSON
//   const bodyPromise = fetchResult.json();
//   bodyPromise.then(result => {
//     console.log(result);
//   });
// });

// assignment
const repoNameElementMaker = (index, name) => {
  const newElement = document.createElement('p');
  newElement.innerHTML = `${index}. ${name}`;
  newElement.className = 'repo-name';

  return newElement;
};

// const orgUrl = 'https://api.github.com/users/ISTC-accelerator-5-2';
// fetch(orgUrl)
// .then(res => {
//   res.json()
//   .then(data => {
//     const repoUrl = data.repos_url;
//     fetch(repoUrl)
//     .then(res => {
//       res.json()
//       .then(data => {
//         data.forEach((repo, index) => {
//           document.body.appendChild(
//             repoNameElementMaker(index + 1, repo.name)
//           );
//         });
//       });
//     });
//   });
// });

// Error handling
// const a = 5;
// a = 7;
// console.log('hello');

// throw
// const sumOfNumbers = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('sumOfNumbers arguments should be numbers!!!');
//   }

//   return a + b;
// };

// const res = sumOfNumbers('a', 5);

// promise errors
// const myErrorPromise = new Promise((res, rej) => {
//   const n = Math.random();
//   console.log(n);
//   if (n > 0.5) {
//     res(n);
//   } else {
//     rej('n <= 0.5');
//   }
// });

// myErrorPromise
// .then(value => {
//   console.log('resolved', value);
// })
// .catch(err => {
//   console.log('rejected', err);
// });

// try catch
// try {
//   const a = 6;
//   a = 7;
// }
// catch(e) {}

// console.log('hello');

// NO INTERNET SIMULATION
// fetch('https://api.github.com/users/ISTC-accelerator-5-2')
// .catch(err => {
//     console.log(err);
// });

// assignment problem 1
// const filter = [true, false, '', 'hello', {}, [], null, undefined];
// const collection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// const first = [];
// const second = [];

// filter.forEach((f, i) => {
//   if (f)
//     first.push(collection[i]);
//   else 
//     second.push(collection[i]);
// });

// console.log(first);
// console.log(second);

// async/await syntax

const fetchRepos = async () => {
  const orgUrl = 'https://api.github.com/users/ISTC-accelerator-5-2';

  try {
    const fetchResult = await fetch(orgUrl);
    const orgData = await fetchResult.json();
    const fetchRepoResult = await fetch(orgData.repos_url);
    const repos = await fetchRepoResult.json();

    repos.forEach((repo, index) => {
      document.body.appendChild(
        repoNameElementMaker(index + 1, repo.name)
      );
    });
  }
  catch (e) {
    document.write('<h1 style="color: red;">Error</h1>');
  }
};

fetchRepos();
console.log('hello');