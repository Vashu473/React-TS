import Backdrop from "@mui/material/Backdrop";

export default function ModalWrapper({ children }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      {children}
    </Backdrop>
  );
}
