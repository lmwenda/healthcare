import { GetStaticProps } from 'next'; 
import React from 'react'; 
import Cases from '../../components/covid/cases'; 
import Deaths from '../../components/covid/deaths';
import Recovered from '../../components/covid/recovered';
import CreateSession from '../../components/CreateSession';
import {BASE_URL} from '../../utils/exportedDefinitions';

export const getStaticProps: GetStaticProps<any> = async() => {
  const response = await fetch(
    `https://corona.lmao.ninja/v2/all`,
    {
      method: "GET"
    }
  );

  const id = "1";

  const getUsersSessions = await fetch (
    BASE_URL + `api/sessions/get/${id}`,
    {
      method: "GET"
    }
  )

  const covidData: any = await response.json();
  const userSessionsData: any = await getUsersSessions.json();

  return {
    props: {
      covid: covidData,
      sessions: userSessionsData
    }
  }
}

const Dashboard = ({ covid }: any) => {
  return (
    <div className="relative container mt-10 mx-auto">
      <div className="mx-3 flex flex-col space-y-3 md:flex-row md:space-x-5 md:mx-auto md:space-y-0">
        <Cases cases={covid.cases} casesPerOneMillion={covid.casesPerOneMillion} /> 
        <Recovered recovered={covid.recovered} recoveredPerOneMillion={covid.recoveredPerOneMillion} />
        <Deaths deaths={covid.deaths} deathsPerOneMillion={covid.deathsPerOneMillion} />   
      </div>

      <div className="flex flex-col space-y-3 md:mt-10 md:flex-row space-x-10 md:mx-auto md-space-y-0">
        <CreateSession /> 
      </div>
    </div>
  )
}

export default Dashboard;