import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const Footer = () => {
    const icon = <FontAwesomeIcon icon={faGithubAlt} />;
    return (
        <div className="text-center border-t border-black p-2 text-slate-400">
            <div>Designed and built by Rafli Maulana</div>
            <Link href="https://github.com/raflimaou">
            <a className='text-5xl text-slate-900'>{icon}</a>
            </Link>
        </div>
    );
};

export default Footer;