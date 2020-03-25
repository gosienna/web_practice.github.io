function DFT(x_k){
  var k=x_k.length;
  var X_k_a=[];
  var X_k_b=[];
  var X_k_c=[];

  for(let n=0;n<k;n++){
      var sum_a=0;
      for(let i=0;i<k;i++){
        var sum_a=sum_a+x_k[i]*Math.cos(i*n*2*Math.PI/k);
      }
      X_k_a.push(sum_a);

      var sum_b=0;
      for(let i=0;i<k;i++){
        var sum_b=sum_b-x_k[i]*Math.sin(i*n*2*Math.PI/k);
      }
      X_k_b.push(sum_b);

      X_k_c.push(Math.sqrt(Math.pow(sum_a,2)+Math.pow(sum_b,2)));
  }
  var X_k=[X_k_a,X_k_b,X_k_c];
  return X_k;
}
