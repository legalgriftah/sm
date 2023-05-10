function populate (){
    var ulFirst = document.getElementById("first");
    var ulSecond = document.getElementById("second");
    var ulThird = document.getElementById("third");
    var ulForth = document.getElementById("forth");
    var ulFifth = document.getElementById("fifth");

    var arrayFirst = [];
    var arraySecond = [];
    var arrayThird = [];
    var arrayForth = [];
    var arrayFifth = [];

    arrayFirst.push("img/slot/banana.png");
    arrayFirst.push("img/slot/coco.png");
    arrayFirst.push("img/slot/setas.png");
    arrayFirst.push("img/slot/k.png");
    arrayFirst.push("img/slot/melocoton.png");
    arrayFirst.push("img/slot/pina.png");
    arrayFirst.push("img/slot/cofrewild.png");

    arraySecond.push("img/slot/banana.png");
    arraySecond.push("img/slot/coco.png");
    arraySecond.push("img/slot/setas.png");
    arraySecond.push("img/slot/k.png");
    arraySecond.push("img/slot/melocoton.png");
    arraySecond.push("img/slot/pina.png");
    arraySecond.push("img/slot/cofrewild.png");

    arrayThird.push("img/slot/banana.png");
    arrayThird.push("img/slot/coco.png");
    arrayThird.push("img/slot/setas.png");
    arrayThird.push("img/slot/k.png");
    arrayThird.push("img/slot/melocoton.png");
    arrayThird.push("img/slot/pina.png");
    arrayThird.push("img/slot/cofrewild.png");

    arrayForth.push("img/slot/banana.png");
    arrayForth.push("img/slot/coco.png");
    arrayForth.push("img/slot/setas.png");
    arrayForth.push("img/slot/k.png");
    arrayForth.push("img/slot/melocoton.png");
    arrayForth.push("img/slot/pina.png");
    arrayForth.push("img/slot/cofrewild.png");

    arrayFifth.push("img/slot/banana.png");
    arrayFifth.push("img/slot/coco.png");
    arrayFifth.push("img/slot/setas.png");
    arrayFifth.push("img/slot/k.png");
    arrayFifth.push("img/slot/melocoton.png");
    arrayFifth.push("img/slot/pina.png");
    arrayFifth.push("img/slot/cofrewild.png");

    for (var i=0; i<arrayFirst.length; i++){
        var li=document.createElement('li');
        ulFirst.appendChild(li);
        li.innerHTML=li.innerHTML;
        li.id=[i];
        var elem = document.createElement("img");
        elem.setAttribute("src", arrayFirst[i]);
        li.appendChild(elem);
    }
    for (var i=0; i<arraySecond.length; i++){
        var li=document.createElement('li');
        ulSecond.appendChild(li);
        li.innerHTML=li.innerHTML;
        li.id=[i];
        var elem = document.createElement("img");
        elem.setAttribute("src", arraySecond[i]);
        li.appendChild(elem);
    }
    for (var i=0; i<arrayThird.length; i++){
        var li=document.createElement('li');
        ulThird.appendChild(li);
        li.innerHTML=li.innerHTML;
        li.id=[i];
        var elem = document.createElement("img");
        elem.setAttribute("src", arrayThird[i]);
        li.appendChild(elem);
    }
    for (var i=0; i<arrayForth.length; i++){
        var li=document.createElement('li');
        ulForth.appendChild(li);
        li.innerHTML=li.innerHTML;
        li.id=[i];
        var elem = document.createElement("img");
        elem.setAttribute("src", arrayForth[i]);
        li.appendChild(elem);
    }
    for (var i=0; i<arrayFifth.length; i++){
        var li=document.createElement('li');
        ulFifth.appendChild(li);
        li.innerHTML=li.innerHTML;
        li.id=[i];
        var elem = document.createElement("img");
        elem.setAttribute("src", arrayFifth[i]);
        li.appendChild(elem);
    }
}

function startUtils(){
    lightAll();
    calcPlayerStats();
    updateText();
  //  randomize();
    calcSpin();
}

function calcPlayerStats (){
    player.setCredits = player.getCredits -3;
    player.setSpins = player.getCredits / 3;
    player.setPlayed = player.getPlayed + 1;
    player.setPayed = player.getPayed  + 3;
}
function remove () {
    var e = document.querySelector('ul#first');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    var e = document.querySelector('ul#second');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    var e = document.querySelector('ul#third');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    var e = document.querySelector('ul#forth');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    var e = document.querySelector('ul#fifth');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function randomize (){
    var ul = document.querySelector('ul#first');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    var ul = document.querySelector('ul#second');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    ul = document.querySelector('ul#third');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    ul = document.querySelector('ul#forth');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    ul = document.querySelector('ul#fifth');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}

function updateText (){
    var paragraph = document.getElementById("credits");
    var paragraph3 = document.getElementById("spins");
    var paragraph4 = document.getElementById("jackpot");
    paragraph4.textContent = 'Jackpot';
    paragraph.textContent =  player.getCredits;
    paragraph3.textContent =  player.getSpins;
    paragraph4.textContent = 'Jackpot ' + 42839803;
}

function lightAll (){
    var ul = document.querySelector('ul#first');
    for (var i = ul.children.length; i >= 1; i--) {
        ul.getElementsByTagName("li")[i-1].className = "slotWin";
    }
    var ul = document.querySelector('ul#second');
    for (var i = ul.children.length; i >= 1; i--) {
        ul.getElementsByTagName("li")[i-1].className = "slotWin";
    }
    ul = document.querySelector('ul#third');
    for (var i = ul.children.length; i >= 1; i--) {
        ul.getElementsByTagName("li")[i-1].className = "slotWin";
    }
    ul = document.querySelector('ul#forth');
    for (var i = ul.children.length; i >= 1; i--) {
        ul.getElementsByTagName("li")[i-1].className = "slotWin";
    }
    ul = document.querySelector('ul#fifth');
    for (var i = ul.children.length; i >= 1; i--) {
        ul.getElementsByTagName("li")[i-1].className = "slotWin";
    }
}

function getRandom(min, max) {
    return  Math.floor(Math.random() * (max - min) + min);
}

function calcSpin(){
    var percentPays = ((player.getWinned / player.payed) * 100);
    console.log((player.getWinned / player.payed) * 100);
    if(percentPays < 50){        
        pr = getRandom(0,10);
        

         /*switch (pr) {
            case 0:
                //primera linea
                $('ul#first li#0.slotWin').insertBefore('ul#first li#4.slotWin');
                $('ul#second li#0.slotWin').insertBefore('ul#second li#4.slotWin');
                $('ul#third li#0.slotWin').insertBefore('ul#third li#4.slotWin');
                $('ul#forth li#0.slotWin').insertBefore('ul#forth li#4.slotWin');
                $('ul#fifth li#0.slotWin').insertBefore('ul#fifth li#4.slotWin');
              break;
            case 1:
                //segunda linea
                $('ul#first li#0.slotWin').insertBefore('ul#first li#5.slotWin');
                $('ul#second li#0.slotWin').insertBefore('ul#second li#5.slotWin');
                $('ul#third li#0.slotWin').insertBefore('ul#third li#5.slotWin');
                $('ul#forth li#0.slotWin').insertBefore('ul#forth li#5.slotWin');
                $('ul#fifth li#0.slotWin').insertBefore('ul#fifth li#5.slotWin');
                break;
            case 2:
                //tercera linea
                $('ul#first li#0.slotWin').insertBefore('ul#first li#6.slotWin');
                $('ul#second li#0.slotWin').insertBefore('ul#second li#6.slotWin');
                $('ul#third li#0.slotWin').insertBefore('ul#third li#6.slotWin');
                $('ul#forth li#0.slotWin').insertBefore('ul#forth li#6.slotWin');
                $('ul#fifth li#0.slotWin').insertBefore('ul#fifth li#6.slotWin');
              break;
            case 3:
                //V
                $('ul#first li#1.slotWin').insertBefore('ul#first li#4.slotWin'); //coco
                $('ul#fifth li#1.slotWin').insertBefore('ul#fifth li#4.slotWin'); //coco
                $('ul#second li#1.slotWin').insertBefore('ul#second li#5.slotWin'); //coco
                $('ul#forth li#1.slotWin').insertBefore('ul#forth li#5.slotWin'); //coco
                $('ul#third li#1.slotWin').insertBefore('ul#third li#6.slotWin'); //coco
              break;
            case 4:
              break;
            case 5:
              break;
            case 6:
              break;
            case 7:
              break;
            case 8:
                break;
            case 9:
              break;
            case 10:
              break;
         }
         test = "ul#first li#6.slotWin" ;
         test2 = 'ul#first li#3.slotWin';
         $(test).insertBefore(test2);
//slot1Pos1
//$('ul#first li#0.slotWin').insertBefore('ul#first li#4.slotWin'); //banana
//$('ul#first li#1.slotWin').insertBefore('ul#first li#4.slotWin'); //coco
//$('ul#first li#2.slotWin').insertBefore('ul#first li#4.slotWin'); //seta
//$('ul#first li#3.slotWin').insertBefore('ul#first li#4.slotWin'); //K, tiro estándar
//$('ul#first li#4.slotWin').insertBefore('ul#first li#3.slotWin'); //melocoton
//$('ul#first li#5.slotWin').insertBefore('ul#first li#3.slotWin'); //pina
//$('ul#first li#6.slotWin').insertBefore('ul#first li#3.slotWin'); //cofre

//slot1Pos2
//$('ul#first li#0.slotWin').insertBefore('ul#first li#5.slotWin'); //banana
//$('ul#first li#1.slotWin').insertBefore('ul#first li#5.slotWin'); //coco
//$('ul#first li#2.slotWin').insertBefore('ul#first li#5.slotWin'); //seta
//$('ul#first li#3.slotWin').insertBefore('ul#first li#5.slotWin'); //K, tiro estándar
//$('ul#first li#4.slotWin').insertBefore('ul#first li#4.slotWin'); //melocoton
//$('ul#first li#5.slotWin').insertBefore('ul#first li#4.slotWin'); //pina
//$('ul#first li#6.slotWin').insertBefore('ul#first li#4.slotWin'); //cofre

//slot1Pos3
//$('ul#first li#0.slotWin').insertBefore('ul#first li#6.slotWin'); //banana
//$('ul#first li#1.slotWin').insertBefore('ul#first li#6.slotWin'); //coco
//$('ul#first li#2.slotWin').insertBefore('ul#first li#6.slotWin'); //seta
//$('ul#first li#3.slotWin').insertBefore('ul#first li#6.slotWin'); //K, tiro estándar
//$('ul#first li#4.slotWin').insertBefore('ul#first li#5.slotWin'); //melocoton
//$('ul#first li#5.slotWin').insertBefore('ul#first li#5.slotWin'); //pina
//$('ul#first li#6.slotWin').insertBefore('ul#first li#5.slotWin'); //cofre

//slot2Pos1
//$('ul#second li#0.slotWin').insertBefore('ul#second li#4.slotWin'); //banana
//$('ul#second li#1.slotWin').insertBefore('ul#second li#4.slotWin'); //coco
//$('ul#second li#2.slotWin').insertBefore('ul#second li#4.slotWin'); //seta
//$('ul#second li#3.slotWin').insertBefore('ul#second li#4.slotWin'); //K, tiro estándar
//$('ul#second li#4.slotWin').insertBefore('ul#second li#3.slotWin'); //melocoton
//$('ul#second li#5.slotWin').insertBefore('ul#second li#3.slotWin'); //pina
//$('ul#second li#6.slotWin').insertBefore('ul#second li#3.slotWin'); //cofre

//slot2Pos2
//$('ul#second li#0.slotWin').insertBefore('ul#second li#5.slotWin'); //banana
//$('ul#second li#1.slotWin').insertBefore('ul#second li#5.slotWin'); //coco
//$('ul#second li#2.slotWin').insertBefore('ul#second li#5.slotWin'); //seta
//$('ul#second li#3.slotWin').insertBefore('ul#second li#5.slotWin'); //K, tiro estándar
//$('ul#second li#4.slotWin').insertBefore('ul#second li#4.slotWin'); //melocoton
//$('ul#second li#5.slotWin').insertBefore('ul#second li#4.slotWin'); //pina
//$('ul#second li#6.slotWin').insertBefore('ul#second li#4.slotWin'); //cofre

//slot2Pos3
//$('ul#second li#0.slotWin').insertBefore('ul#second li#6.slotWin');//banana
//$('ul#second li#1.slotWin').insertBefore('ul#second li#6.slotWin');//coco
//$('ul#second li#2.slotWin').insertBefore('ul#second li#6.slotWin');//seta
//$('ul#second li#3.slotWin').insertBefore('ul#second li#6.slotWin');//k
//$('ul#second li#4.slotWin').insertBefore('ul#second li#5.slotWin');//melocoton
//$('ul#second li#5.slotWin').insertBefore('ul#second li#5.slotWin');//pina
//$('ul#second li#6.slotWin').insertBefore('ul#second li#5.slotWin');//cofre

//slot3Pos1
//$('ul#third li#0.slotWin').insertBefore('ul#third li#4.slotWin'); //banana
//$('ul#third li#1.slotWin').insertBefore('ul#third li#4.slotWin'); //coco
//$('ul#third li#2.slotWin').insertBefore('ul#third li#4.slotWin'); //seta
//$('ul#third li#3.slotWin').insertBefore('ul#third li#4.slotWin'); //K, tiro estándar
//$('ul#third li#4.slotWin').insertBefore('ul#third li#3.slotWin'); //melocoton
//$('ul#third li#5.slotWin').insertBefore('ul#third li#3.slotWin'); //pina
//$('ul#third li#6.slotWin').insertBefore('ul#third li#3.slotWin'); //cofre

//slot3Pos2
//$('ul#third li#0.slotWin').insertBefore('ul#third li#5.slotWin'); //banana
//$('ul#third li#1.slotWin').insertBefore('ul#third li#5.slotWin'); //coco
//$('ul#third li#2.slotWin').insertBefore('ul#third li#5.slotWin'); //seta
//$('ul#third li#3.slotWin').insertBefore('ul#third li#5.slotWin'); //K, tiro estándar
//$('ul#third li#4.slotWin').insertBefore('ul#third li#4.slotWin'); //melocoton
//$('ul#third li#5.slotWin').insertBefore('ul#third li#4.slotWin'); //pina
//$('ul#third li#6.slotWin').insertBefore('ul#third li#4.slotWin'); //cofre

//slot3Pos3
//$('ul#third li#0.slotWin').insertBefore('ul#third li#6.slotWin'); //banana
//$('ul#third li#1.slotWin').insertBefore('ul#third li#6.slotWin'); //coco
//$('ul#third li#2.slotWin').insertBefore('ul#third li#6.slotWin'); //seta
//$('ul#third li#3.slotWin').insertBefore('ul#third li#6.slotWin'); //K, tiro estándar
//$('ul#third li#4.slotWin').insertBefore('ul#third li#5.slotWin'); //melocoton
//$('ul#third li#5.slotWin').insertBefore('ul#third li#5.slotWin'); //pina
//$('ul#third li#6.slotWin').insertBefore('ul#third li#5.slotWin'); //cofre

//slot4Pos1
//$('ul#forth li#0.slotWin').insertBefore('ul#forth li#4.slotWin'); //banana
//$('ul#forth li#1.slotWin').insertBefore('ul#forth li#4.slotWin'); //coco
//$('ul#forth li#2.slotWin').insertBefore('ul#forth li#4.slotWin'); //seta
//$('ul#forth li#3.slotWin').insertBefore('ul#forth li#4.slotWin'); //K, tiro estándar
//$('ul#forth li#4.slotWin').insertBefore('ul#forth li#3.slotWin'); //melocoton
//$('ul#forth li#5.slotWin').insertBefore('ul#forth li#3.slotWin'); //pina
//$('ul#forth li#6.slotWin').insertBefore('ul#forth li#3.slotWin'); //cofre

//slot4Pos2
//$('ul#forth li#0.slotWin').insertBefore('ul#forth li#5.slotWin'); //banana
//$('ul#forth li#1.slotWin').insertBefore('ul#forth li#5.slotWin'); //coco
//$('ul#forth li#2.slotWin').insertBefore('ul#forth li#5.slotWin'); //seta
//$('ul#forth li#3.slotWin').insertBefore('ul#forth li#5.slotWin'); //K, tiro estándar
//$('ul#forth li#4.slotWin').insertBefore('ul#forth li#4.slotWin'); //melocoton
//$('ul#forth li#5.slotWin').insertBefore('ul#forth li#4.slotWin'); //pina
//$('ul#forth li#6.slotWin').insertBefore('ul#forth li#4.slotWin'); //cofre

//slot4Pos3
//$('ul#forth li#0.slotWin').insertBefore('ul#forth li#6.slotWin'); //banana
//$('ul#forth li#1.slotWin').insertBefore('ul#forth li#6.slotWin'); //coco
//$('ul#forth li#2.slotWin').insertBefore('ul#forth li#6.slotWin'); //seta
//$('ul#forth li#3.slotWin').insertBefore('ul#forth li#6.slotWin'); //K, tiro estándar
//$('ul#forth li#4.slotWin').insertBefore('ul#forth li#5.slotWin'); //melocoton
//$('ul#forth li#5.slotWin').insertBefore('ul#forth li#5.slotWin'); //pina
//$('ul#forth li#6.slotWin').insertBefore('ul#forth li#5.slotWin'); //cofre

//slot5Pos1
//$('ul#fifth li#0.slotWin').insertBefore('ul#fifth li#4.slotWin'); //banana
//$('ul#fifth li#1.slotWin').insertBefore('ul#fifth li#4.slotWin'); //coco
//$('ul#fifth li#2.slotWin').insertBefore('ul#fifth li#4.slotWin'); //seta
//$('ul#fifth li#3.slotWin').insertBefore('ul#fifth li#4.slotWin'); //K, tiro estándar
//$('ul#fifth li#4.slotWin').insertBefore('ul#fifth li#3.slotWin'); //melocoton
//$('ul#fifth li#5.slotWin').insertBefore('ul#fifth li#3.slotWin'); //pina
//$('ul#fifth li#6.slotWin').insertBefore('ul#fifth li#3.slotWin'); //cofre

//slot5Pos2
//$('ul#fifth li#0.slotWin').insertBefore('ul#fifth li#5.slotWin'); //banana
//$('ul#fifth li#1.slotWin').insertBefore('ul#fifth li#5.slotWin'); //coco
//$('ul#fifth li#2.slotWin').insertBefore('ul#fifth li#5.slotWin'); //seta
//$('ul#fifth li#3.slotWin').insertBefore('ul#fifth li#5.slotWin'); //K, tiro estándar
//$('ul#fifth li#4.slotWin').insertBefore('ul#fifth li#4.slotWin'); //melocoton
//$('ul#fifth li#5.slotWin').insertBefore('ul#fifth li#4.slotWin'); //pina
//$('ul#fifth li#6.slotWin').insertBefore('ul#fifth li#4.slotWin'); //cofre

//slot5Pos3
//$('ul#fifth li#0.slotWin').insertBefore('ul#fifth li#6.slotWin'); //banana
//$('ul#fifth li#1.slotWin').insertBefore('ul#fifth li#6.slotWin'); //coco
//$('ul#fifth li#2.slotWin').insertBefore('ul#fifth li#6.slotWin'); //seta
//$('ul#fifth li#3.slotWin').insertBefore('ul#fifth li#6.slotWin'); //K, tiro estándar
//$('ul#fifth li#4.slotWin').insertBefore('ul#fifth li#5.slotWin'); //melocoton
//$('ul#fifth li#5.slotWin').insertBefore('ul#fifth li#5.slotWin'); //pina
//$('ul#fifth li#6.slotWin').insertBefore('ul#fifth li#5.slotWin'); //cofre

        */
    }
}

function calcPrizes(){
    slot1Pos1 = document.querySelector('ul#first').getElementsByTagName("li")[3];
    slot2Pos1 = document.querySelector('ul#second').getElementsByTagName("li")[3];
    slot3Pos1 = document.querySelector('ul#third').getElementsByTagName("li")[3];
    slot4Pos1 = document.querySelector('ul#forth').getElementsByTagName("li")[3];
    slot5Pos1 = document.querySelector('ul#fifth').getElementsByTagName("li")[3];
    
    slot1Pos2 = document.querySelector('ul#first').getElementsByTagName("li")[4];
    slot2Pos2 = document.querySelector('ul#second').getElementsByTagName("li")[4];
    slot3Pos2 = document.querySelector('ul#third').getElementsByTagName("li")[4];
    slot4Pos2 = document.querySelector('ul#forth').getElementsByTagName("li")[4];
    slot5Pos2 = document.querySelector('ul#fifth').getElementsByTagName("li")[4];

    slot1Pos3 = document.querySelector('ul#first').getElementsByTagName("li")[5];
    slot2Pos3 = document.querySelector('ul#second').getElementsByTagName("li")[5];
    slot3Pos3 = document.querySelector('ul#third').getElementsByTagName("li")[5];
    slot4Pos3 = document.querySelector('ul#forth').getElementsByTagName("li")[5];
    slot5Pos3 = document.querySelector('ul#fifth').getElementsByTagName("li")[5];
    
    if(slot1Pos1.id == slot2Pos2.id && slot2Pos2.id == slot3Pos3.id && slot3Pos3.id == slot4Pos2.id && slot4Pos2.id == slot5Pos1.id){
        console.log('premio V');
        slot1Pos1.className = "slotWin";
        slot2Pos1.className = "slot";
        slot3Pos1.className = "slot";
        slot4Pos1.className = "slot";
        slot5Pos1.className = "slotWin";
        
        slot1Pos2.className = "slot";
        slot2Pos2.className = "slotWin";
        slot3Pos2.className = "slot";
        slot4Pos2.className = "slotWin";
        slot5Pos2.className = "slot";

        slot1Pos3.className = "slot";
        slot2Pos3.className = "slot";
        slot3Pos3.className = "slotWin";
        slot4Pos3.className = "slot";
        slot5Pos3.className = "slot";
        
        player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos1.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos1.id));
    }
    
    if(slot1Pos1.id == slot2Pos1.id && slot2Pos1.id == slot3Pos1.id && slot3Pos1.id == slot4Pos1.id && slot4Pos1.id == slot5Pos1.id){
        console.log('premio primera fila');
        slot1Pos1.className = "slotWin";
        slot2Pos1.className = "slotWin";
        slot3Pos1.className = "slotWin";
        slot4Pos1.className = "slotWin";
        slot5Pos1.className = "slotWin";
        
        slot1Pos2.className = "slot";
        slot2Pos2.className = "slot";
        slot3Pos2.className = "slot";
        slot4Pos2.className = "slot";
        slot5Pos2.className = "slot";

        slot1Pos3.className = "slot";
        slot2Pos3.className = "slot";
        slot3Pos3.className = "slot";
        slot4Pos3.className = "slot";
        slot5Pos3.className = "slot";
        player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos1.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos1.id));
    }
    if(slot1Pos2.id == slot2Pos2.id && slot2Pos2.id == slot3Pos2.id && slot3Pos2.id == slot4Pos2.id && slot4Pos2.id == slot5Pos2.id){
        console.log('premio segunda fila');
        slot1Pos1.className = "slot";
        slot2Pos1.className = "slot";
        slot3Pos1.className = "slot";
        slot4Pos1.className = "slot";
        slot5Pos1.className = "slot";
        
        slot1Pos2.className = "slotWin";
        slot2Pos2.className = "slotWin";
        slot3Pos2.className = "slotWin";
        slot4Pos2.className = "slotWin";
        slot5Pos2.className = "slotWin";

        slot1Pos3.className = "slot";
        slot2Pos3.className = "slot";
        slot3Pos3.className = "slot";
        slot4Pos3.className = "slot";
        slot5Pos3.className = "slot";

        player.setWinned = Number(Number(player.getWinned) + Number(slot2Pos1.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot2Pos1.id));
    }

    if(slot1Pos3.id == slot2Pos3.id && slot2Pos3.id == slot3Pos3.id && slot3Pos3.id == slot4Pos3.id && slot4Pos3.id == slot5Pos3.id){
        console.log('premio 3 fila');
        slot1Pos1.className = "slot";
        slot2Pos1.className = "slot";
        slot3Pos1.className = "slot";
        slot4Pos1.className = "slot";
        slot5Pos1.className = "slot";
        
        slot1Pos2.className = "slot";
        slot2Pos2.className = "slot";
        slot3Pos2.className = "slot";
        slot4Pos2.className = "slot";
        slot5Pos2.className = "slot";

        slot1Pos3.className = "slotWin";
        slot2Pos3.className = "slotWin";
        slot3Pos3.className = "slotWin";
        slot4Pos3.className = "slotWin";
        slot5Pos3.className = "slotWin";
        player.setWinned = Number(Number(player.getWinned) + Number(slot3Pos1.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot3Pos1.id));
    }
    if(slot1Pos1.id == slot2Pos1.id && slot2Pos1.id == slot3Pos2.id && slot3Pos2.id == slot4Pos1.id && slot4Pos1.id == slot5Pos1.id){
        console.log('v pequeña');
        slot1Pos1.className = "slotWin";
        slot2Pos1.className = "slotWin";
        slot3Pos1.className = "slot";
        slot4Pos1.className = "slotWin";
        slot5Pos1.className = "slotWin";
        
        slot1Pos2.className = "slot";
        slot2Pos2.className = "slot";
        slot3Pos2.className = "slotWin";
        slot4Pos2.className = "slot";
        slot5Pos2.className = "slot";

        slot1Pos3.className = "slot";
        slot2Pos3.className = "slot";
        slot3Pos3.className = "slot";
        slot4Pos3.className = "slot";
        slot5Pos3.className = "slot";
        
        player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos1.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos1.id));
    }

    if(slot1Pos2.id == slot2Pos1.id && slot2Pos1.id == slot3Pos1.id && slot3Pos1.id == slot4Pos1.id && slot4Pos1.id == slot5Pos2.id){
        console.log('olla rara');
        slot1Pos1.className = "slot";
        slot2Pos1.className = "slotWin";
        slot3Pos1.className = "slotWin";
        slot4Pos1.className = "slotWin";
        slot5Pos1.className = "slot";
        
        slot1Pos2.className = "slotWin";
        slot2Pos2.className = "slot";
        slot3Pos2.className = "slot";
        slot4Pos2.className = "slot";
        slot5Pos2.className = "slotWin";

        slot1Pos3.className = "slot";
        slot2Pos3.className = "slot";
        slot3Pos3.className = "slot";
        slot4Pos3.className = "slot";
        slot5Pos3.className = "slot";

        player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos2.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos2.id));
    }

    if(slot1Pos2.id == slot2Pos1.id && slot2Pos1.id == slot3Pos2.id && slot3Pos2.id == slot4Pos1.id && slot4Pos1.id == slot5Pos2.id){
        console.log('zigzag');
        slot1Pos1.className = "slot";
        slot2Pos1.className = "slotWin";
        slot3Pos1.className = "slot";
        slot4Pos1.className = "slotWin";
        slot5Pos1.className = "slot";
        
        slot1Pos2.className = "slotWin";
        slot2Pos2.className = "slot";
        slot3Pos2.className = "slotWin";
        slot4Pos2.className = "slot";
        slot5Pos2.className = "slotWin";

        slot1Pos3.className = "slot";
        slot2Pos3.className = "slot";
        slot3Pos3.className = "slot";
        slot4Pos3.className = "slot";
        slot5Pos3.className = "slot";

        player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos2.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos2.id));
    }

    if(slot1Pos2.id == slot2Pos3.id && slot2Pos3.id == slot3Pos3.id && slot3Pos3.id == slot4Pos3.id && slot4Pos3.id == slot5Pos2.id){
        console.log('olla abajo');
        slot1Pos1.className = "slot";
        slot2Pos1.className = "slot";
        slot3Pos1.className = "slot";
        slot4Pos1.className = "slot";
        slot5Pos1.className = "slot";
        
        slot1Pos2.className = "slotWin";
        slot2Pos2.className = "slot";
        slot3Pos2.className = "slot";
        slot4Pos2.className = "slot";
        slot5Pos2.className = "slotWin";

        slot1Pos3.className = "slot";
        slot2Pos3.className = "slotWin";
        slot3Pos3.className = "slotWin";
        slot4Pos3.className = "slotWin";
        slot5Pos3.className = "slot";

        player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos2.id));
        player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos2.id));
    }

    if(slot1Pos3.id == slot2Pos3.id && slot2Pos3.id == slot3Pos2.id && slot3Pos2.id == slot4Pos3.id && slot4Pos3.id == slot5Pos3.id){
        console.log('zigzag inverso');
        slot1Pos1.className = "slot";
        slot2Pos1.className = "slot";
        slot3Pos1.className = "slot";
        slot4Pos1.className = "slot";
        slot5Pos1.className = "slot";
        
        slot1Pos2.className = "slot";
        slot2Pos2.className = "slot";
        slot3Pos2.className = "slotWin";
        slot4Pos2.className = "slot";
        slot5Pos2.className = "slot";

        slot1Pos3.className = "slotWin";
        slot2Pos3.className = "slotWin";
        slot3Pos3.className = "slot";
        slot4Pos3.className = "slotWin";
        slot5Pos3.className = "slotWin";

       player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos3.id));
       player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos3.id));
    }

    if(slot1Pos3.id == slot2Pos2.id && slot2Pos2.id == slot3Pos1.id && slot3Pos1.id == slot4Pos2.id && slot4Pos2.id == slot5Pos3.id){
        console.log('v inversa');
        slot1Pos1.className = "slot";
        slot2Pos1.className = "slot";
        slot3Pos1.className = "slotWin";
        slot4Pos1.className = "slot";
        slot5Pos1.className = "slot";
        
        slot1Pos2.className = "slot";
        slot2Pos2.className = "slotWin";
        slot3Pos2.className = "slot";
        slot4Pos2.className = "slotWin";
        slot5Pos2.className = "slot";

        slot1Pos3.className = "slotWin";
        slot2Pos3.className = "slot";
        slot3Pos3.className = "slot";
        slot4Pos3.className = "slot";
        slot5Pos3.className = "slotWin";

       player.setWinned = Number(Number(player.getWinned) + Number(slot1Pos3.id));
       player.setCredits = Number(Number(player.getCredits) +  Number(slot1Pos3.id));
    }
}

const player = {
    credits : 60,
    spins : credits/3,
    winned : 0,
    payed: 0,
    played: 0,
    set setCredits(credits) {
        this.credits = credits;
    },
    set setSpins(spins){
        this.spins = spins;
    },
    set setWinned(winned){
        this.winned = winned;
    },
    set setPayed(payed){
        this.payed = payed;
    },
    set setPlayed(played){
        this.played = played;
    },
    get getCredits() {
        return this.credits;
    },
    get getSpins(){
        return this.spins;
    },
    get getWinned(){
        return this.winned;
    },
    get getPayed(){
        return this.payed;
    },
    get getPlayed(){
        return this.played;
    }
};
