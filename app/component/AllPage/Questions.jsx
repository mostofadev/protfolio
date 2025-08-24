import Accordion from "./Accordion";

function Questions() {
  const accordionItems = [
    {
      title: "What is Portfolify?",
      content:
        "Portfolify is a modern and customizable portfolio template designed to showcase your work, services, and projects in the best possible way. It’s responsive, user-friendly, and perfect for freelancers, agencies, or businesses who want a professional online presence.",
    },
    {
      title: "How can I help you?",
      content:
        "I help individuals and businesses create beautiful, functional, and responsive portfolio websites. Whether you’re a freelancer, author, or business owner, I can design and develop a platform that highlights your skills, attracts clients, and boosts your online visibility.",
    },
    {
      title: "What is the process for working with you?",
      content:
        "The process is simple: we start with a consultation to understand your goals, then move on to design, development, and testing. Once you’re happy with the results, your website goes live. I also provide ongoing support to ensure your site runs smoothly.",
    },
    {
      title: "Why choose a responsive multi-page template?",
      content:
        "A responsive multi-page template ensures your website looks and works perfectly across all devices—desktop, tablet, and mobile. It also allows you to organize content into dedicated sections like About, Projects, Blog, and Services for better user experience.",
    },
    {
      title: "Is Portfolify a multi-purpose template?",
      content:
        "Yes! Portfolify is a versatile template suitable for freelancers, creative professionals, agencies, startups, and even small businesses. It’s easy to customize and adapt to different industries, making it a perfect all-in-one solution for building your portfolio.",
    },
  ];

  return (
    <div className=" bg-[var(--bg-one)] flex items-center justify-center">
      <div className="w-full ">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
}

export default Questions;
