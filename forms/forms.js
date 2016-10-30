$(document).ready(function() {
    var array = [];
    var titlesAppended = false;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // variable to determine if titles have been appended yet

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      // add the current values object to the global array
      array.push(values)
      console.log(array);

      // clear out inputs
      //$('#employeeinfo').find('input[type=text]').val('');

      // append title to DOM if they aren't there already
      if(titlesAppended == false){
        appendTitles();
      }
      //append employee info to DOM
      appendDom(values);
      console.log(calcTotalMonthlySalary(array));
      // append text that includes the total monly salary Expenditure and the text related to it
      appendTotalMonthlySalary();

    });

    $('#container').on('click', '.person', function(){
      $(this).addClass('clicked');
    });


    function calcTotalMonthlySalary(array){
      var total = 0;
      for (var i=0; i < array.length; i++){
        total += parseInt(array[i].employeeAnnualSalary);
      }
      return total;
    }

    function appendTotalMonthlySalary(){
      var text = "Monthly Salary Expenditure: " + calcTotalMonthlySalary(array);
      $('#monthlySalary').text(text);
    }

    function appendTitles(){
      $('#container').append('<h3>First Name</h3>'+
                            '<h3>Last Name</h3>'+
                            '<h3>ID</h3>'+
                            '<h3>Title</h3>'+
                            '<h3>Annual Salary</h3>');
      titlesAppended = true;
    }

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>' + empInfo.employeefirstname + '</p>'+
                 '<p>' + empInfo.employeelastname  + '</p>'+
                 '<p>' + empInfo.employeeId        + '</p>'+
                 '<p>'+empInfo.employeeJobTitle    + '</p>'+
                 '<p>'+empInfo.employeeAnnualSalary +'</p>');

      //below is some potential code introducing a delete button

      // $el.append('<div>'+'<p>' + empInfo.employeefirstname + '</p>'+
      //            '<p>' + empInfo.employeelastname  + '</p>'+
      //            '<p>' + empInfo.employeeId        + '</p>'+
      //            '<p>'+empInfo.employeeJobTitle    + '</p>'+
      //            '<p>'+empInfo.employeeAnnualSalary +'</p>'+ '<button>delete</button>'+'</div>');
    }


});
