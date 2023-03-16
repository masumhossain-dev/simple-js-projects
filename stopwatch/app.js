
   var seconds = 00;
   var tens = 00;
   var appendSecond = document.getElementById('seconds');
   var appendTens = document.getElementById('tens');
   var startBtn = document.getElementById('start-btn');
   var stopBtn = document.getElementById('stop-btn');
   var resetBtn = document.getElementById('reset-btn');
   var Interval;

   startBtn.onclick = function(){
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
   }
   stopBtn.onclick = function(){
      clearInterval(Interval);
   }
   resetBtn.onclick = function(){
      clearInterval(Interval);
      seconds = '00';
      tens = '00';
      appendSecond.innerHTML = seconds;
      appendTens.innerHTML = tens;
   }

   function startTimer(){
      tens++;
      if(tens<=9){
         appendTens.innerHTML = '0'+tens;
      }
      if(tens>9){
         appendTens.innerHTML = tens;
      }
      if(tens>99){
         seconds++;
         appendSecond.innerHTML = '0'+seconds;
         tens=0;
         appendTens.innerHTML = '0' + tens;
         
      }
      if(seconds>9){
         appendSecond.innerHTML = seconds;
      }
   }
