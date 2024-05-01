import React from "react";

import { slide as Menu } from "react-burger-menu";

import "./header.css"

const MobileHeader = () => {
    return (
        <div style={{backgroundColor:'red', height:'100px'}} id="left-sidebar">
            <Menu left>
                <div className="d-flex">
                    <div className="ml-3">
                        <p>
                            Shop
                        </p>
                    </div>

                    <div>
                        <p className="ml-2">
                            Account
                        </p>
                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default MobileHeader