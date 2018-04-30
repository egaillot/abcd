var newAbcder = function () {

  var WEEK_TYPES = ["A", "B", "C", "D"];

  var fromWeek = function(weekNumber) {
    var type_index = (weekNumber - 1) % (WEEK_TYPES.length);
    return WEEK_TYPES[type_index];
  };

  return {
    fromWeek: fromWeek
  };
};

module.exports = {
  newAbcder: newAbcder
};
