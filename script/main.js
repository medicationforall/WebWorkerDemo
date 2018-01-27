$(document).ready(function(){
    //console.log('main loaded');
    $('.clickButton').on('click',function(event){
      event.preventDefault();
      console.log('click here');
      
      if (window.Worker) {
        console.log('supports workers');
        var myWorker = new Worker('script/worker.js');
        
        myWorker.onmessage = function(e) {
          $('.content').text(e.data);
          console.log('Message received from worker',e);
        }.bind(this);
        
        console.log('before post message');
        myWorker.postMessage([5,5]);
        console.log('after post message');
      }
    });
});
