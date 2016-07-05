$(document).ready(function() {
  console.log('First?');

  // Selectors
  // Class and ID
  // $('#example').css('background-color', 'yellow');
  // $('.inner-list').css('background-color', 'red');

  // direct descendants
  // $('div > h2').css('background-color', 'purple');

  // Multiples
  // $('.my-list li p, #example li p').css('background-color', 'pink');

  // Find
  // $('li').find('p').css('background-color', 'orange');

    // Traversal/first and last
  // $('ul').last().css('background-color', 'pink');
  // $('p').parent().css('background-color', 'blue');

  // chaining
  // $('.my-list p').last().parent().css('background-color', 'peachpuff');

  // Psuedo Selectors
  $('p:even').css('background-color', 'green');



});

console.log('When does this happen?');
