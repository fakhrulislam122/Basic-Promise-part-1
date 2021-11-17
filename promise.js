function task1() {
  return new Promise((resolve, reject) => {
    resolve("completed task 1");
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    resolve("completed task 2");
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    resolve("completed task 3");
  });
}

function task4() {
  return new Promise((resolve, reject) => {
    resolve("completed task 4");
  });
}

// async function newf() {
//   const a = await task1();
//   const b = await task2(a);
//   console.log(b);
// }

// newf();

async function handlePromise() {
  try {
    const a = await task1();
    const b = await task2();
    const c = await task3();
    const d = await task4();
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("final");
  }
}

handlePromise();
