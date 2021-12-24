import { useField, Field } from "formik";

const TextField1 = (props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <Field {...props} {...field} />
      {
        // Jika validasi field gagal
        meta.touched && meta.error && (
          <p style={{ color: "red", fontSize: "12px" }}>{meta.error}</p>
        )
      }
    </div>
  );
};

export default TextField1;
