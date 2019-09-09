import React from 'react';
import ReactDOM from 'react-dom';
import ReadmePage from './pages/ReadmePage';

// if(process.env['RENDER']){
ReactDOM.render(<ReadmePage pkg={require('../package.json')} markdown={require('./README.md')} />, document.getElementById('root'));
// }

// export default {
//     DocumentationPage
// }


