import React from 'react';
import './App.css';

import OrgChart from './OrgChart';
import fakeData from './utils/fake-data';
const data = fakeData();

const tree = {
  id: 1,
  person: {
    id: 1,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/spbroma/128.jpg',
    department: '',
    name: 'Imelda Haley',
    title: 'CEO',
    totalReports: 5
  },
  hasChild: true,
  children: []
};

const loadChildren = d => {
  // this could also just be `return tree.children`
  return Promise.resolve(data.children)
};

const App = () => {
  return (
    <OrgChart
      lineType='curve'
      loadChildren={loadChildren}
      tree={tree}
    />
  );
}

export default App;
