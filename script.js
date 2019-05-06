$("td").click(function(){
  $(this).css('background-color', 'blue');
  $(this).css('color', 'blue');

  var cellValue = $(this).text();
  var x = Number(cellValue[0]);
  var y = Number(cellValue[1]);

  console.log(x, y, cellValue);

  var x1, x2, x3, x4, x5, x6, x7, x8;
	var y1, y2, y3, y4, y5, y6, y7, y8;

	x1 = x6 = x - 1;
	x2 = x5 = x + 1;
	x3 = x4 = x + 2;
	x7 = x8 = x - 2;

	y1 = y2 = y + 2;
	y3 = y8 = y + 1;
	y4 = y7 = y - 1;
	y5 = y6 = y - 2;

	var arrx = [x1, x2, x3, x4, x5, x6, x7, x8];
  var arry = [y1, y2, y3, y4, y5, y6, y7, y8];
  
  console.log(arrx);
  console.log(arry);

  for (var i = 0; i <= 7; i++) {
    if (arrx[i] > 0 && arry[i] > 0 && arrx[i] <= 8 && arry[i] <= 8) {
      var identifier = "" + arrx[i] + arry[i];
      console.log(identifier);

      var cellToHighlight = document.getElementById(identifier);
      console.log(cellToHighlight);

      cellToHighlight.style.background = 'green';
      cellToHighlight.style.color = 'green';
    }
  }

  setTimeout("window.location.reload()",5000);

});