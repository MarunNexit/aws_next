// components/HeaderOLD.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderOLD = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/pages/login">Login</Link></li>
                    <li><Link href="/pages/signup">SignUP</Link></li>
                    <li><Link href="/pages/signout">SignOUT</Link></li>
                    <li><Link href="/pages/profile">Профіль</Link></li>
                    {/* Додайте інші посилання на ваші сторінки */}
                </ul>
            </nav>
        </header>
    );
};

export default HeaderOLD;