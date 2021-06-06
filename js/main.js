function getRandomIntInclusive(min,max) {
  if (min >= 0&&max > 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'вы можете использовать только положительные значения';
}

getRandomIntInclusive(-1,9);

function getRandomFractional(min,max,decimalPlaces) {
  if (min >= 0&&max > 0&&decimalPlaces>0) {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }
  return 'вы можете использовать только положительные значения';
}
getRandomFractional(5,99,3);
