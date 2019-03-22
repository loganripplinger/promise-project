module.exports = {
  validate: (object, keys) => {
    // Can be rewritten into a single some/for loop
    const result = keys.map(key => {
      if (object.hasOwnProperty(key)) {
        return true;
      } else {
        return false;
      }
    });
    return !result.some(el => el === false);
  }
};
