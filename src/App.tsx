import './global.css';
import Providers from './components/global/Providers';
import banner from '../src/assets/images/bannerRemanescente.png';

function App() {
  return (
    <Providers>
      <div className='h-screen w-screen flex justify-center items-center bg-slate-300'>
        <div className='bg-white flex flex-row justify-center items-center w-100 h-screen'>
            <img src={banner} />
        </div>
      </div>
    </Providers>
  )
}

export default App
