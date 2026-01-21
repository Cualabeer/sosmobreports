document.getElementById('qrUpload').onchange = function(e){
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = function(){
    let img = new Image();
    img.onload = function(){
      let canvas = document.createElement('canvas');
      canvas.width = img.width; canvas.height = img.height;
      let ctx = canvas.getContext('2d');
      ctx.drawImage(img,0,0);
      let code = jsQR(ctx.getImageData(0,0,canvas.width,canvas.height).data,canvas.width,canvas.height);
      if(code){
        alert("Decoded QR: "+code.data);
        try{
          let job = JSON.parse(code.data);
          jobs.push(job); loadJobs();
        }catch(err){alert("Invalid QR content");}
      }else alert("No QR code detected");
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
};