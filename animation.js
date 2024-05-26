new TypeIt("#hTxt", {
    speed: 80,
    waitUntilVisible: true,
  })
    .type("", { delay: 500 })
    
    .move(null, { to: "END" }, {delay: 400}).go();
  
