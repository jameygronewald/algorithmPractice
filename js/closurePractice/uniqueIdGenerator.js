const getUniqueId = (() => {
  let nextGeneratedId = 0;
  return () => {
    const generatedId = `uid-${nextGeneratedId}`;
    nextGeneratedId++;
    return console.log(generatedId);
  };
})();

getUniqueId();
getUniqueId();
getUniqueId();
