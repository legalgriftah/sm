var startSeqs = {};
var startNum = 0;

var slot1Pos1;
var slot1Pos2;
var slot1Pos3;

var slot2Pos1;
var slot2Pos2;
var slot2Pos3;

var slot3Pos1;
var slot3Pos2;
var slot3Pos3;

var slot4Pos1;
var slot4Pos2;
var slot4Pos3;

var slot5Pos1;
var slot5Pos2;
var slot5Pos3;

var topSlot1;
var topSlot2;
var topSlot3;
var topSlot4;
var topSlot5;


var basePx = Number(143);

var maxSlot1 = Number(document.getElementsByTagName("ul")[0].getElementsByTagName("li").length);
var maxSlot2 = Number(document.getElementsByTagName("ul")[1].getElementsByTagName("li").length);
var maxSlot3 = Number(document.getElementsByTagName("ul")[2].getElementsByTagName("li").length);
var maxSlot4 = Number(document.getElementsByTagName("ul")[3].getElementsByTagName("li").length);
var maxSlot5 = Number(document.getElementsByTagName("ul")[4].getElementsByTagName("li").length);

/*
hay que guardar el orden actual para que al lanzarse se lance de la misma forma.
*/
//segun las probabilidades se repetirán más, asi es mas probable
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
        time: 350,             // Number: total time of spin animation
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

        $li.clone().appendTo(slot.$el); // Clone to last row for smooth animation

        // Configure stopSeq
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
            //anadir 
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
            slot.options.endNum = slot.randomRange(1, slot.liCount);
        }

        // Error handling if endNum is out of range
        if (slot.options.endNum < 0 || slot.options.endNum > slot.liCount) {
            slot.options.endNum = 0;
        }

        var finalPos = -((slot.liHeight * slot.options.endNum) - slot.liHeight);
        var finalSpeed = ((slot.spinSpeed * 1.5) * (slot.liCount)) / slot.options.endNum;

        slot.$el
            .css('top', -slot.listHeight)
            .animate({'top': finalPos}, finalSpeed, slot.options.easing, function () {
                slot.$el.find('li').last().remove(); // Remove the cloned row

                slot.endAnimation(slot.options.endNum);
                if ($.isFunction(slot.options.onEnd)) {
                    slot.options.onEnd(slot.options.endNum);
                }

                // onFinish is every element is finished animation
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