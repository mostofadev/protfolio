/* eslint-disable react/prop-types */

function ContactComponent({ Data }) {
  return (
    <div className="md:flex  md:justify-between px-6  my-6 mx-6 sm:mx-20 md:mx-20">
      {Data.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 md:border-l-4 md:border-green-500 p-4 bg-[var(--bg-one)] "
        >
          {/* Icon Section */}
          <div className="bg-green-500 text-white p-4 rounded-full flex items-center justify-center">
            {item.icon }
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-lg font-bold text-[var(--text-one)] ">{item.title}</h2>
            <p className="text-[var(--text-two)]">{item.contact}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactComponent;
