import ButtonField from "../Button/ButtonField";
import InputField from "../Input/InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik } from "formik";
import { LoginSchema } from "../Schemas/page";

const initialValues = {
  name: "",
  password: "",
};

const Form = () => {

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
      >
        {(formik) => (
          <form action="" onSubmit={formik.handleSubmit}>
            <InputField
              label="Username:"
              inputType="text"
              // value='admin@dreamstechnologies.com'
              placeholder="admin@dreamstechnologies.com"
              eyeIcon={<FaEye />}
              eyeSlashIcon={<FaEyeSlash />}
              name="name"
              values={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {/* {formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : null} */}

            <InputField
              label="Password:"
              inputType="password"
              placeholder="123456"
              // value='123456'
              eyeIcon={<FaEye />}
              eyeSlashIcon={<FaEyeSlash />}
              name="password"
              values={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {/* {formik.errors.password && formik.touched.password ? <p>{formik .errors.password}</p> : null} */}
            <ButtonField
              text={undefined}
              color={undefined}
              size={undefined}
              width={undefined}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
