$(document).ready(function() {
    //event listeners
    $('#capt-america').on('click', appendIronman);
    // three parameters
    $('#container').on('click', '.ironman', ironmanClick);
    $('#container').on('click', '.thor', shout);

    function shout() {
      $(this).addClass('clicked');
      alert("Avengers, assemble!");
    }

    function ironmanClick() {
      $('#container').append('<div class="thor">Thor!</div>');

    }

    function appendIronman() {
      // do stuff
      $('#container').append('<button class="ironman">Ironman</button>');
      $('.thor').removeClass('clicked');
    }

});
