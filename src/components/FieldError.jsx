import { styled } from "@mui/material";
import { useField } from "formik";

export const StyledFieldError = styled("p")`
  color: red;
  font-size: 12px;
`;

const FieldError = ({ name, ...props }) => {
  const [, meta] = useField({ name });

  if (!meta.touched || !meta.error) return null;

  // Jika validasi field gagal
  return <StyledFieldError {...props}>{meta.error}</StyledFieldError>;
};

export default FieldError;
