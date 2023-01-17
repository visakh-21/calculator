function display(data)
{
 txt.value=txt.value+data
}
function clearz()
{
   txt.value="" 
}

function equel()
{
    txt.value=eval(txt.value)
}
function backspace()
{
    data=txt.value
    txt.value=data.slice(0,-1)
}