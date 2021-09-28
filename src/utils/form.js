import * as yup from 'yup';

const FILE_SIZE = 1_000_000 * 200;
const SUPPORTED_FORMATS = [
  "application/pdf",
  "application/zip"
];

export const dateError = "Date is not valid";
export const emailError = "Invalid email";
export const numberError = "Must be a number";
export const phoneError = "Phone is not valid";
export const requiredError = "Required";

// export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// export const requiredPhone = yup.string().matches(phoneRegExp, phoneError).required(requiredError);

const yupDate = yup.date().typeError(dateError);
const yupEmail = yup.string().email(emailError);
const yupFile = yup.mixed()
                   .test(
                     "fileSize",
                     "File too large",
                     (value) => !(value?.size > FILE_SIZE)
                   )
                   .test(
                     "fileFormat",
                     "Unsupported Format",
                     (value) => !(value && !SUPPORTED_FORMATS.includes(value.type))
                   );
const yupNumber = yup.number().typeError(numberError);
const yupPhone = yup.string();
const yupString = yup.string();

export function constructSchema(specs) {
  let schemaObj = {};

  Object.entries(specs).forEach( ([key, data]) => {
    switch(data.type) {
      case "date":
        schemaObj[key] = yupDate;
        break;
      case "email":
        schemaObj[key] = yupEmail;
        break;
      case "file":
        schemaObj[key] = yupFile;
        break;
      case "number":
        schemaObj[key] = yupNumber;
        break;
      case "phone":
        schemaObj[key] = yupPhone;
        break;
      case "string":
        schemaObj[key] = yupString;
        break;
      default:
        break;
    }

    if(data.required) schemaObj[key] = schemaObj[key].required(requiredError);
  });

  return schemaObj;
}

// Probably don't need this anymore...
// export function getRequired(schema) {
//   const schemaFields = yup.object().shape(schema).describe().fields;
//
//   let output = {};
//   Object.keys(schemaFields).forEach( (key) => {
//     output[key] = schemaFields[key].tests.findIndex(({ name }) => name === "required") >= 0;
//   });
//
//   return output
// }
