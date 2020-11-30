import React from 'react';

import './Com.css';
let cDate=new Date();
cDate=cDate.getHours();
let value="";
const  Style={ };
if(cDate<=12)
{
    value="Good Morning";
    Style.color="green";
}
else if(cDate>12 && cDate<=15)
{
    value="Good Afternoon";
    Style.color="Yellow";
}
else if(cDate>15 && cDate<=19)
{
    value="Good Evening";
    Style.color="pink";
}
else
{
    value="Good Night";
    Style.color="black";
}
function Com(){
    return(
        

    <div className="set">
<h1>Hello Sir, <span style={Style}>{value}</span></h1></div>
    )
}
export default Com;