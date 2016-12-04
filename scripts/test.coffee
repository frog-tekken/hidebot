module.exports = (robot) ->

  robot.hear /start workout/i, (res) ->
    res.send "Yeah, bring it on!"

  robot.respond /next exercise is (.*)/i, (res) ->
    exerciseType = res.match[1]
    if exerciseType is "benchpress"
      res.reply "You did benchpress yesterday. Do squat!"
    else
      res.reply "Ok let's start #{exerciseType}!"