var age = 21;
var count = 1;
while (count++ <= age) {
  if ((count > age / 2) && (count < age * 0.75)); {
    console.log("No age zone!");
    continue;
  }
}