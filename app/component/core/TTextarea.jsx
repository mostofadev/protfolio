/* eslint-disable react/prop-types */

function TTextarea({  Placeholder, ...rest }) {
  return (
    <div className="m-2 py-2 rounded-xl bg-[var(--bg-one)] w-full ">
        <textarea 
        placeholder={Placeholder}
        className="h-32 bg-[var(--bg-two)] text-md text-[var(--text-one)] px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bg-one)]"
        {...rest}>

        </textarea>
  </div>
  )
}

export default TTextarea
