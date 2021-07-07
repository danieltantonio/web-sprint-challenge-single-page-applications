import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "username must be at least 2 characters long")
      .required("Name is required"),
    // size: yup
    //   .string()
    //   .oneOf(['slice', 'quarter', 'half', 'pie'], "A pizza size is required."),
    // sauce: yup
    //   .string()
    //   .oneOf(['original', 'garlic', 'bbq', 'spinach'], "Sauce is required."),
    toppingcount: yup
      .number()
      .max(10, "You are only allowed to have up to 10 toppings.")
      .required("At least one topping is required.")
})

export default formSchema;