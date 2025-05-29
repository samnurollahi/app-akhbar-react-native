export default function formatNumber(number) {
  let numberString = number.toString();
  let formattedNumber = "";
  let counter = 0;

  for (let i = numberString.length - 1; i >= 0; i--) {
    formattedNumber = numberString[i] + formattedNumber;
    counter++;
    if (counter % 3 === 0 && i !== 0) {
      formattedNumber = "," + formattedNumber;
    }
  }

  return formattedNumber;
}
