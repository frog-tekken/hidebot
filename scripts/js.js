module.exports = function (robot) {

  robot.hear(/start workout/i, function (res) {
    res.send("Yeah, bring it on!:muscle:");
  });

  robot.hear(/hello/i, function (res) {
    res.send("Do you even lift, bro.");
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

  robot.hear(/drink protein/i, function (res){
    res.emote("Shake it shake it!");
  });

  var exercises = ['run', 'squat', 'benchpress', 'deadlift', 'leg extension', 'leg curl', 'arm curl', 'shoulder press']
  robot.respond(/recommend/i, function(res){
    res.send(res.random(exercises));
  });

  robot.enter(function(res){
    res.send("Welcome "  + (res.message.user.name) + "! Enoy!");
  });
  robot.leave(function(res){
    res.send("Bye "  + (res.message.user.name) + ". So sad to see you off.");
  });

  robot.topic(function(res){
    res.send("#{res.message.text}? That's great!!'");
  });
};