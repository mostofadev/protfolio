import Image from "next/image";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ testimonial }) => {
  console.log('testimonial', testimonial);
   const IMAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

  const shortFeedback = testimonial.feedback.length > 100
    ? testimonial.feedback.slice(0, 100) + '...'
    : testimonial.feedback;

  return (
    <div className="bg-[var(--bg-two)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Image and Header */}
      <div className="flex items-center mb-4">
        <Image
          width={40}
          height={40}
          src={`${IMAGE_URL}/testimonials/${testimonial.image}`}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full  mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-[var(--text-one)]">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-400">{testimonial.position}</p>
        </div>
      </div>
      {/* Feedback */}
      <p className="text-gray-400 text-base leading-relaxed">
        {shortFeedback}
      </p>
    </div>
  );
};

export default TestimonialCard;
