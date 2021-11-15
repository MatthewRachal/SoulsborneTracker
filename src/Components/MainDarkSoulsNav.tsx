import React, { ReactElement } from 'react'

interface Props {
    selectGame: any;
}

export default function MainDarkSoulsNav(props: Props): ReactElement {
    return (
        <div>
            <ul className="mainDSNavUl">
                <li className="mainDSNavLiLogo">SoulsBorne Tracker</li>
                <li onClick={e=>{e.preventDefault(); props.selectGame("Dark Souls 3")}} className="mainDSNavLi">Dark Souls 3</li>
                <li onClick={e=>{e.preventDefault(); props.selectGame("Dark Souls 2")}} className="mainDSNavLi">Dark Souls 2</li>
                <li onClick={e=>{e.preventDefault(); props.selectGame("Dark Souls 1")}} className="mainDSNavLi">Dark Souls 1</li>
            </ul>
            
        </div>
    )
}

