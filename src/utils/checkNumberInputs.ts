export const checkNumberInputs = (
  e: React.ChangeEvent<HTMLInputElement>,
  passedFunction: (...args: any[]) => void
) => {
  const notANumber = isNaN(Number(e.target.value));
  if (notANumber) {
    e.target.classList.add("warning_input");
  } else {
    e.target.classList.remove("warning_input");
    passedFunction();
  }
};
