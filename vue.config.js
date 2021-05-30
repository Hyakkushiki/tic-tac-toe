  function getPublicPath() {
    console.log("*** ___ --- " + process.env.NODE_ENV + "  --- ___ ***");
    switch (process.env.NODE_ENV) {
      case 'production': return '/tic-tac-toe/'
      case 'qa': return '/QaEnv/'
      case 'dev': return '/DevEnv/'
      case 'stage': return '/StageEnv/'
      default: return '/'
    }
  }
  
  module.exports = {
    publicPath: getPublicPath()
  }