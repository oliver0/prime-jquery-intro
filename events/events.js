$(document).ready(function() {
    //event listeners
    $('#capt-america').on('click', appendIronman);
    // three parameters
    $('#container').on('click', '.ironman', ironmanClick);
    $('#container').on('click', '.thor', shout);

    // Keyboard events
    $(document).keypress(function(event) {
      // letter D
      if(event.which == 100) {
        // remove all generated thor class elements
        $('.thor').remove();
      }
    });

    function shout() {
      // demonstrate adding a class to only the given element
      $(this).addClass('clicked');
      alert("Avengers, assemble!");
    }

    function ironmanClick() {
      $('#container').append('<div class="thor">Thor!</div>');

    }

    function appendIronman() {
      $('#container').append('<button class="ironman">Ironman</button>');
      // demonstrate removing a class from all selected elements
      $('.thor').removeClass('clicked');
    }

});
