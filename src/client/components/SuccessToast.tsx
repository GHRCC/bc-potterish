export type SuccessToastProps = {
  message: React.ReactNode;
};

export function SuccessToast({ message }: SuccessToastProps) {
  return (
    <div className="bg-green-200 text-green-500 rounded-lg py-1 px-3">
      {message}
    </div>
  );
}
