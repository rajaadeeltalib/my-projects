let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function(){
    let text = this.value;   
    text = text.toUpperCase();
    this.value = text;
    let char = text.length;
    
    document.getElementById("char").innerHTML = char;

    text = text.trim();    
    
    let words = text.split(" ");
    let cleanlist = words.filter(function(elm){
        return elm != "";
    });
    document.getElementById("word").innerHTML = cleanlist.length;

})