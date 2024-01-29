

import Arrow from '@/components/Arrow';
import Navigation from '@/components/Navigation';

import { getFreebets,BetType } from '@/data'

const Hero = async() => {

const bets=await getFreebets()
const freebets =bets.data
console.log("complete ",freebets)

  return (
    <div className=" bg-hero bg-cover ">
      <Navigation />
      <div className="text-white flex justify-center max-w-7xl mx-auto  h-[80vh] p-4 " id="home">
        <div className="hidden md:inline-flex flex-auto text-5xl lg:text-7xl xl:text-9xl font-extrabold animate-slidein1 items-center ">
          <div>
          EXCLUSIVE VIP  {' '}
          <span className='text-gray-800'> ODDS</span>
          </div>
       
          </div>
        <div className="min-w-[450px] flex items-center  justify-center">
          <div className="bg-black/40 p-5 rounded-2xl animate-slideL">
            <p className="">Free Odds</p>
            
            {freebets && freebets.length > 0 ? (
              <div >
                {freebets.map((bet:BetType) => (
                  <div key={bet.id} className="bg-white rounded-2xl text-gray-800 p-3 my-2 font-semibold">
                  <div className='flex justify-center gap-5'>
                  <p>{bet.attributes.home}</p>
                  -
                  <p>{bet.attributes.away}</p>
                  </div>
                    
                  <div className='flex items-center justify-center gap-5'>
                  <p>{bet.attributes.homeScore}</p>
                  -
                  <p>{bet.attributes.awayScore}</p>
                  </div>
                    
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-800">No bet</p>
            )}
          </div>
        </div>
      </div>
      <div className='md:hidden text-center text-3xl font-semibold py-4  text-white'>
        <p>  Exclusive VIP odds</p>
        <p className='bg-white rounded-full px-4 py-2 w-[300px] mx-auto text-2xl  text-gray-700'>Register Now</p>
      </div>
    
 
    </div>
  );
};

export default Hero;
