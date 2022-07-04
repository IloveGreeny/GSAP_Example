import * as gsap from "gsap";
import "./Heading.css";
import logo from "../Logos/logo.svg"
import { useRef, useEffect } from "react";

export default function Heading() {
    let logoItem = useRef(null);
    let textItem = useRef(null);
    useEffect(() => {
        return () => {
            logoItem.style.backgroundColor = "black"
            gsap.TweenMax.to(
                logoItem,
                .8,
                {
                    opacity: 1,
                    x: -890,
                    ease: gsap.Power3.easeInOut,
                }
                )
            gsap.TweenMax.to(
                textItem,
                .8,
                {
                    opacity: 1,
                    x: 1700,
                    y: -100,
                    ease: gsap.Power3.easeInOut,
                    marginRight: 20,
                }
            )
        };
    }, []);


    return (
        <div>
            <header className="div">
                <a href="#"><img
                    width="200px"
                    className="image"
                    ref={el => {logoItem = el}}
                    alt="logo"
                    src={logo}/></a>
                <p ref={el => {textItem = el}}
                    className="paragraph"> About  Contact  Heading </p>
            </header>
        </div>
    )
}
