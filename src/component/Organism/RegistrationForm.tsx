import { SetStateAction, useEffect, useState } from "react";
import LabeledInput from "../Molecules/LabeledInput";
import Label from "../Atoms/Label";
import Dropdown from "../Atoms/Dropdown";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("Nepal");
  const [city, setCity] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }
    setToggle(!toggle);
  };

  useEffect(() => {
    setError("");
  }, [toggle]);

  useEffect(() => {
    if (toggle) {
      setToggle(!toggle);
    }
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    gender,
    address,
    country,
    city,
  ]);

  return (
    <section className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <h1>Register</h1>
        <div className="form__group">
          <div className="form__group__item">
            <LabeledInput
              htmlFor="firstName"
              text="First Name"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              required={true}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form__group__item">
            <LabeledInput
              htmlFor="lastName"
              text="Last Name"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              required={true}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>

        <LabeledInput
          htmlFor="email"
          type="email"
          text="Email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <LabeledInput
          htmlFor="password"
          text="Password"
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <LabeledInput
          htmlFor="confirmPassword"
          text="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          required={true}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <Label htmlFor="gender" text="Gender" />
        <div className="form__gender">
          <LabeledInput
            htmlFor="male"
            text="Male"
            name="gender"
            id="male"
            type="radio"
            value="male"
            modifierClass="labeled-input--radio label--gender"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />

          <LabeledInput
            htmlFor="female"
            text="Female"
            name="gender"
            id="female"
            type="radio"
            value="female"
            modifierClass="labeled-input--radio label--gender"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />

          <LabeledInput
            htmlFor="other"
            text="Other"
            name="gender"
            id="other"
            type="radio"
            value="other"
            modifierClass="labeled-input--radio label--gender"
            checked={gender === "other"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <LabeledInput
          htmlFor="address"
          text="Address"
          name="address"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <div className="form__group form__group--last">
          <div className="form__group__item">
            <Dropdown
              values={["Nepal", "India", "USA", "UK", "Australia"]}
              onChange={(e: { target: { value: SetStateAction<string> } }) => {
                setCountry(e.target.value);
              }}
              selectedValue={country}
            />
          </div>
          <div className="form__group__item">
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <Label text={error} modifierClass="form__error" />
        <Button type="submit" text="Login" />
      </form>
      <div className={toggle ? "form__result" : "hidden"}>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        <p>Gender: {gender}</p>
        <p>Address: {address}</p>
        <p>Country: {country}</p>
        <p>City: {city}</p>
      </div>
    </section>
  );
};

export default Form;
