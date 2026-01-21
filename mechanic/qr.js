// Example: scan QR using camera or upload
async function scanQR(fileOrVideo){
  // decode using jsQR
  // load job info into jobs[]
}

// Customer generates QR
function generateQR(job){
  QRCode.toDataURL(`${JSON.stringify(job)}`,(err,url)=>{
    if(err)console.error(err);
    else console.log('QR ready:',url);
  });
}