import { styled } from "@mui/material";
import { useField } from "formik";
import FieldError from "./FieldError";

const StyledTextField = styled("div")`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const StyledLabel = styled("label")`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const StyledTextInput = styled("input")`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const TextField2 = (props) => {
  const [field] = useField(props);
  return (
    <StyledTextField>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledTextInput type="text" {...props} {...field} />
      <FieldError name={props.name} />
    </StyledTextField>
  );
};

export default TextField2;
