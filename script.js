//var baseURL = 'https://github.com/Falx777/my/blob/main/alfabetoImg/'
var baseURL = 'meusCaracteres/'
var url = []

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var dbImagesLetras = []
//var newImage = new Image(); 

function converterTexto(){
  var textoBase = ((document.getElementById("texto").value).replace(/\n/g," ")).split('');
    
  for(i=0; i < textoBase.length; i++){
    
    var minus = "_"
    var caractere = ""
    if(textoBase[i] != " "){
      if (textoBase[i].toUpperCase() == textoBase[i]){
        minus = ""
      }
      switch (textoBase[i]) {
  case '.':
    caractere = 'poin'
    break;
        case '<':
          caractere = 'menor'
    break;
       case '>':
          caractere = 'maior'
    break;        
        case '?':
          caractere = 'in'
    break;        
        case '!':
          caractere = 'excl'
    break;
        case ':':
          caractere = 'dp'
    break;
          case '/':
          caractere = 'bar'
    break;
          case '*':
          caractere = 'as'
    break;
          case 'ç':
          caractere = 'ccid'
    break;
  default:
    caractere = textoBase[i];
      }

      //url.push(baseURL +caractere + minus+'.png?raw=true')
      url.push(baseURL +caractere + minus+'.png')
    }else{
      url.push(" ")
    }
  }
  
  for(i=0; i < textoBase.length; i++){
    var newImage = new Image(); 
    if(url[i] != " "){
      newImage.src = url[i]
      dbImagesLetras.push(newImage)
    }else{
      newImage.src = "https://"
       dbImagesLetras.push(newImage)
    }  
  }
  var allLoaded = 0;
  var allImages = 0;
  for (k=0; k < dbImagesLetras.length; k++){
    if(dbImagesLetras[k].src != "https:"){
      allImages ++;
      dbImagesLetras[k].onload = () => {
        allLoaded ++;
        if(allLoaded == allImages){
            imagePrint() 
          }
        } 
      }
    }
  
  function imagePrint(){
    var textoBase = (document.getElementById("texto").value).split('');
    for(i=0; i < dbImagesLetras.length; i++){
      //console.log(dbImagesLetras)      
      var spaceLine = i;
      var breakLine = 0;
      if (i >=50 && i < 100){
        breakLine = 45
        spaceLine = i - 50
      }
      if (i >=100 && i < 150){
        breakLine = 85
        spaceLine = i - 100
      }
      if (i >=150 && i < 200){
        breakLine = 130
        spaceLine = i - 150
      }
      if (i >=200 && i < 250){
        breakLine = 175
        spaceLine = i - 200
      }
      if (i >=250 && i < 300){
        breakLine = 220
        spaceLine = i - 250
      }
      if (i >=300 && i < 350){
        breakLine = 263
        spaceLine = i - 300
      }
      if (i >=350 && i < 400){
        breakLine = 303
        spaceLine = i - 350
      }
      if (i >=400 && i < 450){
        breakLine = 343
        spaceLine = i - 400
      }
      if (i >=450 && i < 500){
        breakLine = 387
        spaceLine = i - 450
      }
      if (i >=500 && i < 550){
        breakLine = 430
        spaceLine = i - 500
      }
      if (i >=550 && i < 600){
        breakLine = 473
        spaceLine = i - 550
      }
      if (i >=600 && i < 650){
        breakLine = 520
        spaceLine = i - 600
      }
      
      if (i >=650 && i < 700){
        breakLine = 565
        spaceLine = i - 650
      }
      if (i >=700 && i < 750){
        breakLine = 605
        spaceLine = i - 700
      }
      
      if (i >=750 && i < 800){
        breakLine = 645
        spaceLine = i - 750
      }
      var normalSpace = 0
      if(textoBase[i] == "i" || textoBase[i] == "l" || textoBase[i] == "í"){
        normalSpace = 3
      }
      if(i >1){
         if(textoBase[i-1] == "i" || textoBase[i] == "l"){
        normalSpace = 5
      }
         if((textoBase[i-1] == textoBase[i-1].toUpperCase() && textoBase[i-1] != " ") || textoBase[i]== "v"){
        normalSpace = -6
      }
      }
      
          if(dbImagesLetras[i].src != "https:"){
              ctx.drawImage(dbImagesLetras[i], 0, 0,0,0); 
              ctx.drawImage(dbImagesLetras[i], (spaceLine*18 - normalSpace), breakLine, 50, 50);
              }
            }
      }
  }

function clearAll(){
  url = []
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dbImagesLetras = []  
}

function download(){
  //var imgData = ctx.createImageData(920, 800);
  var im = canvas.toDataURL('image/jpeg');
  var tmpLink = document.createElement( 'a' );  
  tmpLink.download = 'conversao.png'; 
  tmpLink.href = im;
  document.body.appendChild( tmpLink );  
  tmpLink.click();  
  document.body.removeChild( tmpLink );
}

function putBackground(){
  clearAll()
  var inpt = document.getElementById("fundoCaderno").value
  if(inpt == "on"){
     
    document.getElementById("fundoCaderno").value = "off"
  }else if(inpt == "off"){
      var imgPaper = new Image()
      imgPaper.src = "meusCaracteres/backgroundPage.png"
      imgPaper.onload = function(){
      ctx.drawImage(imgPaper,90,170,2050,1600,0,0,920,800);
      }
    document.getElementById("fundoCaderno").value = "on"
    }
}


