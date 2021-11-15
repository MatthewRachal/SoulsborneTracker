import React, { ReactElement } from 'react'

interface Props {
    summaryData: any;
    game: string;
}

export default function SummaryStats(props: Props): ReactElement {

    return (
        <div className="summaryStatsContainer">
            <h5 className="summaryStatsText1">{props.game} </h5>
            <h4 className="summaryStatsText1">Summary:</h4>
            <h5 className="summaryStatsText2">Total Deaths: {props.summaryData.totalDeaths} </h5>
            <h5 className="summaryStatsText2">Total Boss Deaths:  {props.summaryData.totalBossDeaths} </h5>
            <h5 className="summaryStatsText2">Total Zone Deaths:  {props.summaryData.totalZoneDeaths} </h5>
            <h5 className="summaryStatsText2">Bosses:  {props.summaryData.BossCompleted} /  {props.summaryData.bossNum} </h5>
        </div>
    )
}