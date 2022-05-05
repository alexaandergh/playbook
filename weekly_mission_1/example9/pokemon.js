class PKM{
  constructor(name){
    this.name = name
  }

  sayHi(){
    console.log(`Mi pokemon ${this.name} te saluda!!!`)
  }

  sayMessage(msg){
    console.log(`Mi pokemon ${this.name} dice: ${msg}`)
  }
}

module.exports = PKM