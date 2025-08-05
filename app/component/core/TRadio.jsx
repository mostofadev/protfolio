/* eslint-disable react/prop-types */

function TRadio({label,...rest}) {
  return (
    <div className="mt-2   space-x-2">
          <input
            type="checkbox"
            className="bg--[var(--bg-one)] text-[var(--bg-one)] border--[var(--bg-one)] focus:ring-2 focus:ring--[var(--bg-two)]"
            {...rest}
          />
          <label className="text-[var(--text-one)] ">{label}</label>
        </div>
  )
}

export default TRadio
