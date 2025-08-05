
import Accordion from "./Accordion";

function Questions() {
  const accordionItems = [
    {
      title: "What is Portfolify?",
      content:
        "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How Can I Help You?",
      content:
        "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Simple process for workflow?",
      content:
        "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Why responsive multi page template?",
      content:
        "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Is Portfolify a Multi-purpose template?",
      content:
      "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
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
