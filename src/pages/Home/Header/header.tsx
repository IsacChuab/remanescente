import bannerRmt from '../../../assets/images/bannerRemanescente.png';
import fbkLogo from '../../../assets/logos/facebook.png';
import instLogo from '../../../assets/logos/instagram.png';

const Header = () => {
  return (
    <>
      Siga-nos: <img src={fbkLogo} className='h-12 w-12' /> <img src={instLogo} className='h-12 w-12' />

      <img src={bannerRmt} className='h-60 w-screen'/>
    </>
  )
}

export default Header;