import React, { useEffect } from 'react'
import { init } from './chart'

const OrgChart = props => {
  useEffect(() => {
    const { id, tree, ...options } = props;
    init({ id: `#${id}`, data: tree, ...options });
  });

  return <div id={props.id} />;
}

OrgChart.defaultProps = {
  id: 'react-org-chart'
}

export default OrgChart
