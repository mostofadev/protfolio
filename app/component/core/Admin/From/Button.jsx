import BtnSpinner from "../../Loader/BtnLoading";

export default function FormButton({ ClassName,Icon, IsValid, children, loading = false, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`${ClassName} ${
        !IsValid ? "bg-green-600" : "bg-green-400 hover:bg-green-500 text-white "
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
