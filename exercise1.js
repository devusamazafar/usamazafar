var majomass = 55;
var majoheight = 5.3;
var binganakmass = 72;
var binganakheight = 5.10;

var bmimajo = majomass / (majoheight * majoheight);

var bmibinganak = binganakmass / (binganakheight * binganakheight);

var majovadabinganak = bmimajo < bmibinganak;

console.log("kya majo barha ha bingnak se?" + majovadabinganak);
