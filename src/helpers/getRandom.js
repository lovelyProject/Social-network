const generateToken = () => {
  let result = "";
  const str = "0123456789qwertyuiopasdfghjklzxcvbnm";
  for (let i = 0; i < 32; i++) {
    result += str[getRandom(0, str.length - 1)];
  }
  function getRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }
  return result;
};

export { generateToken };
