import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines,SparklinesLine} from 'react-sparklines';

class WeatherList extends Component{
    renderWD(cityData){

        if(!cityData){
            return;
        }

        return cityData.map(data => {
            if(!data){
                return;
            }

            let temp = data.list.map(w => {return w.main.temp}),
                pres = data.list.map(w => {return w.main.pressure}),
                humi = data.list.map(w => {return w.main.humidity});

            return (
                <tr key={data.city.id}>
                    <td>{data.city.name}</td>
                    <td>
                        <Sparklines data={temp} height={120} width={180}>
                            <SparklinesLine color="red"/>
                        </Sparklines>
                    </td>
                    <td>
                        <Sparklines data={pres} height={120} width={180}>
                            <SparklinesLine color="orange"/>
                        </Sparklines>
                    </td>
                    <td>
                        <Sparklines data={humi} height={120} width={180}>
                            <SparklinesLine color="blue"/>
                        </Sparklines>
                    </td>
                </tr>
            )
        });
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderWD(this.props.weather)}
                </tbody>
            </table>
        )
    }
}

function mapDispatchToProps({weather}) {
    return {
        weather
    }
}

export default connect(mapDispatchToProps)(WeatherList)
