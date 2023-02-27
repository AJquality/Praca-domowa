const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 2000);
});

console.log(promise);
