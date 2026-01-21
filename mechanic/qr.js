function scanQR(){
  document.getElementById('qrUpload').click();
}

document.getElementById('qrUpload').addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(){
    const img = new Image();
    img.onload = function(){
      const canvas = document.createElement('canvas');
      canvas.width=img.width; canvas.height=img.height;
      const ctx=canvas.getContext('2d'); ctx.drawImage(img,0,0);
      const code = jsQR(ctx.getImageData(0,0,canvas.width,canvas.height).data, canvas.width, canvas.height);
      if(code){
        alert('QR detected: '+code.data);
        const job = jobs.find(j=>j.vehicle.replace(/\s+/g,'_')===code.data);
        if(job) startJob(job);
        else alert('Job not found!');
      } else alert('No QR detected');
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
});