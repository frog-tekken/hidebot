module.exports = function (robot) {
  robot.hear(/start workout/i, function (res) {
    res.send("Yeah, bring it on!");
  });

  robot.respond(/next exercise is (.*)/i, function (res) {
    var exerciseType = res.match[1];

    if (doorType == "benchpress") {
      res.reply("You did benchpress yesterday. Do squat!");
    } else {
      res.reply("Ok let's start " + exerciseType + " !");
    }
  });

  robot.hear(/([0-9]+)([+\-*\/])([0-9]+)=\?/i, function (res) {
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

    res.reply("The anwer is " + answer + " だろ！？");
  })
};