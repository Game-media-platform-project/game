window.requestAnimFrame = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function( callback ){
   window.setTimeout(callback, 1000 / 60);
};

var game = {
       score: 0,
       width: window.innerWidth,
       height: window.innerWidth
   },
    players = {},
   elCanvas,
   ctx;
window.onload = init;
window.onresize = resizeGame;
ctx.clearRect(0, 0, game.width, game.height);
function render(time) {

   requestAnimFrame(render);
   for (var i = 0; i < GameObjects.length; i++) {
       GameObjects[i].update(time);
       GameObjects[i].draw();
      ctx.fillStyle = "#000000";
ctx.font = "bold 32px Arial";
ctx.fillText(game.score, 10, 32);
   }
}

function init() {
   elCanvas = document.getElementById('game');
   ctx = elCanvas.getContext('2d');
   resizeGame();
   var obstacle = new Obstacle();
obstacle.add();
   COUCHFRIENDS.settings.apiKey = '<your couchfriends.com api key>';
COUCHFRIENDS.settings.host = 'ws.couchfriends.com';
COUCHFRIENDS.settings.port = '80';
COUCHFRIENDS.connect();
});
   requestAnimFrame(render);
}

/**
* Resize the game to fullscreen
*/
function resizeGame() {
   game.width = window.innerWidth;
   game.height = window.innerHeight;
   elCanvas.width = game.width;
   elCanvas.height = game.height;
}
COUCHFRIENDS.on('connect', function() {
   var jsonData = {
       topic: 'game',
       action: 'host',
       data: {
           sessionKey: ''
       }
      COUCHFRIENDS.on('playerJoined', function(data) {
   var player = new Player();
   player.clientId = data.id;
   player.add();
   players.push(player);
});

COUCHFRIENDS.on('playerLeft', function(data) {
   for (var i = 0; i < players.length; i++) {
       if (players[i].clientId == data.id) {
           players[i].remove();
           players.splice(i,1);
       }
   }
});
   COUCHFRIENDS.on('playerOrientation', function(data) {
   for (var i = 0; i < players.length; i++) {
       if (players[i].clientId == data.id) {
           players[i].speed.x = data.x * 8.5;
           return;
       }
   }
});
   };
   COUCHFRIENDS.send(jsonData);
});
