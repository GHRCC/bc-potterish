import { useEffect } from "react";
import toast from "react-simple-toasts";

export function Home() {
  useEffect(() => {
    toast("teste teste teste!");
  }, []);
  return <div className="bg-red-500 font-[vt323] text-4xl">Home</div>;
}
