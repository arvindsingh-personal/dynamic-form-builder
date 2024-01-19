import ButtonComponent from "../components/Button";
import CheckBox from "../components/Checkbox";
import ConditionalDropDown from "../components/ConditionalDropDown";
import DropDown from "../components/DropDown";
import EmailComponent from "../components/EmailComponent";
import NumberComponent from "../components/NumberComponent";
import RadioButton from "../components/RadioButton";
import TextAreaComponent from "../components/TextArea";
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
  // {
  //   name: "Conditional Select",
  //   type: "conditionalDropdown",
  // },
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
    name: "Button",
    type: "button",
  },
];

export const FormFieldsComponent = {
  text: TextField,
  textArea: TextAreaComponent,
  radio: RadioButton,
  checkbox: CheckBox,
  email: EmailComponent,
  number: NumberComponent,
  dropdown: DropDown,
  // conditionalDropdown: ConditionalDropDown,
  button: ButtonComponent,
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
