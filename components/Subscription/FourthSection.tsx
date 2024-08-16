import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FourthSection = () => {
  const mockData = [
    {
      question: "Is it accessible?",
      answer: "Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!"
    },
    {
      question: "Can I change my delivery frequency?",
      answer: "Yes. You can change your delivery frequency at any time. Simply log in to your account and make the changes you need."
    },
    {
      question: "Can I change the number of deliveries?",
      answer: "Yes. You can change the number of deliveries at any time. Simply log in to your account and make the changes you need."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes. You can cancel your subscription at any time. Simply log in to your account and make the changes you need."
    },
    {
      question: "Can I skip a delivery?",
      answer: "Yes. You can skip a delivery at any time. Simply log in to your account and make the changes you need."
    },
    {
      question: "Can I pause my subscription?",
      answer: "Yes. You can pause your subscription at any time. Simply log in to your account and make the changes you need."
    }
  ]
  return (
    <div className="flex items-center justify-center bg-extra-light py-20 px-0 md:px-10 lg:px-20">
      <div className="gap-10 flex flex-col h-full py-20 px-6 md:px-10 lg:px-20 border-light-gray border-2 w-3/4 bg-white">
        <h2 className="text-mobile-heading-2 lg:text-heading-2 text-center">Subscription FAQ</h2>
        <Accordion type="single" collapsible>
          {
            mockData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-start text-mobile-heading-4 lg:text-heading-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-start text-mobile-body lg:text-body">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
    </div>
  );
}

export default FourthSection;