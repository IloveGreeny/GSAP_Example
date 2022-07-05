import * as gsap from "gsap";
import logo from "../Logos/logo.svg"
import {useEffect, useRef} from "react";

export default function Body() {
    const imgRef = useRef(null);
    useEffect(() => {
        return () => {
            const el = imgRef.current;
            gsap.TweenMax.to(el,{rotation: 0},{rotation: 180, duration: 3})
        };
    }, []);

    return (
        <div className="App">
            <div className="helen">
            </div>
            <img src={logo} alt="logo" ref={imgRef}/>
        </div>
    )
}