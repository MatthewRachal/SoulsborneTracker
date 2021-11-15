import * as React from 'react';

interface Props {
    changeCounterType: (value:string) => void;
    counterType: string;
}

export default class DarkSoulsNav extends React.Component<Props> {
    render() {
    return (
      <div style={{padding: "0", margin: "0"}}>
          <ul className="darkSoulsNav1Ul">
              <li onClick={e=>{e.preventDefault(); this.props.changeCounterType("Bosses")}} 
                  className={this.props.counterType === "Bosses" ? "darkSoulsNav1LiSelected" : "darkSoulsNav1Li"} >
                  Bosses
              </li>
              <li onClick={e=>{e.preventDefault(); this.props.changeCounterType("Zones")}} 
                  className={this.props.counterType === "Zones" ? "darkSoulsNav1LiSelected" : "darkSoulsNav1Li"} >
                  Zones
              </li>
          </ul>
      </div>
    );
  }
}