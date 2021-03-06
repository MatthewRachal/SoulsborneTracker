import React, {useState, useEffect} from 'react'
import SummaryStats from "./SummaryStats"
import DarkSoulsNav from "./DarkSoulsNav"
import MainDarkSoulsNav from './MainDarkSoulsNav';
import Boss from "./Boss";
import Zones from "./Zones";

interface Props {
    
}

export interface summaryData {
    totalDeaths: number;
    totalBossDeaths: number,
    totalZoneDeaths: number,
    BossCompleted: number,
    bossNum: number, 
}

export interface bossInfo {
    name: string;
    difficulty: number;
    deaths: number;
    completed: boolean;
    imgURL?: string;
}

export interface zoneInfo {
    name: string;
    deaths: number;
    difficulty: number;
    imgURL?: string;
}

export default function Dashboard({}: Props) {

    let bossInfoDS1: bossInfo[] = [
        {name: "Asylum Demon", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Taurus Demon", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Bell Gargoyles", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Capra Demon", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Moonlight Butterfly", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Gaping Dragon", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Stray Demon", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Chaos Witch Quelaag", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Iron Golem", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Ornstein and Smough", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Great Grey Wolf Sif", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Crossbreed Priscilla", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Dark Sun Gwyndolin", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Pinwheel", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Gravelord Nito", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Seath the Scaleless", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Ceaseless Discharge", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Centipede Demon", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Firesage Demon", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Bed of Chaos", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "The Four Kings", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Sanctuary Guardian", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Knight Artorias", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Black Dragon Kalameet", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Manus, Father of the Abyss", difficulty: 0, deaths: 0, completed: false, imgURL: ""},
        {name: "Gwyn, Lord of Cinder", difficulty: 0, deaths: 0, completed: false, imgURL: ""},

    ];
    let zonesInfoDS1: zoneInfo[] = [
        {name: "Northern Undead Asylum", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "FireLink Shrine", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Northern Undead Undead Burg", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Undead Parish", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Depths", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "BlightTown", deaths: 0, difficulty: 0},
        {name: "Quelaag's Domain", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "The Great Hollow", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Ash Lake", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Darkroot Basin", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "The Valley of the Drakes", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Sen's Fortress", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Anor Londo", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Painted World of Ariamis", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Darkroot Garden", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "New Londo Ruins", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "The Duke's Archives", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Crystal Cave", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Demon Ruins", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Lost Izalith", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "The Catacombs", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Tomb of Giants", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Sanctuary Garden", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Oolacile Sanctuary", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Royal Wood", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Oolacile Township", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Chasam of the Abyss", deaths: 0, difficulty: 0, imgURL: ""},
        {name: "Kiln of the First Flame", deaths: 0, difficulty: 0, imgURL: ""},
    ];
    
    let initialSummaryDataDS1:summaryData = {
        totalDeaths: 0,
        totalBossDeaths: 0,
        totalZoneDeaths: 0,
        BossCompleted: 0,
        bossNum: 26, 
    }
    
    const [bosses, updatedBosses] = useState<bossInfo[]>(bossInfoDS1);
    const [zones, updatedZones] = useState<zoneInfo[]>(zonesInfoDS1);
    const [summaryData, setSummaryData] = useState<summaryData>(initialSummaryDataDS1);
    const [counterType, setCounterType] = useState<string>("Bosses")
    const [game, selectGame] = useState<string>("Dark Souls 1");

    useEffect(() => {
        updateSummaryData();
    })


    const changeCounterType = (value:string): void => {
        setCounterType(value);
    }

    
    const changeData = (type: string, value: number, index: number): void => {

        let newBosses: bossInfo[] = [...bosses];
        let newZones: zoneInfo[] = [...zones];
        
        // ------- Bosses -------
        //No Negative Numbers and no numbers greater than 999,999
        if(type === "totalBossDeaths" && newBosses[index].deaths + value >= 0 && newBosses[index].deaths + value <= 999999)
        {
             newBosses[index].deaths = newBosses[index].deaths + value   
        }
        else if(type === "bossDifficulty")
        {
            newBosses[index].difficulty = value   
        }
        else if(type === "completed")
        {
            newBosses[index].completed = !newBosses[index].completed   
        }

        // ------- Zones -------
        //No Negative Numbers and no numbers greater than 999,999
        if(type === "totalZoneDeaths" && newZones[index].deaths + value >= 0 && newZones[index].deaths + value <= 999999)
        {
            newZones[index].deaths = newZones[index].deaths + value   
        }
        else if(type === "zoneDifficulty")
        {
            newZones[index].difficulty = value   
        }
      
        //Update the Data
        if(counterType === "Bosses")
        {
            updatedBosses(newBosses)
        }
        else if(counterType === "Zones")
        {
            updatedZones(newZones)
        }

        updateSummaryData()
    }

    //Updates the Summary Data
    const updateSummaryData = (): void => {
        //Reset and calculate the summary data
        let newSummaryData:summaryData = {
            totalDeaths: 0,
            totalBossDeaths: 0,
            totalZoneDeaths: 0,
            BossCompleted: 0,
            bossNum: 0, 
        }
        let counter:number = 0;
        for(counter=0;counter<bosses.length;counter++)
        {
            newSummaryData.totalDeaths = newSummaryData.totalDeaths + bosses[counter].deaths 
        }
        setSummaryData(newSummaryData)      
    }

 
    const generateBosses = (): any[] => {  
        return bosses.map((item,index) => {
            return (
                <div key={index}>
                    <Boss info={bosses[index]} pos={index} changeData={changeData} />
                </div>
            )
        })
    }

    const generateZones = (): any[] => {
        return zones.map((item,index) => {
            return (
                <div key={index}>
                    <Zones info={zones[index]} pos={index} changeData={changeData} />
                </div>
            )
        })
    }
  
    
    return (
        <div style={{padding: "0", margin: "0"}}>
            <MainDarkSoulsNav selectGame={selectGame} />
            <h5 style={{textAlign: "center", fontSize: "2em"}}>This is Dark Souls!</h5>
            <DarkSoulsNav changeCounterType={changeCounterType} counterType={counterType} />
            <SummaryStats summaryData={summaryData} game={game} />
            {counterType === "Bosses" ? generateBosses() : generateZones()}
        </div>
    )
}