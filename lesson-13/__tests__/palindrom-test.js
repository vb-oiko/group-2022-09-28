// https://jestjs.io/docs/getting-started#running-from-command-line
// yarn global add jest
// npm install jest --global

function isPalindrome(str) {}

test("empty string is a palindrome", () => {
  expect(isPalindrome("")).toBe(true);
});

test("'aaabaaa' is a palindrome", () => {
  expect(isPalindrome("aaabaaa")).toBe(true);
});

test("'Evil olive.' is a palindrome", () => {
  expect(isPalindrome("Evil olive.")).toBe(true);
});

test("'Don't nod.' is a palindrome", () => {
  expect(isPalindrome("Don't nod.")).toBe(true);
});

test("'Yo, banana boy!' is a palindrome", () => {
  expect(isPalindrome("Yo, banana boy")).toBe(true);
});

test("'Borrow or rob?' is a palindrome", () => {
  expect(isPalindrome("Borrow or rob?")).toBe(true);
});

test("'Я несу гусеня.' is a palindrome", () => {
  expect(isPalindrome("Я несу гусеня.")).toBe(true);
});

test("'О, гомін німого!' is a palindrome", () => {
  expect(isPalindrome("О, гомін німого!")).toBe(true);
});

test("'Козак з казок.' is a palindrome", () => {
  expect(isPalindrome("Козак з казок.")).toBe(true);
});
