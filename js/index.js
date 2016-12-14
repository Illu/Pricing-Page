function discount(total, discount){
  return total - (total * (discount / 100));
}

function outputUpdate(quantity){
  var units = ['A', 'B', 'C'];
  var total = 0;
  $('#quantity').html(quantity);
  for (var i = 0; i < units.length; i++){
    if (quantity >= 50)
      $('#discount' + units[i]).html('15%');
    else
      $('#discount' + units[i]).html('0%');
    total = $('#unit' + units[i]).text().slice(1);
    total *= quantity;
    var dis = $('#discount' + units[i]).text().slice(0, -1);
    total = discount(total, dis).toFixed(2);
    $('#total' + units[i]).html('$' + total);
  }
}

$(document).ready(function(){
  var mobileMenuDisplay = true;
  var displayValue = 'none';
  $('#ham').on('click', function(e){
    mobileMenuDisplay = !mobileMenuDisplay;
    if (mobileMenuDisplay){
      displayValue = 'none';
      $('.title').css('margin-top', '80px');
    }
    else{
      displayValue = 'block';
      $('.title').css('margin-top', '300px');
    }
    $('.navTitle').css('display', displayValue);
  });
});
