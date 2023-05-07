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

function calcPlayerStats (){
    player.setCredits = player.getCredits -3;
    player.setSpins = player.getCredits / 3;
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
        var paragraph2 = document.getElementById("money");
        var paragraph3 = document.getElementById("spins");
        var paragraph4 = document.getElementById("jackpot");

        paragraph2.textContent =  money;
        paragraph4.textContent = 'Jackpot';
        paragraph.textContent =  player.getCredits;
        paragraph3.textContent =  player.getSpins;
        paragraph4.textContent = 'Jackpot ' + 42839803;
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
    
    //hay que limpiar todos, no solo estos. se recuperan con una query y se iteran para dejarlos como estaban
    slot1Pos1.className = "slotWin";
    slot2Pos1.className = "slotWin";
    slot3Pos1.className = "slotWin";
    slot4Pos1.className = "slotWin";
    slot5Pos1.className = "slotWin";

    slot1Pos2.className = "slotWin";
    slot2Pos2.className = "slotWin";
    slot3Pos2.className = "slotWin";
    slot4Pos2.className = "slotWin";
    slot5Pos2.className = "slotWin";

    slot1Pos3.className = "slotWin";
    slot2Pos3.className = "slotWin";
    slot3Pos3.className = "slotWin";
    slot4Pos3.className = "slotWin";
    slot5Pos3.className = "slotWin";
    
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
        money = money + 3;
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
        money = money + 3;
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
        money = money + 3;
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
        money = money + 3;
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
        money = money + 3;
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
        money = money + 3;
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
        money = money + 3;
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
        money = money + 3;
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
        money = money + 3;
    }
    paragraph2.textContent = money;
}

const player = {
    credits : 60,
    money : 0,
    spins : credits/3,
    set setCredits(credits) {
        this.credits = credits;
    },
    set setMoney(money){
        this.money = money;
    },
    set setSpins(spins){
        this.spins = spins;
    },
    get getCredits() {
        return this.credits;
    },
    get getMoney() {
        return this.money;
    },
    get getSpins(){
        return this.spins;
    }
};
