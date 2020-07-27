const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Corecto!!!!");
    } else {
      reject("Whoooo nooo funcionno!!!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Trueeeeeee!!!!!!!");
      }, 2000);
    } else {
      const error = new Error("Faloooooooooooo!!!!!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen, somethingWillHappen2])
  .then((response) => {
    console.log("Array of results ", response);
  })
  .catch((err) => {
    console.error(err);
  });
