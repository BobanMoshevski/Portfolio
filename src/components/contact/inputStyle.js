import { styled, TextField } from "@mui/material";

export const InputStyle = styled(TextField)({
  width: "100%",
  "& label.Mui-focused": {
    color: "#8B7E74",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8B7E74",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#65647C",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8B7E74",
    },
  },
});
