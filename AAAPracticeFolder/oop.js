// creat a stopwatch that can start stop show duration and reset. it throws an error if start or stop are called repetitivley

// this was the solution. i did not come up with it because i didnt know where to start getting time and was frustrated trying to find the answer.

// function Stopwatch() {
//     let startTime, endTime, running, duration=0;

//     this.start = function() {
//         if (running)
//             throw new Error('Stopwatch has already started.');
        
//         running = true;
        
//         startTime = new Date();
//     };

//     this.stop = function(){
//         if (!running)
//             throw new Error('Stopwatch has not started yet.');

//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) /1000;
//         duration += seconds

//     };

//     this.reset = function(){
//         running = false;
//         startTime = null;
//         endTime = null;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function() {return duration; }
//     });
// }

//reattempt this at another date

