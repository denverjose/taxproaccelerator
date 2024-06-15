import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-xl bg-gray-953 hover:bg-gray-952 text-white rounded-md py-3 px-4 mt-7 mx-auto"
      aria-disabled={pending}
    >
      {pending ? "Loading ..." : "Get Weather"}
    </button>
  );
}

export default SubmitButton;
