var Links = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color =color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.background = color;
    },
}   

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'dark'){
        Body.setBackgroundColor('rgb(27,26,26)');
        Body.setColor('white');
        self.value = 'white';
        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black'); 
        self.value = 'dark';       
        Links.setColor('green');
    }
}