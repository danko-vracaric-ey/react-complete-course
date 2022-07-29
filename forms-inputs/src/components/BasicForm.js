import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    enteredValue: enteredNameValue,
    isEnteredValueValid: isEnteredNameValid,
    enteredValueInvalid: enteredNameInvalid,
    enteredValueChangeHandler: enteredNameChangeHandler,
    onBlurHandler: onBlurNameHandler,
    reset: resetNameData,
  } = useInput2((value) => value.trim() !== "");

  let isFormValid = false;

  if (!enteredNameInvalid) {
    isFormValid = true;
  }

  const submitForm = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log(enteredNameValue);
    resetNameData();
  };

  const nameInvalidClass = enteredNameInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className={nameInvalidClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredNameValue}
            onChange={enteredNameChangeHandler}
            onBlur={onBlurNameHandler}
          />
          {enteredNameInvalid && <p>Try again</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
