const sentence = "hello there from lighthouse labs ";
const sentArr = sentence.split('');

for (let i = 0; i < sentArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentArr[i]);
  }, 100 * i);
};

