import { Cookies } from 'react-cookie';

function Logout(){
    const cookie = new Cookies();
    cookie.remove('usuario',{path:'/'});
    window.location='./';
}


export default Logout;