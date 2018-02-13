$(() => {
  console.log('JS Loaded');

  const word = ['c', 'a', 't'];
  const $alphabetLi = $('.alphabetLi');
  const $guess = $('.guess');


  // myButtons.forEach(button, i);
  // for (var i = 0; i < $alphabetLi.length; i++) {
  $alphabetLi.on('click', (e) => {
    word.forEach((word) => {
      if (e.target.innerHTML === word) {
        console.log('hello');
        $guess.text(word);
      }
    });
  });

});
