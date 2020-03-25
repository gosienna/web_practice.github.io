//script for creating canvas
class plot{
   constructor(id,data,size){
     //variable to be used withing plot
     this.id=id;
     this.width=size[0];
     this.height=size[1];
     this.pad=10;//padding for the plot
     this.data=data;
     this.x_list=[];
     this.y_list=[];

     var canvas = document.createElement('canvas');
     canvas.id = id;
     canvas.width = this.width;
     canvas.height = this.height;
     canvas.style.zIndex = 8;
     //canvas.style.position = "absolute";
     canvas.style.border = "5px solid #a3a3c2";
     var body = document.getElementsByTagName("body")[0];
     body.appendChild(canvas);
     //draw draw
     //auto scaling the data
     var interval=(this.width)/(data.length-1);
     var y_scale=(this.height-this.pad*2)/(Math.max(...data)-Math.min(...data));
     var arry_sum=function(arr){
       return arr.reduce(function(a,b){
       return a + b
       }, 0);
     }
     var y_sum=arry_sum(data)
     var y_mean=(y_sum)/data.length;

     var ctx = canvas.getContext('2d');
     for(let i=0;i<data.length;i++){
       var x=i*interval;
       this.x_list.push(x);//save the x cordinate
       var y=-(data[i]-y_mean)*y_scale+this.height-this.pad+(Math.min(...data)-y_mean)*y_scale
       this.y_list.push(y)//save the y cordinate
       ctx.fillRect(x,y,2,2);
       //console.log(x,y);
     }
    //console.log(Math.max(...data)-Math.min(...data));
    //console.log('scale',y_scale);
    //console.log('mean',y_mean);
    //console.log('max',Math.max(...data));
    //console.log('min',Math.min(...data))
    //console.log('sum',y_sum)
    //console.log('x',this.x_list)

   }
   get get_id(){
     return this.id;
   }
   get redraw(){
     var x_list=this.x_list
     var y_list=this.y_list
     var canvas=document.getElementById(this.id)
     var ctx=canvas.getContext('2d')
     ctx.clearRect(0,0,this.width,this.height)
     for(let i=0;i<x_list.length;i++){
       ctx.fillRect(x_list[i]+1,y_list[i],2,2)
       x_list[i]=x_list[i]+1;
       if(x_list[i]>=this.width){   //slide back if signal reach the end
           x_list[i]=x_list[i]-this.width;
       }
     }

   }

}

class plot_fixed_y{
  constructor(id,data,size,y_lim){
    this.id=id;
    this.width=size[0];
    this.height=size[1];
    this.y_lim=y_lim; //set the y axis value of the plot
    this.pad=10;//padding for the plot
    this.data=data;
    this.x_list=[];
    this.y_list=[];
  var canvas = document.createElement('canvas');
  canvas.style.border = "5px solid #a3a3c2";
  var body = document.getElementsByTagName("body")[0];
  canvas.id = id;
  canvas.width = this.width;
  canvas.height = this.height;
  canvas.style.zIndex = 8;
  //canvas.style.position = "absolute";
  canvas.style.border = "5px solid #a3a3c2";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);
  //auto scaling the data
  var interval=(this.width)/(data.length-1);
  var y_scale=(this.height-this.pad)/(Math.max(...data)-Math.min(...data))*(Math.max(...data)-Math.min(...data))/(this.y_lim[1]-this.y_lim[0]);
  var arry_sum=function(arr){
    return arr.reduce(function(a,b){
    return a + b
    }, 0);
  }
  var y_sum=arry_sum(data)
  var y_mean=(y_sum)/data.length;

  var ctx = canvas.getContext('2d');
  for(let i=0;i<data.length;i++){
    var x=i*interval;
    this.x_list.push(x);//save the x cordinate
    var y=-(data[i]-y_mean)*y_scale+this.height-this.pad+(Math.min(...data)-y_mean)*y_scale
    this.y_list.push(y)//save the y cordinate
    ctx.fillRect(x,y,2,2);
    //console.log(x,y);
  }
  }
}
