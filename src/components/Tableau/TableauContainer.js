import React from 'react';
import Card from '../Card/Card';
import TableauChart from './TableauChart';

// https://public.tableau.com/views/Center_map/AllCentresMap?:language=en-US&:display_count=n&:origin=viz_share_link
//https://public.tableau.com/views/Center_count/CentreCountofeachWard?:language=en-US&:display_count=n&:origin=viz_share_link
//https://public.tableau.com/views/All_Wards/Ward-WiseTotalDoses?:language=en-US&:display_count=n&:origin=viz_share_link

const TableauContainer = ({ top, data }) => {
  const topChart = top ? null : (
    <div className='split-container'>
      <Card
        cardClassname='card-m-t'
        title={'Map of all centres in the city'}
        details={
          'While on the map, hovering over any centre will also highlight the total doses distributed by that cente. It will also display the Ward of the centre. The map is interactive.'
        }
      >
        <TableauChart uri={'map3_16304891688500/AllCentresMap'} />
      </Card>
      <Card
        cardClassname='card-m-t'
        title={'Centre count of each ward in the City'}
        details={
          'The total number of centres in a ward is displayed thorugh Bar Graphs. Hoverig over any graph will highlight it. This is useful if we want to analyse which wards may be needing more centres for a better distribution of shots.'
        }
      >
        <TableauChart uri={'count3/CentreCountofeachWard'} />
      </Card>
    </div>
  );
  return (
    <div className='container'>
      {top}
      {topChart}
      <Card
        cardClassname='card-m-t'
        title={'Total Doses of each Ward'}
        details={
          'The pie chart shows the total number of doses given till date, divided by each ward. The chart is interactive'
        }
      >
        <TableauChart uri={'ward3/Ward-WiseTotalDoses'} />
      </Card>
    </div>
  );
};

export default TableauContainer;
