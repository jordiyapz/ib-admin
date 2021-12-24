import { Publish } from "@mui/icons-material";
import { useField } from "formik";
import { customBase64 } from "../utils/base64";

const UploadBtn = (props) => {
  const [field, , helper] = useField(props);

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
    <>
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
    </>
  );
};

export default UploadBtn;
