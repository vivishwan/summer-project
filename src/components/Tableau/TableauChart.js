import React, { useEffect, useRef } from 'react';

const TableauChart = ({ uri, className, splitWidth }) => {
  let ref = useRef(null);
  const url = `https://public.tableau.com/views/${uri}?:language=en-US&:display_count=n&:origin=viz_share_link`;

  console.log(ref);

  useEffect(() => {
    console.log(ref);
    const initViz = () => {
      const options = {
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      };
      console.log(options);
      return new window.tableau.Viz(ref.current, url, options);
    };
    const viz = initViz();
    return () => viz.dispose();
  });
  return <div className={'tableau ' + (className || '')} ref={ref}></div>;
};

export default TableauChart;
