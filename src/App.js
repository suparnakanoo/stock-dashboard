
import './App.css';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <div className=' min-h-screen bg-neutral-900 flex flex-col'>
        <Navbar/>
        <div className='flex flex-row ' >
          <div className='flex flex-row items-center justify-center  bg-inherit h-96 w-2/4 mt-20 rounded-xl'>
            <div className='flex flex-col'>
              <h2  className='text-bold text-8xl text-zinc-50'>WELCOME!</h2>
              <p className='text-green-700'>Now get all your neccessary stock details at one place with StockDash</p>
            </div>
          </div>
          <Carousel/>
        </div>
      </div>
    </>
  );
}

export default App;
