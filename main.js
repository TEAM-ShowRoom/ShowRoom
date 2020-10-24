let room = {
    AssassinsCreedValhalla :'page2.html'
}



function search (){
    var text = document.querySelector(".control").value;
    let x;
    for (let key in room){
        if (text === key){
            console.log(x)
            x=room[key];
            console.log(x);
            location.assign (x);
        }
        else alert('we do not have this feature yet')
    }
}
