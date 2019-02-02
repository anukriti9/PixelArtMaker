const table = $('#pixelCanvas');

var width, height, w, h, color;

$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

function makeGrid(h,w){
    $('tr').remove();
    for(let row=0; row<h; row++){
        table.append("<tr></tr>");
        for(let cell=0; cell<w; cell++){
            $('tr').last().append("<td></td>");
        }
    }
    
    $('td').click(function addColor(){
        color = $('#colorPicker').val();
        if( $(this).attr('style') ){
            $(this).removeAttr('style');
        }
        else{
            $(this).attr('style','background-color:' +color)
        }
    })    
}

function checkForBlank(){
    if( (document.getElementById('inputHeight').value == "") && (document.getElementById('inputWidth').value == "") ){
        alert('Please enter the size of the Grid')
        return false
    }
    else if(document.getElementById('inputWidth').value == ""){
        alert('Please enter the Grid Width')
        return false
    }
    else if(document.getElementById('inputHeight').value == ""){
        alert('Please enter the Grid Height')
        return false
    }
  
}







