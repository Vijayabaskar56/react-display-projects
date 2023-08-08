import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

const validation = Yup.object({
  passwordLength: Yup.number()
    .required("Length is Required")
    .max(20, "Shoude be lesser than 20")
    .min(6, "should be greater than six"),
});

function App() {
  // state
  const [password, setpassword] = useState("");
  const [generatePassword, setgeneratePassword] = useState("");

  const createPassword = (character, passwordLength) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * character.length);
      result += character.charAt(characterIndex);
    }
    setpassword(result);
    return result;
  };

  const generatePasswordString = ({
    passwordLength,
    upperCase,
    lowerCase,
    number,
    character,
  }) => {
    let characterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (upperCase === true) {
      characterList += upperCaseChars;
    }
    if (lowerCase === true) {
      characterList += lowerCaseChars;
    }
    if (number === true) {
      characterList += digitChars;
    }
    if (character === true) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setpassword(passwordResult);
    setgeneratePassword(true);
  };
  const formik = useFormik({
    initialValues: {
      passwordLength: "",
      upperCase: false,
      lowerCase: false,
      number: false,
      character: false,
    },
    validationSchema: validation,
    onSubmit: (values) => {
      generatePasswordString(values);
    },
    onReset: (_values) => {
      formik.setValues({
        passwordLength: "",
        upperCase: false,
        lowerCase: false,
        number: false,
        character: false,
      });
      setpassword("");
      setgeneratePassword(false);
    },
  });

  return (
    <>
      <h1>Password Generator</h1>
      <form onSubmit={formik.handleSubmit}>
        <label
          className="label"
          htmlFor="passwordLength">
          Enter the Password Length
        </label>{" "}
        <br />
        <input
          className="input-field"
          id="passwordLength"
          name="passwordLength"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordLength}
        />
        <br />
        {formik.touched.passwordLength && formik.errors.passwordLength ? (
          <div className="error">{formik.errors.passwordLength}</div>
        ) : null}
        <br />
        <div className="checkCointainer">
          <input
            className="input-checkbox"
            id="upperCase"
            name="upperCase"
            type="checkbox"
            checked={formik.values.upperCase}
            onChange={formik.handleChange}
            value={formik.values.upperCase}></input>
          <label
            className="label-checkbox"
            htmlFor="upperCase">
            <p className="labeltext">UpperCase</p>
          </label>
          <br />
          <input
            id="number"
            name="number"
            type="checkbox"
            checked={formik.values.number}
            onChange={formik.handleChange}
            value={formik.values.number}></input>
          <label
            className="label-checkbox"
            htmlFor="number">
            <p className="labeltext">Number</p>
          </label>
          <br />
          <input
            id="lowerCase"
            name="lowerCase"
            type="checkbox"
            checked={formik.values.lowerCase}
            onChange={formik.handleChange}
            value={formik.values.lowerCase}></input>
          <label
            className="label-checkbox"
            htmlFor="lowerCase">
            <p className="labeltext">LowerCase</p>
          </label>
          <br />
          <input
            id="character"
            name="character"
            type="checkbox"
            checked={formik.values.character}
            onChange={formik.handleChange}
            value={formik.values.character}></input>
          <label
            className="label-checkbox"
            htmlFor="character">
            <p className="labeltext">Symbols</p>
          </label>
        </div>
        <br />
        <button
          className="btn"
          type="submit">
          Genetate
        </button>
        <button
          type="button"
          className="btn"
          onClick={formik.handleReset}>
          Reset
        </button>
        <br />
        {generatePassword && <h3>Here is your Password: {password}</h3>}
      </form>
    </>
  );
}

export default App;
