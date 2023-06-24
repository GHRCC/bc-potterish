import toast from "react-simple-toasts";
import { ErrorToast } from "../components/ErrorToast";

export function errorToast(message: string) {
  toast(message, {
    render(message) {
      return <ErrorToast message={message} />;
    },
  });
}
