import './global.css';
import Providers from './components/global/Providers';
import Home from './pages/Home';

function App() {
  return (
    <Providers>
      <div className='h-screen w-screen flex justify-center items-center bg-slate-300'>
        <div className='bg-white flex flex-col w-8/12 max-w-screen-2xl h-screen'>
            <Home />
        </div>
      </div>
    </Providers>
  )
}

export default App
