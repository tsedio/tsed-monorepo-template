import {log} from "./index";

describe("core", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });
  it("should log something", () => {
    log("Hello world");
    expect(console.log).toHaveBeenCalledWith("Hello world");
  });
});
