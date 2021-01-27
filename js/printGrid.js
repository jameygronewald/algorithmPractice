const generateGrid = gridSize => {
  for (let i = 0; i < gridSize; i++) {
      let j = 0;
      let line = '';
      let startChar = !(i % 2) ? 'O' : ' ';

      while (j < gridSize) {
          if (j % 2) line += startChar;
          else line += startChar === 'O' ? ' ' : 'O';
          j++;
      }
      console.log(line);
  } 
}

generateGrid(8);
generateGrid(20);