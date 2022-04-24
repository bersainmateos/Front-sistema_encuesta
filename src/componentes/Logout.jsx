import { Cookies } from 'react-cookie';

const Logout = () => {
    const cookie = new Cookies();
    cookie.remove('usuario',{path:'/'});
    window.location='./';
}


export default Logout;