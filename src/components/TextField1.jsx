import { useField, Field } from "formik";
import FieldError from "./FieldError";

const TextField1 = (props) => {
  const [field] = useField(props);

  return (
    <div>
      <Field {...props} {...field} />
      <FieldError name={props.name} />
    </div>
  );
};

export default TextField1;
