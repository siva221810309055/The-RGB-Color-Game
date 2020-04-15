var i; 
var h1=document.getElementById("h1");
var h2=document.getElementById("h2");
var easycount = 2;
var li1=document.getElementById("li1");
var li=document.getElementById("cl");
var c=array();
var color=pickedcolor();
var rgb=document.getElementById("change3");
rgb.textContent=color;
//selecting all squares
var squares=document.querySelectorAll(".sq1");
//generating get
function getrandomcolors(){
    //red
    var r=Math.floor(Math.random()*256);
    //green
    var g=Math.floor(Math.random()*256);
    //blue
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
for(i=0;i<3;i++)
{
    
    
       squares[i].style.background=c[i];
       squares[i].addEventListener("click",function()
   {  
        var clicked=this.style.background;
       console.log(clicked,color);
        if(clicked==color)
        {
            h1.style.background=this.style.background;
            h2.style.background=this.style.background;

        
        setTimeout( function ( ) { alert( "you choosed the right color.Try another one" ); }, 500 )
            setTimeout( function ( ) { location.reload(); }, 550);
        {
            for(i=0;i<3;i++)
            {
                squares[i].style.background=this.style.background;
            }
        }
    }
            
        else
        {
            this.style.background="rgb(0,0,0)";
            easycount--;
            li.textContent=easycount;
            if(easycount==0)
            {
                setTimeout( function ( ) { alert( "you failed to choose the right color.Try another one" ); }, 300 )
                setTimeout( function ( ) { location.reload(); }, 350);
                
            }
        }
        
    });
}
function array()
{
    var arr=[]
    for(i=0;i<3;i++)
    {
        arr.push(getrandomcolors());
    }
    return arr;
}
function pickedcolor()
{
    var random=Math.floor(Math.random() *c.length);
    return c[random];
}

