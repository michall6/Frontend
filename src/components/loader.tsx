

import { BarLoader } from 'react-spinners';

const Loader: React.FC = () => {
  return (
    
    <div className='align-items-center text-center mx-auto w-50 pt-4'>
     <br/> <BarLoader color="rgba(178, 206, 107, 0.608)" height={40} width={1200} />
    </div>
  );
}

export default Loader;
