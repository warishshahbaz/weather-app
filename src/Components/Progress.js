// import * as React from 'react';
// import PropTypes from 'prop-types';
// import {LinearProgress} from '@mui/material';
// import {Typography} from '@mui/material';
// import {Box} from '@mui/material';

// function LinearProgressWithLabel(props) {
//   return (
//     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Box sx={{ width: '100%', mr: 1 }}>
//       <LinearProgress variant="determinate" {...props} />
//     </Box>
//     <Box sx={{ minWidth: 35 }}>
//       <Typography variant="body2" color="text.secondary">{`${Math.round(
//         props.value,
//       )}%`}</Typography>
//     </Box>
//   </Box>
//   );
// }

// export default LinearProgressWithLabel;

import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

export const ProgresBar = ({ value }) => {
  return (
    <div className="w[20px] " >
      <ProgressBar
        width="200px"
        bgColor="yellow"
        labelSize="15px"
        labelColor="black"
        completed={value}
        maxCompleted={100}
      />
      
    </div>
  );
};
