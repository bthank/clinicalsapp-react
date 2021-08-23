import axios from 'axios';
import React from 'react';
import {Line} from 'react-chartjs-2';

const initData= {
    labels: [],
    datasets: [{
        label: 'Heartrate',
        fill:false,
        borderWidth: 8
    }
    ]
}

class ChartGenerator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chartData : initData
        }
    }

    componentWillMount(){
        axios.get('/clinicalservices/api/patients/analyze/' + this.props.match.params.patientId)
            .then(response => {
                console.log(response.data);
                var heartrateData = response.data.clinicalData.fliter(component => component.componentName==='heartrate');
                console.log(heartrateData);

                /* loop thru the data and fill in the map  */
                for(var i=0; i < heartrateData.length; i++){
                    initData.labels[i]=heartrateData[i].measuredDateTime;
                    initData.datasets[0].data[i]=heartrateData[i].componentValue;                   
                }

                this.setState({initData});
            })
    }

    render(){
        /* the code within the render return is JSX code which gets converted to HTML
        JSX is a syntax extension to JavaScript
        */
        return (<div>
                    <Line data={this.state.chartData} />
                </div>);
    }

}

/* export out the component so that it can be used in other components */
export default ChartGenerator;