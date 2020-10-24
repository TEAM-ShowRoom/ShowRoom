let room = {
    AssassinsCreedValhalla :'page2.html',
    InTime : 'InTime.html'
}



function search (){
    var text = document.querySelector(".control").value;
    let x;
    for (let key in room){
        if (text === key){
            console.log(x)
            x=room[key];
            location.assign (x);
        }
        
    }
}
