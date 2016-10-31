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
