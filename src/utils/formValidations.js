export function minLengthValidation(inputData, minLength) {
  // Validate the length of the input
  const { value } = inputData;
  let sClass = "";
  let bOk = false;
  removeClassErrorSuccess(inputData);

  if (value.length >= minLength) {
    sClass = "success";
    bOk = true;
  } else {
    sClass = "error";
  }
  inputData.classList.add(sClass);
  return bOk;
}
export function emailValidation(inputData) {
  // Validate email with a regexp
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const { value } = inputData;
  let bOk = false;
  let sClass = "error";
  removeClassErrorSuccess(inputData);

  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    sClass = "success";
    bOk = true;
  }
  inputData.classList.add(sClass);
  return bOk;
}
function removeClassErrorSuccess(inputData) {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
}
