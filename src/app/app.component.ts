import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Orientation, SVGuitarChord } from 'svguitar';
import { HttpClient } from '@angular/common/http';
import { FretLabelPosition } from 'svguitar';
import { Router } from '@angular/router'

/* declare var require:any
const svgSaver = require('svgsaver') */

declare var parse:any


declare var teste:any
declare var svgExport:any
import '../assets/js/custom.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  corda1_X = "38.357006"

  @ViewChild("chordsChart") chordsChart:any

  @ViewChildren("chordCharts") chordChartsHtmlElement:any

  @ViewChildren("chordImage") chordImage:any

  @ViewChild("bijeto") bijeto:any


  title = 'svguitar-testing';

  chords:any[] = []
  activeBtns:boolean[] = []
  activeLength:number = 0

  chart = new SVGuitarChord("#chart")

  chordCharts:SVGuitarChord[] = []

  constructor(private http:HttpClient, private router:Router){}

  mostrarImagens:boolean[]= []

  drawChord(title:string,fingers:any[],barres:any[]){
    this.chart
    .configure({
      title:title,
      fretLabelPosition:FretLabelPosition.LEFT,
      position:3,
      orientation: Orientation.vertical
    })
    .chord({
      fingers: fingers,
        barres:[{fromString:barres[0], toString:barres[1], fret:barres[2]}],
        
    }).draw()
  }

  url:string = "https://jonathanspinelli.com/_functions/getChords"

  activateChord(index:number, chord:any){
    
    if(this.activeBtns[index]){
       console.log(chord)
       this.chordChartsHtmlElement._results[index].nativeElement.classList.remove("hide")
       this.chordCharts[index]
        .configure({title:chord.title, frets:4, fretLabelPosition:FretLabelPosition.LEFT})
        .chord({fingers: chord.fingers, position:chord.position, barres:[{fromString:chord.barres[0][0], toString:chord.barres[0][1], fret:chord.barres[0][2]}]})
        .draw()
        this.activeLength = this.activeBtns.filter(e => e == true).length
        
    } else {
      this.chordChartsHtmlElement._results[index].nativeElement.classList.add("hide")
      this.chordCharts[index].clear()
     
      this.activeLength = this.activeBtns.filter(e => e == true).length
    }
  }

  mostrarImagem() {
    
  }

  SVG_gerarDiagramaBase(position:number) {

  let pathLabels = ["stroke-linecap", "fill","stroke-linejoin","d","stroke","stroke-width","stroke-opacity","stroke-miterlimit","style","inkscape:label"]
  let paths = {
     headDireito:["butt","none","miter","m 38.178987,8.83911 3.20121,-8.68853","#000000","0.703037","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","direito"],
     headEsquerdo:["butt","none","miter","M 8.041717,8.84393 4.854299,0.14576","#000000","1.99464","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-width:0.702998;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1","esquerdo"],
     pestana:["butt","none","miter","M 7.769288,9.55474 H 38.493817","#000000","2.33578","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","pestana"],
     pestanaAlt:["butt","none","miter","M 8.021455,10.371489 H 38.185327","#000000","0.702292","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","pestana-alt"],
     traste1:["butt","none","miter","M 8.064175,16.49309 H 38.228047","#000000","0.702292","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","traste1"],
     traste2:["butt","none","miter","M 8.106896,22.6147 H 38.270767","#000000","0.702292","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","traste2"],
     traste3:["butt","none","miter","M 8.064175,28.73631 H 38.228047","#000000","0.702292","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","traste3"],
     traste4:["butt","none","miter","M 8.064175,34.85791 H 38.228047","#000000","0.702292","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","traste4"],
     traste5:["butt","none","miter","M 8.064175,40.97952 H 38.228047","#000000","0.702292","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-opacity:1","traste5"],
     corda1:["butt","none","miter","M 38.357007,8.4067008 V 44.91657","#000000","1.99511","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-width:0.3175;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1","corda1"],
     corda2:["butt","none","miter","M 32.303137,8.4067008 V 44.9207","#000000","1.99316","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-width:0.423333;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1","corda2"],
     corda3:["butt","none","miter","M 26.249255,8.4067008 V 44.96481","#000000","1.99481","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-width:0.529167;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1","corda3"],
     corda4:["butt","none","miter","M 20.195352,8.4067008 V 44.96481","#000000","1.99481","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-width:0.635;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1","corda4"],
     corda5:["butt","none","miter","M 14.14147,8.4067008 V 44.84077","#000000","1.99134","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-width:0.740833;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1","corda5"],
     corda6:["butt","none","miter","M 8.087599,8.40683 V 44.9207","#000000","1.99353","1","4","fill:#808080;fill-opacity:1;stroke:#999999;stroke-width:0.846667;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1","corda6"]
   }

  // CRIAR O ELEMENTO SVG:
   let svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   svg1.setAttribute("width","46.443932mm")
   svg1.setAttribute("height","54.022198mm") //era originalmente 50...
   svg1.setAttribute("viewBox","0 0 46.443932 50.022198")
  ////////////////////////////////////////////////////////////////////////////


  // CRIAR A CAMADA DO DIAGRAMA BASE:
   let gDiagramaBase = document.createElementNS("http://www.w3.org/2000/svg", "g")
   gDiagramaBase.setAttribute("inkscape:groupmode","layer")
   gDiagramaBase.setAttribute("inkscape:label","DIAGRAMA")
  ///////////////////////////////////////////////////////////////////////////// 




  // CRIAR O GRUPO PARA O HEADSTOCK
   let gDB_Head = document.createElementNS("http://www.w3.org/2000/svg", "g")
   gDB_Head.setAttribute("inkscape:label","head")
  /////////////////////////////////////////////////////////////////////////////

  /* CRIAR O HEADSTOCK  */
   let headDireito = document.createElementNS("http://www.w3.org/2000/svg","path")
   let headEsquerdo = document.createElementNS("http://www.w3.org/2000/svg","path")
   ////////////////





  // CRIAR O GRUPO PARA OS TRASTES
  let gDB_Trastes = document.createElementNS("http://www.w3.org/2000/svg", "g")
  gDB_Trastes.setAttribute("inkscape:label","trastes")
  /////////////////////////////////////////////////////////////////////////////

  /* CRIAR OS TRASTES */
  let trastes_pestana = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let trastes_pestanaAlt = document.createElementNS("http://www.w3.org/2000/svg","path")
  let trastes_traste1 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let trastes_traste2 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let trastes_traste3 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let trastes_traste4 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let trastes_traste5 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let trastes_position = document.createElementNS("http://www.w3.org/2000/svg","text")
  let trastes_positionText = document.createElementNS("http://www.w3.org/2000/svg","tspan")
  ////////////////////////////////////////////////////////////////////////////////////




  // CRIAR O GRUPO PARA AS CORDAS
  let gDB_Cordas = document.createElementNS("http://www.w3.org/2000/svg", "g")
  gDB_Cordas.setAttribute("inkscape:label","cordas")
  /////////////////////////////////////////////////////////////////////////////

  /* CRIAR AS CORDAS */
  let corda1 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let corda2 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let corda3 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let corda4 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let corda5 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  let corda6 = document.createElementNS("http://www.w3.org/2000/svg", "path")
  ///////////////////////////////////////////////////////////////////////////////////

  // CRIAR TEXTO DE POSIÇÃO, CASO SEJA INFORMADA
  if(position > 1) {
    let positionLabels = ["xml:space","style","x","y"]
    let positionValues = [
      "preserve",
      "font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:5.19751px;line-height:1.25;font-family:'Avenir Next LT Pro Bold';-inkscape-font-specification:'Avenir Next LT Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:end;text-anchor:end;fill:#000000;stroke-width:0.182553",
      "5.2235003",
      "15.261813"
    ]
    for(var i = 0; i<positionLabels.length; i++) {
      trastes_position.setAttribute(positionLabels[i],positionValues[i])
    }
    let positionNumber = position.toString() + "ª"
    trastes_positionText.textContent = positionNumber
    trastes_position.appendChild(trastes_positionText)
    gDB_Trastes.appendChild(trastes_position)
  }
  




  //CRIAR ATRIBUTOS PARA OS PATHS (heads, trastes e cordas)
  for(var i = 0; i < pathLabels.length; i++) {
    headDireito.setAttribute(pathLabels[i], paths.headDireito[i])
    headEsquerdo.setAttribute(pathLabels[i], paths.headEsquerdo[i])
    trastes_pestana.setAttribute(pathLabels[i], paths.pestana[i])
    trastes_pestanaAlt.setAttribute(pathLabels[i],paths.pestanaAlt[i])
    trastes_traste1.setAttribute(pathLabels[i], paths.traste1[i])
    trastes_traste2.setAttribute(pathLabels[i], paths.traste2[i])
    trastes_traste3.setAttribute(pathLabels[i], paths.traste3[i])
    trastes_traste4.setAttribute(pathLabels[i], paths.traste4[i])
    trastes_traste5.setAttribute(pathLabels[i], paths.traste5[i])
    corda1.setAttribute(pathLabels[i], paths.corda1[i])
    corda2.setAttribute(pathLabels[i], paths.corda2[i])
    corda3.setAttribute(pathLabels[i], paths.corda3[i])
    corda4.setAttribute(pathLabels[i], paths.corda4[i])
    corda5.setAttribute(pathLabels[i], paths.corda5[i])
    corda6.setAttribute(pathLabels[i], paths.corda6[i])
  }


  //ADICIONAR ELEMENTOS NOS GRUPOS
  gDB_Trastes.appendChild(trastes_traste1) //colocar os trastes no grupo de trastes
  gDB_Trastes.appendChild(trastes_traste2)
  gDB_Trastes.appendChild(trastes_traste3)
  gDB_Trastes.appendChild(trastes_traste4)
  gDB_Trastes.appendChild(trastes_traste5)
  if(position == 1){
    gDB_Trastes.appendChild(trastes_pestana) 
    gDB_Head.appendChild(headDireito) //colocar os heads no grupo do headstock
    gDB_Head.appendChild(headEsquerdo)
  } else {
    gDB_Trastes.appendChild(trastes_pestanaAlt) 
  }

  gDB_Cordas.appendChild(corda1) //colocar as cordas no grupo de cordas
  gDB_Cordas.appendChild(corda2)
  gDB_Cordas.appendChild(corda3)
  gDB_Cordas.appendChild(corda4)
  gDB_Cordas.appendChild(corda5)
  gDB_Cordas.appendChild(corda6)


  //ADICIONAR GRUPOS NA CAMADA DO DIAGRAMA BASE
  gDiagramaBase.appendChild(gDB_Trastes) // colocar o grupo de trastes na camada do diagrama base
  gDiagramaBase.appendChild(gDB_Head)   // colocar o grupo do headstock na camada do diagrama base
  gDiagramaBase.appendChild(gDB_Cordas) // colocar o grupo de cordas na camada do diagrama base
  /////////////////////////////////////////////////////////////////////////////////////////////////


   svg1.appendChild(gDiagramaBase) // colocar o grupo do diagrama base dentro do svg criado
   //document.getElementById("vejamos")?.appendChild(svg1)
   return(svg1)
    
  }

  SVG_gerarAcorde(title:string, dedos:number[][], footer:string[],pestanaInstr:number[], position? :number) {
    let base
    if(position) {
      base = this.SVG_gerarDiagramaBase(position)
    } else {
      base = this.SVG_gerarDiagramaBase(1)
    }
    
    let dotLabels = ["style","cx","cy","r","inkscape:label"]

    //numeros pra identificar posição (eixo x) de cada corda
    let coordenadasCorda_X = [
      {corda:1, valor:"38.357006"},
      {corda:2, valor:"32.303139"},
      {corda:3, valor:"26.249254"},
      {corda:4, valor:"20.195353"},
      {corda:5, valor:"14.14147"},
      {corda:6, valor:"8.0875988"}
    ]

    //numeros pra identificar posição (eixo y) de cada casa
    let coordenadasCasa_Y = [
      {casa:1, valor:"13.432287"},
      {casa:2, valor:"19.553894"},
      {casa:3, valor:"25.675505"},
      {casa:4, valor:"31.797112"},
      {casa:5, valor:"37.918716"},
    ]

    //GERAR CAMADA DE ACORDE
    let acorde = document.createElementNS("http://www.w3.org/2000/svg","g")
    acorde.setAttribute("inkscape:groupmode","layer")
    acorde.setAttribute("inkscape:label","ACORDE")

    //TITULO
      let text = document.createElementNS("http://www.w3.org/2000/svg","text")
      let textLabels = ["xml:space","style","x","y","text-anchor","inkscape:label"]
      let textValues = [
        "preserve",
        "font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:6.53304px;line-height:1.25;font-family:'Avenir Next LT Pro Bold';-inkscape-font-specification:'Avenir Next LT Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:end;text-anchor:end;fill:#333333;stroke-width:0.264583",
        "50%",
        "6.1069942",
        "middle",
        "title"
      ]
    
    for(var i = 0; i<textLabels.length; i++) {
      text.setAttribute(textLabels[i],textValues[i])
    }
    
    let textContent = document.createElementNS("http://www.w3.org/2000/svg","tspan")
    textContent.setAttribute("text-anchor","middle") //alinhar o texto no centro

    let textContentSuperscript = document.createElementNS("http://www.w3.org/2000/svg","tspan")
    let textContentSubscript = document.createElementNS("http://www.w3.org/2000/svg","tspan")
    textContentSuperscript.setAttribute("style","font-size:80%")
    textContentSuperscript.setAttribute("baseline-shift","60%")
    textContentSubscript.setAttribute("style","font-size:80%")
    textContentSubscript.setAttribute("baseline-shift","-30%")
    textContentSubscript.setAttribute("dx","-0.65em")

    if(title.slice(-2) == "74"){
      textContent.setAttribute("dy","-0.1em")
     let indexOf7 = title.indexOf("7")
      title = title.substring(0,indexOf7)
      textContentSuperscript.textContent = "7"
      textContentSubscript.textContent = "4"
      textContent.textContent = title
      text.appendChild(textContent)
      text.appendChild(textContentSuperscript)
      text.appendChild(textContentSubscript)
    } else {
      textContent.textContent = title
      text.appendChild(textContent)
    }
    

    
    acorde.appendChild(text)

  //LOGICA DEDOS

    //GERAR GRUPO DOS DEDOS
    let gDedos = document.createElementNS("http://www.w3.org/2000/svg", "g")
    gDedos.setAttribute("inkscape:label","dedos")
    

    //GERAR OS DOTS E POSICIONAR CONFORME NUMEROS DE CORDA E CASA RECEBIDOS:
      if(dedos && dedos.length > 0){

        dedos.forEach((dedo:number[]) => { //pra cada array de número de corda e casa recebida:
        let cx = coordenadasCorda_X.filter(e => e.corda == dedo[0])[0].valor //procura a coordenada certa conforme a corda informada
        let cy = coordenadasCasa_Y.filter(e => e.casa == dedo[1])[0].valor   //procura a coordenada certa conforme a casa informada
        let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle") //cria um dot (círculo)
        let dotValues = ["fill:#333333; fill-opacity:1; stroke:none",cx,cy,"2.6","circle"] //seta os atributos desse dot
        
          for(var i = 0; i < dotLabels.length; i++) {
            dot.setAttribute(dotLabels[i],dotValues[i]) //coloca os atributos no dot 
          }
          gDedos.appendChild(dot)//envia o dot para o grupo de dedos

        let desenhosNumeros = [
          {numero:1,desenho:" v -3.679837 h -0.800417 l -1.211019,0.888774 0.452183,0.618504 0.686071,-0.530146 v 2.702705 z"},
          {numero:2,desenho:" v -0.758836 h -1.50208 l 0.852392,-0.758836 c 0.337838,-0.301456 0.644491,-0.608109 0.644491,-1.133058 0,-0.769231 -0.654886,-1.127859 -1.330563,-1.127859 -0.717256,0 -1.320167,0.441788 -1.403327,1.185032 l 0.836799,0.114345 c 0.03638,-0.327443 0.22869,-0.556133 0.519751,-0.556133 0.275468,0 0.457381,0.181913 0.457381,0.441788 0,0.223493 -0.119543,0.395011 -0.301456,0.566529 l -1.434513,1.299377 v 0.727651 z"},
          {numero:3,desenho:" c 0,-0.41061 -0.29106,-0.75364 -0.70686,-0.8524 v -0.0156 c 0.35863,-0.0935 0.61851,-0.39501 0.61851,-0.80042 0,-0.70686 -0.64449,-1.0395 -1.294183,-1.0395 -0.613307,0 -1.195428,0.31705 -1.372143,0.93555 l 0.810812,0.18711 c 0.05717,-0.24948 0.254678,-0.4106 0.504158,-0.4106 0.239085,0 0.462576,0.14033 0.462576,0.40541 0,0.35343 -0.317046,0.43659 -0.644489,0.43659 h -0.254678 v 0.63929 h 0.233888 c 0.363826,0 0.748439,0.10915 0.748439,0.48337 0,0.34304 -0.28586,0.46778 -0.535341,0.46778 -0.332641,0 -0.556134,-0.2131 -0.623701,-0.45738 l -0.810812,0.21309 c 0.197506,0.68607 0.805614,0.97714 1.476093,0.97714 0.675681,0 1.387731,-0.36383 1.387731,-1.16944 z"},
          {numero:4, desenho:" v -0.706862 h -0.50935 v -2.255719 h -1.0447 l -1.49689,2.229732 v 0.732849 h 1.73078 v 0.717256 h 0.816 v -0.717256 z m -1.31497,-0.706862 h -0.88877 l 0.87318,-1.361747 h 0.0156 z"}
        ] 

        let coordenadasDedos = [
          {dedo:1, coordenadas:[
            {eixo:"x",coordenadas:[
              {corda:1, valor:"39.012506"},
              {corda:2, valor:"32.958639"},
              {corda:3, valor:"26.904754"},
              {corda:4, valor:"20.850853"},
              {corda:5, valor:"14.79697"},
              {corda:6, valor:"8.7430988"}
            ]},
            {eixo:"y", coordenadas:[
              {casa:1, valor:"15.201335"},
              {casa:2, valor:"21.322942"},
              {casa:3, valor:"27.444553"},
              {casa:4, valor:"33.56616"},
              {casa:5, valor:"39.687764"}
            ]}
          ]},
          {dedo:2, coordenadas:[
            {eixo:"x",coordenadas:[
              {corda:1, valor:"39.726551"},
              {corda:2, valor:"33.672684"},
              {corda:3, valor:"27.618799"},
              {corda:4, valor:"21.564898"},
              {corda:5, valor:"15.511015"},
              {corda:6, valor:"9.4571438"}            
            ]},
            {eixo:"y", coordenadas:[
              {casa:1, valor:"15.201335"},
              {casa:2, valor:"21.322942"},
              {casa:3, valor:"27.444553"},
              {casa:4, valor:"33.56616"},
              {casa:5, valor:"39.687764"}
            ]}
          ]},
          {dedo:3, coordenadas:[
            {eixo:"x", coordenadas:[
              {corda:1, valor:"39.789006"},
              {corda:2, valor:"33.735139"},
              {corda:3, valor:"27.618799"},
              {corda:4, valor:"21.627353"},
              {corda:5, valor:"15.57347"},
              {corda:6, valor:"9.5195988"}  
            ]},
            {eixo:"y", coordenadas:[
              {casa:1, valor:"14.222287"},
              {casa:2, valor:"20.343894"},
              {casa:3, valor:"26.465505"},
              {casa:4, valor:"32.587112"},
              {casa:5, valor:"38.708716"}
            ]}
          ]},
          {dedo:4, coordenadas:[
            {eixo:"x", coordenadas:[
              {corda:1, valor:"39.789006"},
              {corda:2, valor:"33.735139"},
              {corda:3, valor:"27.618799"},
              {corda:4, valor:"21.627353"},
              {corda:5, valor:"15.57347"},
              {corda:6, valor:"9.5195988"}              
            ]},
            {eixo:"y", coordenadas:[
              {casa:1, valor:"14.420271"},
              {casa:2, valor:"20.541878"},
              {casa:3, valor:"26.663489"},
              {casa:4, valor:"32.785096"},
              {casa:5, valor:"38.9067"}           
            ]}
          ]}
        ]


          if(dedo[2] && dedo[2] < 5){ // verifica se tem indicação de número de dedo e se o valor informado é menor que 5 (pois só vale dedos 1, 2, 3 e 4)
            let dedoInformado:any = coordenadasDedos.filter(e => e.dedo == dedo[2])[0] // filtrando pelo dedo indicado
            let coordenadasDoDedo_X:any[] = dedoInformado.coordenadas[0].coordenadas //pegando coordenadas do eixo X (corda)
            let coordenadasDoDedo_Y:any[] = dedoInformado.coordenadas[1].coordenadas //pegando coordenadas do eixo Y (casa)
            
            let corda = coordenadasDoDedo_X.filter(e => e.corda == dedo[0])[0].valor
            let casa = coordenadasDoDedo_Y.filter(e => e.casa == dedo[1])[0].valor

            let path = desenhosNumeros.filter(e => e.numero == dedo[2])[0].desenho
            let d = "m " + corda + ", " + casa + path
            
            
            
            let numberLabels = ["d","style","inkscape:label"]
            let numberValues = [d,"fill:#ffffff",dedo[2].toString()]  

            let numero = document.createElementNS("http://www.w3.org/2000/svg","path")
            for(var i = 0; i<numberLabels.length; i++) {
              numero.setAttribute(numberLabels[i],numberValues[i])
            }
            gDedos.appendChild(numero)
          }



        })
        
      }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////      
    
    //GERAR GRUPO DO FOOTER (RODAPÉ)
      let gFooter = document.createElementNS("http://www.w3.org/2000/svg", "g")
      gFooter.setAttribute("inkscape:label","footer")
    
      let pathLabels = ["d","fill-opacity","fill-rule","style"]
      
      if(footer && footer.length == 6){

        footer.reverse() //inverte a informação recebida para montar o rodapé (para que a gente possa escrever da 6a pra 1a corda, mas a função trabalha com da 1a a 6a)

        for(var i = 0; i<footer.length; i++) {
          if(footer[i] == "o" || footer[i] == "O"){
            let sign = document.createElementNS("http://www.w3.org/2000/svg","circle")
            let style = ""
            if(footer[i] == "o"){
              style="fill:none;stroke:#333333;stroke-width:0.165;" //círculo vazado
            } else {
              style="fill:#333333;stroke:#333333;stroke-width:0.165;" //círculo cheio (baixo)
            }
            let cx = coordenadasCorda_X.filter(e => e.corda == i+1)[0].valor //determina a corda
            let cy = "47.670696" //valor fixo (base do desenho)
            let r = "2.2690001"
            let label = ""
            if(footer[i] == "o"){
              label = "corda" + (i+1) + "-yes"
            } else {
              label = "corda" + (i+1) + "-bass"
            }
            let signValues = [style,cx,cy,r,label]

            for(var j = 0; j < dotLabels.length; j++) {
              sign.setAttribute(dotLabels[j],signValues[j])
            }
            gFooter.appendChild(sign)
          }

          if(footer[i] == "x") {
            let path = document.createElementNS("http://www.w3.org/2000/svg","path")
            let fatorCorreção = 0.71468
            let coordenadaX = parseFloat(coordenadasCorda_X.filter(e => e.corda == i+1)[0].valor) + fatorCorreção
            let corda = coordenadaX.toString()
            //let corda = coordenadasCorda_X.filter(e => e.corda == i+1)[0].valor
            let d = "m " + corda + ",47.782758 1.499305,-1.49793 c 0.03996,-0.04 0.03996,-0.10335 0,-0.14194 l -0.570509,-0.57051 c -0.0193,-0.0193 -0.04548,-0.0303 -0.07166,-0.0303 -0.02755,0 -0.05237,0.011 -0.07166,0.0303 l -1.500684,1.49655 -1.499306,-1.49655 c -0.03858,-0.0386 -0.104729,-0.0386 -0.143316,0 l -0.570505,0.57051 c -0.0193,0.0179 -0.0303,0.0441 -0.0303,0.0703 0,0.0276 0.01101,0.0524 0.0303,0.0717 l 1.499305,1.49793 -1.499305,1.49655 c -0.0193,0.0193 -0.0303,0.0441 -0.0303,0.0717 0,0.0262 0.01101,0.0524 0.0303,0.0717 l 0.570505,0.56913 c 0.02067,0.0207 0.04548,0.0303 0.07166,0.0303 0.02618,0 0.05237,-0.01 0.07166,-0.0303 l 1.499306,-1.49655 1.500684,1.49655 c 0.03996,0.04 0.103354,0.04 0.143316,0 l 0.570509,-0.56913 c 0.03996,-0.04 0.03996,-0.10335 0,-0.14331 z m 0,0"
            let pathLabel = "corda" + (i+1) + "-no"
            let pathValues = [d,"1","nonzero","fill:#333333;fill-opacity:1;stroke-width:0.352778",pathLabel]

            for(var j = 0; j<pathLabels.length; j++) {
              path.setAttribute(pathLabels[j],pathValues[j])
            }
            gFooter.appendChild(path)

          }


        }
      }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
  
    //GERAR PESTANA
      let pestana = document.createElementNS("http://www.w3.org/2000/svg","path")
      let pestanaLabels = ["stroke-linecap","fill","stroke-linejoin","d","stroke-width","stroke-opacity","stroke-miterlimit","style","inkscape:label"]

      if(pestana && pestanaInstr.length == 3){

        let cordaInicial = coordenadasCorda_X.filter(e => e.corda == pestanaInstr[0])[0].valor
        let cordaFinal = coordenadasCorda_X.filter(e => e.corda == pestanaInstr[1])[0].valor
        let casa = coordenadasCasa_Y.filter(e => e.casa == pestanaInstr[2])[0].valor
        let d = "M " + cordaInicial + "," + casa + " H " + cordaFinal
        let pestanaValues = ["round","none","miter",d,"5.01731","1","4","stroke:#333333"]


        for(var i = 0; i<pestanaLabels.length; i++) {
          pestana.setAttribute(pestanaLabels[i],pestanaValues[i])
        }
        gDedos.appendChild(pestana)
      }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

  
    //colocar o grupo de dedos e o do footer na camada de acordes
    acorde.appendChild(gDedos)
    acorde.appendChild(gFooter)

    //colocar a camada de acordes no arquivo SVG
    base.appendChild(acorde)

    //colocar o arquivo SVG na página
   // document.getElementById("vejamos")?.appendChild(base)
   //console.log(base)
   return(base)
   
  }

  acordesCompletos:number = 0

  navigate() {
    this.router.navigate(['/buscador'])
  }

  ngOnInit(){
   // this.drawChord('_', [],[])

    /* this.http.get(this.url).toPromise().then((data:any) => {
      console.log(data)
      this.chords = data.resultado.items.sort((a:any,b:any) => (a.ordenadorMaiores > b.ordenadorMaiores) ? 1 : -1)
      console.log(this.chords)
      this.acordesCompletos = this.chords.filter(e => e.pestana).length

      this.chords.forEach(chord => {
        if(chord.pestana) {
          if(chord.position) {
            document.getElementById("vejamos")?.appendChild(this.SVG_gerarAcorde(chord.title,chord.dedos,chord.footer,chord.pestana,chord.position)) 
          } else {
            document.getElementById("vejamos")?.appendChild(this.SVG_gerarAcorde(chord.title,chord.dedos,chord.footer,chord.pestana)) 
          }
        }  
      })  
    }) */
  }
}
