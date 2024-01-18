import Button from "../components/Button";
import CheckBox from "../components/Checkbox";
import DropDown from "../components/DropDown";
import RadioButton from "../components/RadioButton";
import TextField from "../components/TextField";

export const ButtonText = [
  {
    name: "Text Field",
    type: "text",
  },
  {
    name: "Text Area",
    type: "textArea",
  },
  {
    name: "Select",
    type: "dropdown",
  },
  {
    name: "Radio Button",
    type: "radio",
  },
  {
    name: "Checkbox",
    type: "checkbox",
  },
  {
    name: "Email",
    type: "email",
  },
  {
    name: "Number",
    type: "number",
  },
  {
    name: "Password",
    type: "password",
  },
  {
    name: "Button",
    type: "button",
  },
];

export const FormFieldsComponent = {
  text: TextField,
  radio: RadioButton,
  checkbox: CheckBox,
  dropdown: DropDown,
  button: Button,
};

export const FormFields = {
  text: {
    type: "text",
    label: "Name",
    name: "name",
    validation: { required: true },
  },
  email: {
    type: "email",
    label: "Email",
    name: "email",
    validation: { required: true, pattern: /^\S+@\S+\.\S+$/ },
  },
  select: {
    type: "select",
    label: "Country",
    name: "country",
    options: ["USA", "Canada", "UK"],
  },
  checkbox: {
    type: "checkbox",
    label: "Subscribe to newsletter",
    name: "subscribe",
  },
  radio: {
    type: "radio",
    label: "Gender",
    name: "gender",
    options: ["Male", "Female"],
  },
};

// export const initialForm = {
//     formName: 'My Custom Form',
//     fields: [
//       { type: 'text', label: 'Name', name: 'name', validation: { required: true } },
//       { type: 'email', label: 'Email', name: 'email', validation: { required: true, pattern: /^\S+@\S+\.\S+$/ } },
//       { type: 'select', label: 'Country', name: 'country', options: ['USA', 'Canada', 'UK'] },
//       { type: 'checkbox', label: 'Subscribe to newsletter', name: 'subscribe' },
//       { type: 'radio', label: 'Gender', name: 'gender', options: ['Male', 'Female'] },
//     ],
//   };
