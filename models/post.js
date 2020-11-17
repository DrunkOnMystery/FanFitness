module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
      gameid: {
        type: DataTypes.INTEGER
      },
      teamid: {
        type: DataTypes.INTEGER
      },
      teamname: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      gamedate: {
        type: DataTypes.DATE
      },
      runs: {
        type: DataTypes.INTEGER
      },
      singles: {
        type: DataTypes.INTEGER
      },
      doubles: {
        type: DataTypes.INTEGER
      },
      triples: {
        type: DataTypes.INTEGER
      },
      homeruns: {
        type: DataTypes.INTEGER
      },
      strikeouts: {
        type: DataTypes.INTEGER
      },
      popouts: {
        type: DataTypes.INTEGER
      },
      flyouts: {
        type: DataTypes.INTEGER
      },
      groundouts: {
        type: DataTypes.INTEGER
      },
      steals: {
        type: DataTypes.INTEGER
      },
      walks: {
        type: DataTypes.INTEGER
      },
      doubleplays: {
        type: DataTypes.INTEGER
      },
      tripleplays: {
        type: DataTypes.INTEGER
      },
      oppsingles: {
        type: DataTypes.INTEGER
      },
      oppdoubles: {
        type: DataTypes.INTEGER
      },
      opptriples: {
        type: DataTypes.INTEGER
      },
      opphomeruns: {
        type: DataTypes.INTEGER
      },
      oppwalks: {
        type: DataTypes.INTEGER
      },
      opphitbypitch: {
        type: DataTypes.INTEGER
      },
      oppsteals: {
        type: DataTypes.INTEGER
      },
      oppflyouts: {
        type: DataTypes.INTEGER
      },
      oppgroundouts: {
        type: DataTypes.INTEGER
      },
      opplineouts: {
        type: DataTypes.INTEGER
      },
      opppopouts: {
        type: DataTypes.INTEGER
      },
      oppstrikeouts: {
        type: DataTypes.INTEGER
      },
      oppdoubleplays: {
        type: DataTypes.INTEGER
      },
      opptripleplays: {
        type: DataTypes.INTEGER
      },

    });
  
    return Post;
  };