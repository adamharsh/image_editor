
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexbox from 'flexbox-react'
import Files from 'react-files'
var im=0;
var sx=[];
var sy=[];
var wx=[];
var wy=[];
var link;
class App extends Component {
  
  onFilesChange(files) {
  console.log(im);
   var len=files.length;
    im=im+1;
   var fullPath = files[len-1].preview.url;
   var canvas = document.getElementById('myCanvas');
   var context = canvas.getContext('2d');
   var imageObj = new Image();
   imageObj.onload = function() {
    if(im===1){
      sx[0]=5+(len*10);
      sy[0]=5+(len*10);
      wx[0]=200;
      wy[0]=200;
    }
    else if(im===2){
      sx[1]=5+(len*10);
      sy[1]=5+(len*10);
      wx[1]=200;
      wy[1]=200;
    }
    else if(im===3){
      sx[2]=5+(len*10);
      sy[2]=5+(len*10);
      wx[2]=200;
      wy[2]=200;
    }
    else if(im===4){
      sx[3]=5+(len*10);
      sy[3]=5+(len*10);
      wx[3]=200;
      wy[3]=200;
    }
   context.drawImage(imageObj, 5+(len*10), 5+(len*10),canvas.width/2,canvas.height/2);
      };
imageObj.src=fullPath;
imageObj.width="200px";
imageObj.height="200px";

console.log(im);
  }
handleClick() {
    //e.preventDefault();
    console.log('The link was clicked.');
    var url=document.getElementById("url");
    console.log(url.value);
    var fullPath=url.value;
    var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
        if(im===1){
      sx[0]=5+(3*10);
      sy[0]=5+(3*10);
      wx[0]=200;
      wy[0]=200;
    }
    else if(im===2){
      sx[1]=5+(3*10);
      sy[1]=5+(3*10);
      wx[1]=200;
      wy[1]=200;
    }
    else if(im===3){
      sx[2]=5+(3*10);
      sy[2]=5+(3*10);
      wx[2]=200;
      wy[2]=200;
    }
    else if(im===4){
      sx[3]=5+(3*10);
      sy[3]=5+(3*10);
      wx[3]=200;
      wy[3]=200;
    }
        context.drawImage(imageObj, 5+(3*10), 5+(3*10),canvas.width/2,canvas.height/2);
      };
      imageObj.src=fullPath;
      imageObj.width="200px";
      imageObj.height="200px";
      url.value="";

  }
  addText(){
      console.log('Text is added');
      var data=document.getElementById("text");
      var text=data.value;
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.font = "30px Arial";
      ctx.fillText(text,1,30);
      data.value="";
  }
  Enlarge(){
    var no=document.getElementById("im_no");
    var im_no=no.value;
    console.log(im_no);
    if(im_no==="1"){

      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[0],sy[0],wx[0],wy[0]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData.width);
       }
       wx[0]=wx[0]+5;
       wy[0]=wy[0]+5;
       
       ctx.putImageData(imgData,sx[0],sy[0],sx[0],sy[0],wx[0],wy[0]);
      // ctx.drawImage(imgData,sx[0],sy[0]);

       console.log(imgData);
    }
    else if(im_no==="2"){
         var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[1],sy[1],wx[1],wy[1]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData);
       }
       wx[1]=wx[1]+5;
       wy[1]=wy[1]+5;
      
       ctx.putImageData(imgData,sx[1],sy[1],sx[1],sy[1],wx[1],wy[1]);
       console.log("done");
    }
    else if(im_no==="3"){
         var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[2],sy[2],wx[2],wy[2]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData);
       }
       wx[2]=wx[2]+5;
       wy[2]=wy[2]+5;
       ctx.putImageData(imgData,sx[2],sy[2],wx[2],wy[2]);
    }else if(im_no==="4"){
       var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[3],sy[3],wx[3],wy[3]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData);
       }
       wx[3]=wx[3]+5;
       wy[3]=wy[3]+5;
       ctx.putImageData(imgData,sx[3],sy[3],wx[3],wy[3]);
    }
    
  }
  small(){
     var no=document.getElementById("im_no");
    var im_no=no.value;
    console.log(im_no);
    if(im_no==="1"){

      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[0],sy[0],wx[0],wy[0]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData);
       }
       wx[0]=wx[0]-5;
       wy[0]=wy[0]-5;
       ctx.putImageData(imgData,sx[0],sy[0],sx[0],sy[0],wx[0],wy[0]);

    }
    else if(im_no==="2"){
         var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[1],sy[1],wx[1],wy[1]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData);
       }
       wx[1]=wx[1]-5;
       wy[1]=wy[1]-5;
       ctx.putImageData(imgData,sx[1],sy[1],sx[1],sy[1],wx[1],wy[1]);
    }
    else if(im_no==="3"){
         var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[2],sy[2],wx[2],wy[2]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData);
       }
       wx[2]=wx[2]-5;
       wy[2]=wy[2]-5;
       ctx.putImageData(imgData,sx[2],sy[2],sx[2],sy[2],wx[2],wy[2]);
    }else if(im_no==="4"){
       var canvas = document.getElementById('myCanvas');
      var put= canvas.getContext('2d');
       var imgData = ctx.getImageData(sx[3],sy[3],wx[3],wy[3]);
       if(imgData){
        console.log("DATA RECEIVED");
        console.log(imgData);
       }
       wx[3]=wx[3]-5;
       wy[3]=wy[3]-5;
       ctx.putImageData(imgData,sx[3],sy[3],sx[3],sy[3],wx[3],wy[3]);
    
  }
}
download(){
                var canvas = document.getElementById("myCanvas");
                console.log(canvas);
                var image = canvas.toDataURL();
                console.log(image);
                link=image;
                var a=document.getElementById("save");
                a.href=image;
}
pending(){
  alert("Sorry this and some bugs are pending to be solved because of insufficient time. It took me larger time because it was my very first on REACT");
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Image Editor</h1>
        </header>
        <Flexbox flexDirection="row" className="flx" alignItems="center">
          <Flexbox className="side_bar" flexGrow="1" justifyContent="center">
            <ul>
              <li><a onClick={this.download} download id="save">Save</a></li>
              <li><Files
                     className='files-dropzone'
                     accepts={['image/png', 'image/*']}
                     multiple
                     onChange={this.onFilesChange}
                     maxFiles={4}
                     maxFileSize={10000000}
                     minFileSize={0}
                     clickable
                    >
          Insert Images
        </Files></li>
              <li><input type="text" id="url" placeholder="Enter Image URL"/><button onClick={this.handleClick}>Load Image</button></li>
              <li><input type="text" id="text" placeholder="Enter Text"/><button onClick={this.addText}>Add Text</button></li>
              <li><input type="text" id="im_no" placeholder="Enter image no eg:1"/><button onClick={this.Enlarge}>Enlarge</button>
              <button onClick={this.small}>Small</button></li>
              <li><a onClick={this.pending}>Crop</a></li>
              <li><a onClick={this.pending}>Rotate</a></li>
              <li><a onClick={this.pending}>Flip</a></li>
              
            </ul>
          </Flexbox>
          <Flexbox className="canvas" flexGrow="1" flexDirection="column">
             <Flexbox element="h1" justifyContent="center">Canvas</Flexbox>     
              <Flexbox element="canvas" flexGrow="1" className="canvass" id="myCanvas">

              </Flexbox>
            
          </Flexbox>
        </Flexbox>
        <div className="files">
        
      </div>
      </div>
    );
  }
}

export default App;
