import toast from "react-simple-toasts";
import { SuccessToast } from "../components/SuccessToast";

export function successToast(message: string) {
  toast(message, {
    render(message) {
      return <SuccessToast message={message} />;
    },
  });
}
