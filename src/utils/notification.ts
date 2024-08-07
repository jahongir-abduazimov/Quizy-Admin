import { Bounce, TypeOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface NotificationProp {
  message: string;
  type: TypeOptions | undefined;
}

const Notification = (props: NotificationProp) => {
  return toast(props.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    type: props.type,
    transition: Bounce,
  });
};

export default Notification;
