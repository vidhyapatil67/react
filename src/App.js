
import './App.css';
import Bann from './Component/Bann';
import Foot from './Component/Foot';
import Head from './Component/Head';
import Side from './Component/Side';


function App() {
  return (
    <div className="container-fluid">   
       <Head/>
       <div className='row'>
        < div className='col3' style={{marginTop:"60px"}}>
          <Side/>
        </div>
        <div className='col-8'>
          <Bann/>
        </div>
       </div>
       <Foot/>
      </div>
      
  );
}

export default App;
