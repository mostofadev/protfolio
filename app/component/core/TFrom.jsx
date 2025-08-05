
// eslint-disable-next-line react/prop-types
function TFrom({children,...rest}) {
  return (
    <form {...rest}>
        {children}
    </form>
  )
}

export default TFrom
