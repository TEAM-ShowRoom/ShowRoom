let room = {
    AssassinsCreedValhalla :'page2.html'
}


var text = document.querySelector(".control").value;

function search (){
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
