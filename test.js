let timer = setTimeout(() => {
  console.log("콘솔에 1 찍기");
}, 1000);

clearTimeout(timer);
console.log("콘솔에 2 찍기");