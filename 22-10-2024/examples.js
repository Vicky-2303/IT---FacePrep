var b=false;
var t1;
var t2;
var total='';
var op='';
function on(){
   var a=document.getElementById("inputs");
   a.placeholder="Enter the value";
   b=true;
   a.disabled=false;//used to revoke the disable the text in input box
}
function off(){
  window.alert("The calculator is OFF");
  var c=document.getElementById("inputs");
  c.value="";//used to remove text in input tag.
  c.placeholder="";
  b=false;
  c.disabled=true;//used to disable the text in input box
  
}

function addoperation(){
  if(b==true){
  var t=document.getElementById("inputs");
  t1=Number(t.value);
  t.value='';
  op='+';
  }

}
function minusoperation(){
  if(b==true){
  var t=document.getElementById("inputs");
  t1=Number(t.value);
  t.value='';
  op='-';
  }

}
function multiplyoperation(){
  if(b==true){
  var t=document.getElementById("inputs");
  t1=Number(t.value);
  t.value='';
  op='*';
  }

}
function divideoperation(){
  if(b==true){
  var t=document.getElementById("inputs");
  t1=Number(t.value);
  t.value='';
  op='/';
  }
}

function equals(){
  if(b==true){
  var t=document.getElementById("inputs");
  t2=t;
  if(op=='+'){
    t.value=t1+Number(t2.value);//way to execute in the textbox.
  
  }
  else if(op=='-'){
    t.value=t1-Number(t2.value);
  }
  else if(op=='*'){
    t.value=t1*Number(t2.value);
  }
  else if(op=='/'){
    t.value=t1/Number(t2.value);
  }
}
}

function reset(){
  if(b==true){
  var c=document.getElementById("inputs");
  c.value="";
  c.placeholder='Enter the value';
  }
}

function del(){
  if(b==true){
    var c=document.getElementById("inputs");
    c.value="";
    c.placeholder='0';
  }
}

function inputs(){
  if(b==true){
    var c=document.getElementById("inputs");
    c.disabled=false;

    //c.readonly=true;
  }
  else{
    var c=document.getElementById("inputs");
    c.disabled=true;
  }
}
function ac(){
  del();
}
function one(){
  if(b==true){

  }
}