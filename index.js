// const sw = new Stopwatch()

// function Stopwatch() {
//     let startTime, stopTime, running, duration = 0

//     this.start = function(){
//         if(running){
//             throw new Error('Stopwatch is already running')
//         } 
        
//         startTime =new Date()

//     }
//     this.stop = function(){
//         if(!running){
//             throw new Error('Stopwatch is not running')
//         }

//         stopTime=new Date()
        
//         const seconds = (stopTime.getTime() - startTime.getTime())/1000
//         duraton += seconds
//     }
//     this.reset = function(){
//         startTime=null,
//         stopTime=null,
//         running=false,
//         duration=0
//     }

//     Object.defineProperty(this, 'duration', {
//         get : function(){
//             return (duration)
//         }
//     })
// }

function Shape(){
  
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

function Circle(radius){
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.draw = function(){
    console.log('draw')
}

const s = new Shape()
const c = new Circle(1)