import BtnSpinner from "../loader/BtnSpinner";

export default function FormButton({ ClassName,Icon, IsValid, children, loading = false, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`${ClassName} ${
        !IsValid ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
      } text-sm text-white py-2 px-4 rounded flex justify-center items-center gap-2 transition duration-300 ${
        loading ? "opacity-70 cursor-not-allowed min-w-[150px]" : ""
      }`}
      

    >
      {loading ? (
        <BtnSpinner />
      ) : (
        <>
          {Icon}
          {children}
        </>
      )}
    </button>
  );
}
