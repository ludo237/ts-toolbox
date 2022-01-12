/**
 * @jest-environment jsdom
 */
import createDownloadLink from "../src/createDownloadLink";

test("it creates an anchor tag on demand", () => {
  jest.spyOn(document.body, "appendChild");

  createDownloadLink(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bitcoin_logo.svg/1024px-Bitcoin_logo.svg.png",
    "Bitcoin Logo",
    false
  );

  expect(document.body.appendChild).toBeCalledWith(
    expect.any(HTMLAnchorElement)
  );
});

test("anchor tag can be removed automatically", () => {
  jest.spyOn(document.body, "removeChild");

  createDownloadLink(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bitcoin_logo.svg/1024px-Bitcoin_logo.svg.png",
    "Bitcoin Logo"
  );

  expect(document.body.removeChild).toBeCalled();
});
