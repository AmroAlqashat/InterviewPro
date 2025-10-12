import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface MySnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

function MySnackbar({ open, onClose, message }: MySnackbarProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3500}
      onClose={onClose}
    >
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
}

export default MySnackbar;
