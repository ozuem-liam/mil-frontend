import React, {useState, useEffect} from 'react';
import { Container } from "./Styled";
import {Line} from 'react-chartjs-2';
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend
);

function Chart() {
    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(false)
    
    const data = actors && actors?.map((item, i) => {
        return {
            id: i + 1,
            year: item.year
        }
    })
    const label = data?.map(item => item.year);
    const counts = {};
        label.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    const labelData = Object.keys(counts)
    const dataSet = Object.values(counts)

    const chartData = {
        labels: labelData,
        datasets: [
          {
            label: '',
            data: dataSet,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    useEffect(() => {
        getActorsApi();
    }, []);

const getActorsApi = async () => {
 setLoading(true);
 try {     
     const response = await axios.get(process.env.REACT_APP_RAPID_API_URL + "actors/get-awards", {
        params: {
            nconst: 'nm0001667'
        },
        headers: {
            'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
          }
    })
    if(response) {
        setActors(response.data.resource.awards);
        setLoading(false);
    } 
 } catch (error) {
     throw error;
 }
};

if(data.length === 0) {
    return (
      <Container>
          No data
      </Container>
    )
  }
        return (
            <Container className='chart'>
                 {
                 loading ? <LoadingOutlined /> : 
                 <Line 
                 data={chartData}
                 options={{}}
                />
                 }
            </Container>
        )
}

export default Chart;