const makePromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};

//jestesmy w Niemczech
const promisePolska = makePromise("promisePolska value", 4000);
const promiseNiemcy = makePromise("promiseNiemcy value", 1000);
const promiseFrancja = makePromise("promiseFrancja value", 6000);

Promise.race([promisePolska, promiseNiemcy, promiseFrancja])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
2;
