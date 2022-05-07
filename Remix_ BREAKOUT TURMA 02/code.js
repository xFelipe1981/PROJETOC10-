var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var bola = createSprite(200,200,15,15);
  bola.shapeColor = "black";
  
  var pontuacao = 0;
  var estado="inicio";
  
  
  
  
  var caixa1 = createSprite(25,50+25, 50, 50);
  caixa1.shapeColor = "red";
  
  var caixa2 = createSprite(50+25,50+25, 50, 50);
  caixa2.shapeColor = "blue";
  
  var caixa3 = createSprite(50*2+25,50+25, 50, 50);
  caixa3.shapeColor = "red";
  
  var caixa4 = createSprite(50*3+25,50+25, 50, 50);
  caixa4.shapeColor = "blue";
  
  var caixa5 = createSprite(50*4+25,50+25, 50, 50);
  caixa5.shapeColor = "red";
  
  var caixa6 = createSprite(50*5+25,50+25, 50, 50);
  caixa6.shapeColor = "blue";
  
  var caixa7 = createSprite(50*6+25,50+25, 50, 50);
  caixa7.shapeColor = "red";
  
  var caixa8 = createSprite(50*7+25,50+25, 50, 50);
  caixa8.shapeColor = "blue";
  
  
  var caixa9 = createSprite(25,50*2+25, 50, 50);
  caixa9.shapeColor = "blue";
  
  var caixa10 = createSprite(50+25,50*2+25, 50, 50);
  caixa10.shapeColor = "red";
  
  var caixa11 = createSprite(50*2+25,50*2+25, 50, 50);
  caixa11.shapeColor = "blue";
  
  var caixa12 = createSprite(50*3+25,50*2+25, 50, 50);
  caixa12.shapeColor = "red";
  
  var caixa13 = createSprite(50*4+25,50*2+25, 50, 50);
  caixa13.shapeColor = "blue";
  
  var caixa14 = createSprite(50*5+25,50*2+25, 50, 50);
  caixa14.shapeColor = "red";
  
  var caixa15 = createSprite(50*6+25,50*2+25, 50, 50);
  caixa15.shapeColor = "blue";
  
  var caixa16 = createSprite(50*7+25,50*2+25, 50, 50);
  caixa16.shapeColor = "red";
  
  var raquete = createSprite(200,360,70,15);
  raquete.shapeColor = "lime";
  
  
  
  createEdgeSprites();
  
  function draw() {
     background("white");
    drawSprites();
    if(estado==="inicio"){
    bola.velocityX = 0;
    bola.velocityY = 0;
    textAlign(CENTER);
    textSize(15);
    fill("black");
    text("Pressione espaço para iniciar",200,300);
    }
    
    if(bola.y>400){
    estado="perdeu";
    textAlign(CENTER);
    textSize(30);
    fill("black");
    text("VOCE PERDEU",200,300);
    }
    if(pontuacao===16){
    estado="ganhou";
    bola.velocityX=0;
    bola.velocityY=0;
    raquete=(200,200);
    textAlign(CENTER);
    textSize(50);
    fill("black");
    text("VOCÊ VENCEU!", 200,200);
    }
    
    
    
    textAlign(CENTER, TOP);
    textSize(27);
    fill("black") ;
    text("pontuacao:"+pontuacao, 200, 15);
  
     raquete.x=mouseX;
    if(keyDown("space")){
      bola.velocityY=3;
      bola.velocityX=3;
      estado="jogando";
    }
    
    bola.bounceOff(raquete);
    
    bola.bounceOff(leftEdge);
    
    bola.bounceOff(rightEdge);
    bola.bounceOff(topEdge); 
    raquete.bounceOff(leftEdge);
    raquete.bounceOff(rightEdge);
    
     if(bola.bounceOff(caixa1)){
      caixa1.destroy();
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa2)){
      caixa2.destroy(); 
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa3)){ 
      caixa3.destroy();
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa4)){
      caixa4.destroy();
      pontuacao=pontuacao+1;
    }
     if(bola.bounceOff(caixa5)){ 
       caixa5.destroy();
       pontuacao=pontuacao+1;
    }
     if(bola.bounceOff(caixa6)) {
       caixa6.destroy();
       pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa7)) { 
      caixa7.destroy();
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa8)){
      caixa8.destroy();
      pontuacao=pontuacao+1;
    }
    
    //PARTE DE BAIXO DAS CAIXA
    
    if(bola.bounceOff(caixa9)){
      caixa9.destroy();
      pontuacao=pontuacao+1;
    }
    
    if(bola.bounceOff(caixa10)){
      caixa10.destroy();
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa11)){ 
      caixa11.destroy();
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa12)){
      caixa12.destroy();
      pontuacao=pontuacao+1;
    }
     if(bola.bounceOff(caixa13)){ 
       caixa13.destroy();
       pontuacao=pontuacao+1;
    }
     if(bola.bounceOff(caixa14)) {
      caixa14.destroy();
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa15)) { 
      caixa15.destroy();
      pontuacao=pontuacao+1;
    }
    if(bola.bounceOff(caixa16)){
      caixa16.destroy();
      pontuacao=pontuacao+1;
    }
    }
  



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
