import { render, screen } from "@testing-library/react";
import Form from "../../component/Organism/RegistrationForm";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const fillForm = async (formData: { [key: string]: string }) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    address,
    city,
    gender,
    country,
  } = formData;

  if (firstName)
    await userEvent.type(screen.getByPlaceholderText("First Name"), firstName);
  if (lastName)
    await userEvent.type(screen.getByPlaceholderText("Last Name"), lastName);
  if (email) await userEvent.type(screen.getByPlaceholderText("Email"), email);
  if (password)
    await userEvent.type(screen.getByPlaceholderText("Password"), password);
  if (confirmPassword)
    await userEvent.type(
      screen.getByPlaceholderText("Confirm Password"),
      confirmPassword
    );
  if (address)
    await userEvent.type(screen.getByPlaceholderText("Address"), address);
  if (city) await userEvent.type(screen.getByPlaceholderText("City"), city);
  if (gender) await userEvent.click(screen.getByLabelText(gender));
  if (country)
    await userEvent.selectOptions(screen.getByRole("combobox"), country);

  await userEvent.click(screen.getByRole("button", { name: /Submit/i }));
};

describe("Form Component", () => {
  beforeEach(() => render(<Form />));

  test("allows user to input data in all fields and submit button functionality", async () => {
    await fillForm({
      firstName: "Dimple",
      lastName: "Saraogi",
      email: "example@example.com",
      password: "password123",
      confirmPassword: "password123",
      address: "1234 Street Name",
      city: "Kathmandu",
      gender: "Male",
      country: "Nepal",
    });

    expect(screen.getByText(/First Name: Dimple/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name: Saraogi/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: example@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Address: 1234 Street Name/i)).toBeInTheDocument();
    expect(screen.getByText(/City: Kathmandu/i)).toBeInTheDocument();
    expect(screen.getByText(/Country: Nepal/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender: Male/i)).toBeInTheDocument();
  });

  test("wrong email format does not allow user to submit", async () => {
    await fillForm({
      firstName: "Dimple",
      lastName: "Saraogi",
      email: "example",
      password: "password123",
      confirmPassword: "password123",
    });

    expect(screen.getByPlaceholderText("Email")).toBeInvalid();
  });

  test("shows error when password and confirm password do not match", async () => {
    await fillForm({
      firstName: "Dimple",
      lastName: "Saraogi",
      email: "example@example.com",
      password: "password123",
      confirmPassword: "password456",
    });

    expect(screen.getByText(/Password does not match/i)).toBeInTheDocument();
  });

  test("resets error when password and confirm password match after an error", async () => {
    await fillForm({
      firstName: "Dimple",
      lastName: "Saraogi",
      email: "example@example.com",
      password: "password123",
      confirmPassword: "password456",
    });

    await userEvent.clear(screen.getByPlaceholderText("Confirm Password"));
    await userEvent.type(
      screen.getByPlaceholderText("Confirm Password"),
      "password123"
    );
    await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(
      screen.queryByText(/Password does not match/i)
    ).not.toBeInTheDocument();
  });

  test("displays selected gender correctly", async () => {
    await fillForm({
      gender: "Female",
    });

    expect(screen.getByText(/Gender: female/i)).toBeInTheDocument();
  });

  test("displays selected country correctly", async () => {
    await fillForm({
      country: "USA",
    });

    expect(screen.getByText(/Country: USA/i)).toBeInTheDocument();
  });

  test("requires all the required fields", async () => {
    await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(screen.getByPlaceholderText("First Name")).toBeInvalid();
    expect(screen.getByPlaceholderText("Last Name")).toBeInvalid();
    expect(screen.getByPlaceholderText("Email")).toBeInvalid();
    expect(screen.getByPlaceholderText("Password")).toBeInvalid();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInvalid();
  });
});
