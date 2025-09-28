import { useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="bg-transparent text-white w-[400px] overflow-hidden rounded-sm">
      <button onClick={onClick}
        className="w-full flex justify-between items-center faq-accardion">
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`transition-transform duration-400 cursor-pointer ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}/>
      </button>

      {isOpen && (
        <div className="transition-transform duration-500">
          <div className="bg-gray-200 text-sm text-gray-700 text-center accardion-text">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AccordionExample() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {``
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Accordion 1",
      content: "Bu birinchi accordion ichidagi matn."
    },
    {
      title: "Accordion 2",
      content: "Bu ikkinchi accordion ichidagi matn."
    },
    {
      title: "Accordion 3",
      content: "Bu uchinchi accordion ichidagi matn."
    }
  ];

  return (
    <div className="max-w-md mx-auto mt-10 rounded-sm overflow-hidden shadow-sm">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}
