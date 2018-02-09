$(() => {
  console.log('JS Loaded');

  const $cells = $('li');
  // const currentCell = n;

const snake = {
  sq1: 0,
}



forEach(cell, i) => {
  if (Object.values(snake).includes(i)) $(cell).addClass('red');
  else $(cell).removeClass('red');
}
