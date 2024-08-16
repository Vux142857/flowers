import Image from "next/image";
import section1 from "../../public/subscription/section1/image.png";
import Button, { ButtonType } from "../common/Button";
const FirstSection = () => {
  const mockData = [
    {
      heading: 'For Yourself',
      body: 'The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!',
    },
    {
      heading: 'As a Gift',
      body: 'Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.',
    },
    {
      heading: 'For Business',
      body: 'Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.',
    }
  ]

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen border-t-[1px] border-black">
      <div className="flex items-center lg:w-1/2 h-full border-r-[1px] border-black">
        <Image src={section1} alt={"Subscription"} quality={100} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-6 items-start p-20 lg:w-1/2 h-full">
        <h2 className="text-mobile-heading-2 lg:text-heading-2">Flower Subscription</h2>
        <div className="flex flex-col gap-6 items-start mb-10">
          {
            mockData.map((data, index) => (
              <div className="flex flex-col" key={index}>
                <h6 className="text-mobile-heading-6 lg:text-heading-6 mb-2">{data.heading}</h6>
                <ul className="list-disc px-4">
                  <li className="text-mobile-body lg:text-body">{data.body}</li>
                </ul>
              </div>
            ))
          }
        </div>
        <Button label="Explore plans" type={ButtonType.Secondary} />
      </div>
    </div>
  );
}

export default FirstSection;