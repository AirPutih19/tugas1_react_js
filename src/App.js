import React, {Component} from 'react';
import MenuUtama from './Page/MenuUtama';
import MenuKontak from './Page/MenuKontak';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';


const Header = () =>{
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
      <MenuUtama/>
      <MenuProduct/>
      <MenuKontak/>
      <MenuTentangKami/>
    </div>
  );
};
const Footer = () =>{
  return (
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  );
};

class App extends Component{
  render(){
    return(
      <div>
      <Header/>
      <Footer/>
      
    </div>
    )
  }
}




export default App;
