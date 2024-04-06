import React from 'react';
import Card from './Card';

const Hero = ({ data }) => {
  // Assuming data contains information about cards
  // For now, let's create some dummy data
  const dummyData = [
    { id: 1, name: 'House 1', price: '$500,000' },
    { id: 2, name: 'House 2', price: '$600,000' },
    { id: 3, name: 'House 3', price: '$700,000' }
  ];

  return (
    <div>
      <div>
        <div className="w-[1256.59px] h-[132.26px] text-black text-4xl font-bold font-['Wavefont'] ml-[360px] mt-6">
          Welcome to LandSol-.. Your One Place Destination to BUY/SELL/RENT properties
          <br /> with seamless and safe blockchain-based transactions
        </div>
      </div>

      <br />

      <div>
        <div className="w-[390.23px] h-[42.21px] text-black text-4xl font-normal font-['Inika']">FOR SALE!!</div>
      </div>

      <div className="flex flex-wrap justify-center ml-[70px]">
        {/* Mapping through dummyData to render Card components */}
        {dummyData.map((item) => (
          <Card key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
