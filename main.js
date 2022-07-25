function screenshot() {
  let colaborador = document.getElementById("colaborador");
  console.log(colaborador);
  html2canvas(document.getElementById('capture')).then(function (canvas) {
    //document.body.appendChild(canvas);
    simulateDownloadImageClick(canvas.toDataURL(), `${colaborador.value}.png`);
  })
}


function simulateDownloadImageClick(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download !== 'string') {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForFirefox(clickLink, link);
  }
}

function clickLink(link) {
  link.click();
}

function accountForFirefox(click) { // wrapper function
  let link = arguments[1];
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
}