var elForm = document.querySelector(".money-gramm");
var elInput = document.querySelector('.money-gramm__input');
var elSelector = elForm.querySelector('.money-gramm__select');
var elResult = document.querySelector('.money-gramm__result');

var USDTOSUM = 10850;
var EURTOSUM = 12500;
var RUBLTOSUM = 150;

elForm = addEventListener('submit', function(evt){
    evt.preventDefault();

    var currencyUsd = elInput.value * USDTOSUM;
    var currencyEur = elInput.value * EURTOSUM;
    var currencyRubl = elInput.value * RUBLTOSUM;

    if (elSelector.value == 'usd'){
        elResult.textContent = currencyUsd;
    }else if (elSelector.value == 'eur'){
        elResult.textContent = currencyEur;
    }
    else if (elSelector.value == 'rubl'){
        elResult.textContent = currencyRubl;
    }

})