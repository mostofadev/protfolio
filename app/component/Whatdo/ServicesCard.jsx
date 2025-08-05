/* eslint-disable react/prop-types */

import Image from "next/image";

// eslint-disable-next-line react/prop-types
function ServicesCard({ services }) {
  return (
    <section className="py-12 bg-[var(--bg-one)] cursor-pointer">
      <div className="w-full mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-6 sm:mx-20 md:mx-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--bg-two)] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6  ">
                <Image
                  src={service.image?.src || "/default-image.png"}
                  alt={service.image?.alt || service.title || "service image"}
                  width={128}
                  height={128}
                  className="object-contain bg-gray-50 rounded-full border-2 border-gray-200"
                />
              </div>
              <h3 className="text-2xl font-semibold text-center text-[var(--text-one)] mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--text-one)] text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
