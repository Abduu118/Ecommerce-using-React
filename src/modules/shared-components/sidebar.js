import React from "react";
import { Link } from "react-router-dom";

function SideBar(props) {
    let menuList = props.menuList;
    return (
        <>
            <div className="hero__categories text-3xl ">
                <div className="hero__categories__all flex items-center justify-between bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="white" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>

                    <span>All departments</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="white" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>

                </div>
                  <ul>
                    {
                    menuList.map((listData) => (
                        <li><Link className="relative hover:text-green-500 after:abosolute" to="#">{listData}</Link></li>

                    ))
                        }
                </ul>
            </div>
        </>
    )
}

export default SideBar;