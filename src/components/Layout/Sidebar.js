import { images } from "../../assets/images";
import { UilBars } from '@iconscout/react-unicons'
import { Col } from "react-bootstrap";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="main-sidebar">
                <div className="content-sidebar">
                    <div className="logo">
                        <img src={images.logo} alt="logo" />
                    </div>
                    <div className="point-steps">
                        <ol>
                            <li className="active">
                                Box Shape
                            </li>
                            <li className="">
                                Chocolate Shape
                            </li>
                            <li className="">
                                Filling Type
                            </li>
                            <li className="">
                                Gift Card
                            </li>
                            <li className="">
                                Your Informations
                            </li>
                        </ol>
                    </div>
                    <div className="menu">
                        <UilBars />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;