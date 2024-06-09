// Old Validation

// const Validation = (values) => {
//   let errors = {};

//   if (values.Email) {
//     errors.Email = "Email Required!";
//   } else if (values.Password) {
//     errors.Password = "Password Required!";
//   } else if (values.Password.length < 8) {
//     errors.Password = "Password must have 8 char...!";
//   }

//   return errors;
// };

// export default Validation;

// New Validation
const Validation = (values) => {
  let errors = {};

  if (!values.Email) {
    errors.Email = "Email Required!";
  } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
    errors.Email = "Email address is invalid!";
  }

  if (!values.Password) {
    errors.Password = "Password Required!";
  } else if (values.Password.length < 8) {
    errors.Password = "Password must be at least 8 characters!";
  }

  return errors;
};

export default Validation;
