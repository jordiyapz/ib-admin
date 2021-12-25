import { Publish } from "@mui/icons-material";
import { useField } from "formik";
import { customBase64 } from "../utils/base64";
import FieldError from "./FieldError";

const UploadBtn = ({ name, ...props }) => {
  const [field, , helper] = useField({ name });

  // Unique ID
  const uid = `upload_btn_${Math.floor(Math.random() * 1000000)}`;

  const handleUpload = async (e) => {
    if (e.target.files.length) {
      try {
        const imgUri = await customBase64(e.target.files[0]);
        helper.setValue(imgUri);
      } catch (error) {
        helper.setError(error.message || JSON.stringify(error));
      }
    }
  };

  return (
    <div {...props}>
      <img
        className="userUpdateImg"
        src={field.value}
        alt={`Foto avatar ${field.name}`}
      />
      <label htmlFor={uid}>
        <Publish className="userUpdateIcon" />
      </label>
      <input
        type="file"
        id={uid}
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <FieldError name={name} />
    </div>
  );
};

export default UploadBtn;
