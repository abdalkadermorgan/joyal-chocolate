import { images } from "../../assets/images";
import { UilBars } from '@iconscout/react-unicons';
import { UilMultiply } from '@iconscout/react-unicons'
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    let {pathname} = useLocation();
    return (
        <div className="sidebar">
            <div className="main-sidebar">
                <div className="content-sidebar">
                    <div className="logo">
                        <img src={images.logo} alt="logo" />
                    </div>
                    <div className="point-steps">
                        <ol>
                            <li className='active'>
                                Box Shape
                            </li>
                            <li className={['/choose-filling', '/choose-chocolate', '/card-message','/form-information'].includes(pathname) ? 'active' : ''  }>
                                Chocolate Shape
                            </li>
                            <li className={['/choose-filling', '/card-message','/form-information'].includes(pathname) ? 'active' : ''  }>
                                Filling Type
                            </li>
                            <li className={['/card-message', '/form-information'].includes(pathname) ? 'active' : ''  }>
                                Gift Card
                            </li>
                            <li className={['/form-information'].includes(pathname) ? 'active' : ''  }>
                                Your Informations
                            </li>
                        </ol>
                    </div>
                    <div className="menu">
                        <a href="/about-us" className="about-us_bar">
                            <UilBars />
                        </a>
                        <a href="/" className="about-us_close">
                            <UilMultiply />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;