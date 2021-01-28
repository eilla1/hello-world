const ws = new Zdog.Illustration({
  element: '.model',
  resize: 'fullscreen',
})

const cube = new Zdog.Box({
  addTo: ws,
  width: 100,
  height: 100,
  depth: 100,
  stroke: false,
  leftFace: '#da0',
  rightFace: '#e62',
  topFace: '#ed0',
  bottomFace: '#636',
})

ws.updateRenderGraph()

function animatemodel() {
  ws.rotate.y += 0.01
  ws.rotate.x += 0.01
  ws.updateRenderGraph()
  requestAnimationFrame(animatemodel)
}

animatemodel()