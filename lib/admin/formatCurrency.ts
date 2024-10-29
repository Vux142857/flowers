export const formatNumberWithCommas = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Example usage:
// const formattedNumber = formatNumberWithCommas(100000);
// console.log(formattedNumber); // Output: "100,000"
