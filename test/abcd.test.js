var expect = require("expect.js"),
    ABCD = require("../lib/abcd");

describe("The ABCD-er", function () {
  it("tells first week of the year is type A", function () {
    var abcder = ABCD.newAbcder(),
        weekType = abcder.fromWeek(1);
    expect(weekType).to.eql("A");
  });
});
