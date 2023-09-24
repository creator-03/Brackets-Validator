function isBracketsValid(input) {
  const openers = "([{";
  const closers = ")]}";
  let openerCount = 0;

  for (let char of input) {
    if (openers.includes(char)) {
      openerCount++;
    } else if (closers.includes(char)) {
      if (openerCount === 0) {
        return false;
      }

      const lastOpener = input.charAt(input.lastIndexOf(char) - 1);

      if (openers.indexOf(lastOpener) !== closers.indexOf(char)) {
        return false;
      }

      openerCount--;
    }
  }

  return openerCount === 0;
}
function onlyBrackets(symbols) {
  const pattern = /^[{\[\]\(\)}]+$/;
  return symbols.match(pattern);
}
function validateBrackets() {
  const inputStr = document.getElementById("braceInput").value;
  const resultDiv = document.getElementById("result");

  if (inputStr === "") {
    alert("The statement is empty ⛔");
    return;
  }
  if (!onlyBrackets(inputStr)) {
    alert("Enter Brackets Only ❌");
    return;
  }
  if (isBracketsValid(inputStr)) {
    resultDiv.textContent = "";
    alert("The statement is true ✅");
  } else {
    resultDiv.textContent = "";
    alert("The statement is false ❌");
  }
}
