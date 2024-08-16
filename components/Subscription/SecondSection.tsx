const SecondSection = () => {
  const mockData = [
    {
      heading: 'Choose a plan',
      body: 'Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.'
    },
    {
      heading: 'Frequency and Duration',
      body: 'Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.'
    },
    {
      heading: 'Pay once',
      body: 'After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones'
    }
  ]
  return (
    <div className="flex flex-col lg:flex-row border-t-[1px] border-black">
      {/* Left */}
      <div className='lg:w-1/2 flex flex-col p-20 border-r-[1px] border-black lg:sticky lg:top-0 justify-start items-start md:h-screen'>
        <h2 className="text-mobile-heading-2 lg:text-heading-2 text-start">How does it work?</h2>
      </div>
      {/* Right */}
      <div className='lg:w-1/2 flex flex-col border-t-[1px] border-black'>
        {mockData.map((item, index) => (
          <div key={item.heading} className="p-20 flex flex-col gap-4 border-b-[1px] border-black">
            <h3 className="text-mobile-heading-3 lg:text-heading-3">{item.heading}</h3>
            <p className="text-mobile-body lg:text-body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;