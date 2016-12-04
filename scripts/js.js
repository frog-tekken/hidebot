module.exports = function (robot) {

  robot.hear(/start workout/i, function (res) {
    res.send("Yeah, bring it on!:muscle:");
  });

  robot.respond(/Let's do (.*)/i, function (res) {
    var exerciseType = res.match[1];

    switch(exerciseType){
      case "run":
        res.reply("Don't come back until run 10 miles!");
        break;
      case "deadlift":
        res.reply("Be careful do not to hurt your back!");
        break;
      case "benchpress":
        res.reply("Ok, but not forget your legs too.");
        break;
      case "squat":
        res.reply("Good choice! Do it at least 5 sets!");
        break;
      default:
        res.reply("Ok let's start " + exerciseType + " !");
    }
  });

  robot.hear(/([0-9]+)([+\-*\/])([0-9]+)/i, function (res) {
    var leftHand = res.match[1];
    var operator = res.match[2];
    var rightHand = res.match[3];
    var answer;

    switch(operator){
      case "+":
        answer = parseInt(leftHand) + parseInt(rightHand);
        break;
      case "-":
        answer = parseInt(leftHand) - parseInt(rightHand);
        break;
      case "*":
        answer = parseInt(leftHand) * parseInt(rightHand);
        break;
      case "/":
        answer = parseInt(leftHand) / parseInt(rightHand);
        break;
    }

    res.reply("Not sure but I think it is " + answer);
  });

  // robot.hear(/I like pie/i, function (res){
  //   res.emote "makes a freshly baked pie"
  // });

};


// module.exports = (robot) ->

//   robot.hear /start workout/i, (res) ->
//     res.send "Yeah, bring it on!"

//   robot.respond /next exercise is (.*)/i, (res) ->
//     exerciseType = res.match[1]
//     if exerciseType is "benchpress"
//       res.reply "You did benchpress yesterday. Do squat!"
//     else
//       res.reply "Ok let's start #{exerciseType}!"
