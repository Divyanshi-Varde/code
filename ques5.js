function divideIntoChunks(chunkSize) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i <= data.length; i += chunkSize) {
    return data[i + chunkSize].slice(0, chunkSize);
  }
}

divideIntoChunks(2);
