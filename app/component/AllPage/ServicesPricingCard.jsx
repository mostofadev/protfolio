/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ServicesPricingCard({ data }) {
    return (
      <div className="p-2">
        <div className="bg-[var(--bg-two)] text-center rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          {/* Card Header */}
         <div className="border-b border-gray-200 my-4">
         <span className="text-[var(--text-one)] text-sm block">{data.title}</span>
          <h3 className="text-4xl text-green-400 font-bold my-2">${data.price}</h3>
          <span className="text-[var(--text-one)] text-sm block mb-4">{data.duration}</span>
  
         </div>
          {/* Divider */}
          {/* <div className="border-t border-gray-300 my-4"></div> */}
  
          {/* Features */}
          <ul className="text-[var(--text-one)] space-y-3">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
  
          {/* Button */}
          <a
            href={data.link}
            className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition duration-300"
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    );
  }
  
  export default ServicesPricingCard;