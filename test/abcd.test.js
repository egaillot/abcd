var expect = require("expect.js"),
    ABCD = require("../lib/abcd");

describe("The ABCD-er", function () {
  it("tells first week of the year is type A", function () {
    var abcder = ABCD.newAbcder(),
        weekType = abcder.fromWeek(1);
    expect(weekType).to.eql("A");
  });

  it("tells second week of the year is type B", function () {
    var abcder = ABCD.newAbcder(),
        weekType = abcder.fromWeek(2);
    expect(weekType).to.eql("B");
  });

  it("tells third week of the year is type C", function () {
    var abcder = ABCD.newAbcder(),
        weekType = abcder.fromWeek(3);
    expect(weekType).to.eql("C");
  });

  it("tells fourth week of the year is type D", function () {
    var abcder = ABCD.newAbcder(),
        weekType = abcder.fromWeek(4);
    expect(weekType).to.eql("D");
  });

  it("tells fifth week of the year is type A again", function () {
    var abcder = ABCD.newAbcder(),
        weekType = abcder.fromWeek(5);
    expect(weekType).to.eql("A");
  });
});
