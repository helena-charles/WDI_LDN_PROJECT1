$(() => {
  console.log('JS Loaded');

  const word = ['c', 'a', 't'];
  const $alphabetLi = $('.alphabetLi');
  const $guess = $('.guess');


  $alphabetLi.on('click', (e) => {
    const text = e.target.innerHTML;
    const indexInWord = word.indexOf(text);
    if (indexInWord !== -1) {
      $guess.eq(indexInWord).text(text);
    }
  });

});
