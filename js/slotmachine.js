var startSeqs = {};
var startNum = 0;

var slot1Pos1, slot1Pos2, slot1Pos3;
var slot2Pos1, slot2Pos2, slot2Pos3;
var slot3Pos1, slot3Pos2, slot3Pos3;
var slot4Pos1, slot4Pos2, slot4Pos3;
var slot5Pos1, slot5Pos2, slot5Pos3;

/*
YA he hardcodeado la parada
ahora queda entender como van estas máquinas, lo más básico
para modificar su forma de actuar
css para marcar:
filter: brightness(2);


jackpot es el mayor premio

scatter no se aplica a esta maquina, no hay imagen.
wild es comodin para todo excepto scatter. Acumular comodines desbloquea algo especial
https://www.todoslots.es/blog/slots/diferencia-wild-scatter#:~:text=%C2%BFQu%C3%A9%20es%20el%20s%C3%ADmbolo%20Wild,funciones%20especiales%20como%20los%20bonos.

*/
// jQuery FN
$.fn.playSpin = function (options) {
    if (this.length) {
        if ($(this).is(':animated')) return; // Return false if this element is animating
        startSeqs['mainSeq' + (++startNum)] = {};
        $(this).attr('data-playslot', startNum);

        var total = this.length;
        var thisSeq = 0;

        // Initialize options
        if (typeof options == 'undefined') {
            options = new Object();
        }

        // Pre-define end nums
        var endNums = [];
        if (typeof options.endNum != 'undefined') {
            if ($.isArray(options.endNum)) {
                endNums = options.endNum;
            } else {
                endNums = [options.endNum];
            }
        }

        for (var i = 0; i < this.length; i++) {
            if (typeof endNums[i] == 'undefined') {
                endNums.push(0);
            }
        }

        startSeqs['mainSeq' + startNum]['totalSpinning'] = total;
        return this.each(function () {
            options.endNum = endNums[thisSeq];
            startSeqs['mainSeq' + startNum]['subSeq' + (++thisSeq)] = {};
            startSeqs['mainSeq' + startNum]['subSeq' + thisSeq]['spinning'] = true;
            var track = {
                total: total,
                mainSeq: startNum,
                subSeq: thisSeq
            };
            (new slotMachine(this, options, track));
        });
    }
};

$.fn.stopSpin = function () {
    if (this.length) {
        if (!$(this).is(':animated')) return; // Return false if this element is not animating
        if ($(this)[0].hasAttribute('data-playslot')) {
            $.each(startSeqs['mainSeq' + $(this).attr('data-playslot')], function(index, obj) {
                obj['spinning'] = false;
            });
        }
    }
};

var slotMachine = function (el, options, track) {
    var slot = this;
    slot.$el = $(el);

    slot.defaultOptions = {
        easing: '',        // String: easing type for final spin
        time: 400,             // Number: total time of spin animation
        loops: 3,               // Number: times it will spin during the animation
        manualStop: false,      // Boolean: spin until user manually click to stop
        stopSeq: 'leftToRight',      // String: sequence of slot machine end animation, random, leftToRight, rightToLeft
        endNum: 0,              // Number: animation end at which Number/ sequence of list
        onEnd : $.noop,         // Function: run on each element spin end, it is passed endNum
        onFinish: $.noop        // Function: run on all element spin end, it is passed endNum
    };

    slot.spinSpeed = 0;
    slot.loopCount = 0;

    slot.init = function () {
        slot.options = $.extend({}, slot.defaultOptions, options);
        slot.setup();
        slot.startSpin();
    };

    slot.setup = function () {
        var $li = slot.$el.find('li').first();
        slot.liHeight = $li.innerHeight();
        slot.liCount = slot.$el.children().length-3;
        slot.listHeight = slot.liHeight * slot.liCount;
        slot.spinSpeed = slot.options.time / slot.options.loops;
        $li.clone().appendTo(slot.$el);
        if (slot.options.stopSeq == 'leftToRight') {
            if (track.subSeq != 1) {
                slot.options.manualStop = true;
            }
        } else if (slot.options.stopSeq == 'rightToLeft') {
            if (track.total != track.subSeq) {
                slot.options.manualStop = true;
            }
        }
    };

    slot.startSpin = function () {
        slot.$el
            .css('top', -slot.listHeight)
            .animate({'top': '0px'}, slot.spinSpeed, 'linear', function () {
                slot.lowerSpeed();
            });
    };

    slot.lowerSpeed = function () {
        slot.loopCount++;
        if (slot.loopCount < slot.options.loops ||
            (slot.options.manualStop && startSeqs['mainSeq' + track.mainSeq]['subSeq' + track.subSeq]['spinning'])) {
            slot.startSpin();
        } else {
            slot.endSpin();
        }
    };

    slot.endSpin = function () {
        if (slot.options.endNum == 0) {
            slot.options.endNum = 4;
        }
        if (slot.options.endNum < 0 || slot.options.endNum > slot.liCount) {
            slot.options.endNum = 0;
        }

        var finalPos = -((slot.liHeight * slot.options.endNum) - slot.liHeight);
        var finalSpeed = ((slot.spinSpeed * 1.5) * (slot.liCount)) / slot.options.endNum;
        slot.$el
            .css('top', -slot.listHeight)
            .animate({'top': finalPos}, finalSpeed, slot.options.easing, function () {
                slot.$el.find('li').last().remove();
                slot.endAnimation(slot.options.endNum);
                if ($.isFunction(slot.options.onEnd)) {
                    slot.options.onEnd(slot.options.endNum);
                }
                if (startSeqs['mainSeq' + track.mainSeq]['totalSpinning'] == 0) {
                    var totalNum = '';
                    $.each(startSeqs['mainSeq' + track.mainSeq], function(index, subSeqs) {
                            if (typeof subSeqs == 'object') {
                                totalNum += subSeqs['endNum'].toString();
                            }
                        }
                    );
                    if ($.isFunction(slot.options.onFinish)) {
                        slot.options.onFinish(totalNum);
                    }
                  }
                    slot1Pos1 = document.querySelector('ul#first').getElementsByTagName("li")[3].id;
                    slot2Pos1 = document.querySelector('ul#second').getElementsByTagName("li")[3].id;
                    slot3Pos1 = document.querySelector('ul#third').getElementsByTagName("li")[3].id;
                    slot4Pos1 = document.querySelector('ul#forth').getElementsByTagName("li")[3].id;
                    slot5Pos1 = document.querySelector('ul#fifth').getElementsByTagName("li")[3].id;
                    
                    slot1Pos2 = document.querySelector('ul#first').getElementsByTagName("li")[4].id;
                    slot2Pos2 = document.querySelector('ul#second').getElementsByTagName("li")[4].id;
                    slot3Pos2 = document.querySelector('ul#third').getElementsByTagName("li")[4].id;
                    slot4Pos2 = document.querySelector('ul#forth').getElementsByTagName("li")[4].id;
                    slot5Pos2 = document.querySelector('ul#fifth').getElementsByTagName("li")[4].id;

                    slot1Pos3 = document.querySelector('ul#first').getElementsByTagName("li")[5].id;
                    slot2Pos3 = document.querySelector('ul#second').getElementsByTagName("li")[5].id;
                    slot3Pos3 = document.querySelector('ul#third').getElementsByTagName("li")[5].id;
                    slot4Pos3 = document.querySelector('ul#forth').getElementsByTagName("li")[5].id;
                    slot5Pos3 = document.querySelector('ul#fifth').getElementsByTagName("li")[5].id;

                    if(slot1Pos1 == slot2Pos2 && slot2Pos2 == slot3Pos3 && slot3Pos3 == slot4Pos2 && slot4Pos2 == slot5Pos1){
                        console.log('premio V');
                    }
                    
                    if(slot1Pos1 == slot2Pos1 && slot2Pos1 == slot3Pos1 && slot3Pos1 == slot4Pos1 && slot4Pos1 == slot5Pos1){
                        console.log('premio primera fila');
                    }
                    if(slot1Pos2 == slot2Pos2 && slot2Pos2 == slot3Pos2 && slot3Pos2 == slot4Pos2 && slot4Pos2 == slot5Pos2){
                        console.log('premio segunda fila');
                    }

                    if(slot1Pos3 == slot2Pos3 && slot2Pos3 == slot3Pos3 && slot3Pos3 == slot4Pos3 && slot4Pos3 == slot5Pos3){
                        console.log('premio 3 fila');
                    }
                    if(slot1Pos1 == slot2Pos1 && slot2Pos1 == slot3Pos2 && slot3Pos2 == slot4Pos1 && slot4Pos1 == slot5Pos1){
                        console.log('v pequeña');
                    }

                    if(slot1Pos2 == slot2Pos1 && slot2Pos1 == slot3Pos1 && slot3Pos1 == slot4Pos1 && slot4Pos1 == slot5Pos1){
                        console.log('olla rara');
                    }

                    if(slot1Pos2 == slot2Pos1 && slot2Pos1 == slot3Pos2 && slot3Pos2 == slot4Pos1 && slot4Pos1 == slot5Pos2){
                        console.log('zigzag');
                    }

                    if(slot1Pos2 == slot2Pos3 && slot2Pos3 == slot3Pos3 && slot3Pos3 == slot4Pos3 && slot4Pos3 == slot5Pos2){
                        console.log('olla abajo');
                    }

                    if(slot1Pos3 == slot2Pos3 && slot2Pos3 == slot3Pos2 && slot3Pos2 == slot4Pos3 && slot4Pos3 == slot5Pos3){
                        console.log('zigzag inverso');
                    }

                    if(slot1Pos3 == slot2Pos2 && slot2Pos2 == slot3Pos1 && slot3Pos1 == slot4Pos2 && slot4Pos2 == slot5Pos3){
                        console.log('v inversa');
                    }
                    
            });
    }
    slot.endAnimation = function(endNum) {
        if (slot.options.stopSeq == 'leftToRight' && track.total != track.subSeq) {
            startSeqs['mainSeq' + track.mainSeq]['subSeq' + (track.subSeq + 1)]['spinning'] = false;
        } else if (slot.options.stopSeq == 'rightToLeft' && track.subSeq != 1) {
            startSeqs['mainSeq' + track.mainSeq]['subSeq' + (track.subSeq - 1)]['spinning'] = false;
        }
        startSeqs['mainSeq' + track.mainSeq]['totalSpinning']--;
        startSeqs['mainSeq' + track.mainSeq]['subSeq' + track.subSeq]['endNum'] = endNum;
    }

    slot.randomRange = function (low, high) {
        return Math.floor(Math.random() * (1 + high - low)) + low;
    };
    this.init();
};