import * as gsap from "gsap";
import logo from "../Logos/logo.svg";
import {useEffect, useRef} from "react";
import "./Body.css"

export default function Body() {
    const imgRef = useRef(null);
    useEffect(() => {
        return () => {
            const el = imgRef.current;
            gsap.TweenMax.to(el,{rotation: 0},{rotation: 180, duration: 5})
        };
    }, []);

    return (
        <div className="App">
            <div className="helen"></div>
                <div></div>
            <img src={logo} alt="logo" ref={imgRef} className="image1"/>
        </div>
    )
}
