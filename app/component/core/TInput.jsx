/* eslint-disable react/prop-types */

export default function TInput({ Type, Placeholder, ...rest }) {
  return (
    <div className="m-2 py-2 rounded-xl bg-[var(--ng-one)] w-full">
      <input
        type={Type}
        placeholder={Placeholder}
        className="bg-[var(--bg-two)] text-md text-[var(--text-one)] px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bg-one)]"
        {...rest}
      />
    </div>
  );
}
