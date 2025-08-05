import toast from "react-hot-toast";
import CustomToast from "../component/core/CustomToast";

export const showCustomToast = ({
  title = "Success",
  message = "Action completed successfully.",
  type = "success",
}) => {
  toast.custom((t) => (
    <CustomToast t={t} title={title} message={message} type={type} />
  ));
};
