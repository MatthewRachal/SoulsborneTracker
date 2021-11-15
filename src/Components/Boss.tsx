import React from 'react'

interface Props {
    info: any;
    pos: number;
    changeData: any;
}

export default function Boss(props: Props) {
       
        const createDifficultyButtons = (): any => {
            let num = [0,1,2,3,4,5,6,7,8,9,10];
            return num.map((item,index) => {
                return (
                    <button key={index} 
                            onClick={e=>{e.preventDefault(); props.changeData("bossDifficulty", index, props.pos)}}>
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
            <button onClick={e=>{e.preventDefault(); props.changeData("totalBossDeaths", 1, props.pos)}} className="bossButton1">+</button>
            <button onClick={e=>{e.preventDefault(); props.changeData("totalBossDeaths", -1, props.pos)}} className="bossButton1">-</button>
            <div style={{marginTop: "1em"}}>
                <button onClick={e=>{e.preventDefault(); props.changeData("completed", 1, props.pos)}} className="bossButton1">{props.info.completed === true ? <h5>Completed</h5> :<h5>Not Completed</h5>}</button>
            </div>

        </div>
    )
}