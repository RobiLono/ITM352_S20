var age = 21;
var count = 1;
while (count++ <= age) {
  if ((count > age / 2) && (count < age * 0.75)); {
    console.log("don't ask how old i am!");
    process.exit();
  }
}