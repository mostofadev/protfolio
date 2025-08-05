/* eslint-disable react/prop-types */

function SocialIcon({ Icon }) {
    return (
      <div>
        <div className="flex justify-center space-x-6 bg-[var(--bg-one)] p-4">
          {Icon.map((item, index) => (
            <a
              key={index} 
              href={item.Url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--bg-two)] rounded-full p-1 hover:scale-110 transition transform duration-300 shadow-lg"
            >
              {item.Icon}
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default SocialIcon;
  