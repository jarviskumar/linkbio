new TypeIt("#hTxt", {
    speed: 80,
    waitUntilVisible: true,
  })
    .type("Dipesh pradhan", { delay: 500 })
    .move(-6)
    .delete(1)
    .type("P")
    .move(null, { to: "END" }, {delay: 400}).go();
  