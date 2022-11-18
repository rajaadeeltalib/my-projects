function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    if(color == '#000000')
    {
        for(let elm of txt)
        {
            elm.style.color = "White";
        }        
    }
    else if(color == '#008000')
    {
        for(let elm of txt)
        {
            elm.style.color = "White";
        }
    }
    else if(color == '#0000FF')
    {
        for(let elm of txt)
        {
            elm.style.color = "White";
        }
    }
    else if(color == '#800080')
    {
        for(let elm of txt)
        {
            elm.style.color = "White";
        }
    }
    else if(color == '#800000')
    {
        for(let elm of txt)
        {
            elm.style.color = "White";
        }
    }
    else
    {
        for(let elm of txt)
        {
            elm.style.color = "black";
        }
    }
}