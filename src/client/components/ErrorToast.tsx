export type ErrorToastProps = {
  message: React.ReactNode;
};

export function ErrorToast({ message }: ErrorToastProps) {
  return (
    <div className="bg-red-200 text-red-500 rounded-lg py-1 px-3">
      {message}
    </div>
  );
}
