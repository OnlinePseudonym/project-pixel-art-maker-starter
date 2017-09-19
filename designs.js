// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let color = "#000000";

//Change the value of color depending on the users input
$('#colorPicker').change(function() {
  color = $(this).val();
});

//clear and create new grid based on user inputs when submit button is clicked
//allow users to click a data cell to alter it's background to the desired color.
$('#sizePicker').submit(function(evt) {
  evt.preventDefault();
  clearGrid();
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  makeGrid(height,width);
  $('td').click(function() {
    $(this).css("background-color",color);
  });
});

//function to clear grid
function clearGrid() {
  $('tr').remove();
}

//function to create grid with inputs for height and weight.
function makeGrid(h,w) {
  for (let rows = 0; rows < h; rows++) {
    $('#pixel_canvas').append('<tr></tr>');
    for (let columns = 0; columns < w; columns++) {
      $('tr').last().append('<td></td>');
    };
  }
}
