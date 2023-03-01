const checkSpam = (str) => {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toUpperCase().includes("XXX")
  ) {
    return true;
  }

  return false;
};

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
