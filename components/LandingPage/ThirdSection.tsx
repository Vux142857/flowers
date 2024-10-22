const ThirdSection = () => {
  const mockData = [
    {
      heading: 'Stylish bouquets by florists',
      body: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.'
    },
    {
      heading: 'On-time delivery',
      body: 'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.'
    },
    {
      heading: 'Safe payment',
      body: 'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.'
    },
    {
      heading: 'Subscription by your needs',
      body: 'With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You will save time and money with this hassle-free solution to your floral needs.'
    }
  ]
  return (
    <div className="flex flex-col lg:flex-row border-t-[1px] border-black">
      {/* Left */}
      <div className='lg:w-1/2 flex flex-col p-20 border-r-[1px] border-black lg:sticky lg:top-0 justify-start items-start md:h-screen'>
        <h2 className="text-mobile-heading-2 lg:text-heading-2 text-start animate-on-scroll">Why choose us ?</h2>
      </div>
      {/* Right */}
      <div className='lg:w-1/2 flex flex-col border-black'>
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

export default ThirdSection;