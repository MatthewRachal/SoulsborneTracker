import React, { ReactElement } from 'react'

interface Props {
    info: any;
    pos: number;
    changeData: any;
}

export default function Zone(props: Props): ReactElement {

    const createDifficultyButtons = (): any => {
        let num = [0,1,2,3,4,5,6,7,8,9,10];
        return num.map((item,index) => {
            return (
                <button key={index} 
                        onClick={e=>{e.preventDefault(); props.changeData("zoneDifficulty", index, props.pos)}}>
                    {index}
                </button>
            )
        })
    }
    
return (
    <div className="bossContainer">
        <h5>{props.info.name}</h5>
        <h5>Difficulty: {props.info.difficulty}</h5>
        {createDifficultyButtons()}
        <h5>Deaths: {props.info.deaths}</h5>
        <button onClick={e=>{e.preventDefault(); props.changeData("totalZoneDeaths", 1, props.pos)}} className="bossButton1">+</button>
        <button onClick={e=>{e.preventDefault(); props.changeData("totalZoneDeaths", -1, props.pos)}} className="bossButton1">-</button>
    </div>
)
}