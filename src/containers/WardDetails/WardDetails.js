import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import TableauChart from '../../components/Tableau/TableauChart';

//https://public.tableau.com/views/vaccine_name/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link
//https://public.tableau.com/views/area_pie/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link
//https://public.tableau.com/views/area_gender/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link
const WardDetails = () => {
  return (
    <div className='container'>
      {/* {top}
      {topChart} */}
      <Card
        cardClassname='card-m-t'
        title={'Total Doses of each Vaccine'}
        details={
          'The follow viz displays the number of doses given according to the vaccine type: Covishield, Covaxin and SputnikV. Distributed according to the parliamentary zones'
        }
      >
        <TableauChart uri={'vaccine_name/Dashboard2'} />
      </Card>
      <Card
        cardClassname='card-m-t'
        title={'Count of total Doses in each Zone'}
        details={
          'The pie chart shows the total number of doses given till date, divided by each Zone. The chart is interactive'
        }
      >
        <TableauChart uri={'area_pie/Dashboard3'} />
      </Card>
      <Card
        cardClassname='card-m-t'
        title={
          'Total doses of each zone divided as according to genders, Male, Female and Other genders'
        }
        details={
          'Following graph showcases total doses in each zone divided according to the gender population'
        }
      >
        <TableauChart uri={'area_gender/Dashboard1'} />
      </Card>
    </div>
  );
};

export default WardDetails;
