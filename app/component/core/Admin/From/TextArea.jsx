export default function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  error = "",
  errors= "",
  ...rest
}) {
  // Check if error is an array (Laravel sends array), otherwise use as string
  const errorMessage = Array.isArray(error) ? error[0] : error;
  const errorsMessage = Array.isArray(errors) ? errors[0] : errors;

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        {...rest}
        className={`border rounded-md px-3 py-2 text-sm text-gray-800 resize-y 
          ${errorMessage ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
        `}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
      {errorsMessage && (
        <p className="text-red-500 text-sm mt-1">{errorsMessage}</p>
      )}
    </div>
  );
}
