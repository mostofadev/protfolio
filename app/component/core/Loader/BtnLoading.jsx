export default function BtnSpinner({ size = 5, color = "white" }) {
    return (
      <div
        className={`w-${size} h-${size} border-2 border-${color} border-t-transparent rounded-full animate-spin`}
      ></div>
    );
  }
  