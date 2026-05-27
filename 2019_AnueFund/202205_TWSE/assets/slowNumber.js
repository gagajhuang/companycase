var easing = {
    quadratic: function (x){
      return Math.sqrt(x);
    }
};

function range(start, stop, step){
  var array = [];
  for(var i = start; i < stop; i += step) array.push(i);
  return array;
}

function interpolation(fps, easing, finalValue){
  function scaleIt(value){return finalValue * value; }

  var x = range(0, 1, 1/fps),
      y = x.map(easing).map(scaleIt);
      // console.log(y,finalValue) //20,1400
      
  return y;
  // return padRight(y+"0",lenght);;
}

function animateEl(values, duration, onAnimate){
  var frameIndex = 0,
      fps = values.length,
      id = setInterval(anime, duration/fps );

  function anime(){
    var current = values[frameIndex],
        isLastFrame = (frameIndex === fps - 1);
    // console.log(onAnimate)
    onAnimate(current, frameIndex, values);//function 在 animateEl()

    if(isLastFrame){
      clearInterval(id);
    }else{
      frameIndex++;
    }
  }
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function unformat(content){
  var unlocalized = content.replace('.', '').replace(',', '.'),
      value = parseFloat(unlocalized);
      // console.log(unlocalized);
  return unlocalized;
}

function format(value){
  return value.toString().replace('.', ',');
}

function scrollAct(){
  var fps = 20,
      els = [].slice.call(document.querySelectorAll('.slowNumber'));

  els.forEach(function(el){
      var content = (el.firstChild.textContent).trim(),
          decimalPlaces = content.split(',')[1] || '',
          value = unformat(content),
          values = interpolation(fps, easing.quadratic, value);
          // console.log(value) //1,400
          // console.log(value.length) //5
      animateEl(values, 1000, function (current, i, values){
        // console.log(value.length)
        var isLast = (i === values.length - 1),
            valueLen = unformat(content).length,
            value = round(current, decimalPlaces.length);
        
        //右邊補0
        var value = '' + value;
        // console.log(value, valueLen) //=> num, 5
        if (value.length >= valueLen) {
          finalNum = value
        } else {
          finalNum = value + new Array(valueLen - value.length + 1).join("0")
        }
        el.firstChild.textContent = isLast? content : format(finalNum)
      });
  }); 
  scrollAct = function(){};
}
$(window).scroll(function(){
  var number_H = $('#fund').offset().top;
  if ($(window).scrollTop() <= number_H - 100 && $(window).scrollTop() > 400){
    scrollAct()
  }
});


