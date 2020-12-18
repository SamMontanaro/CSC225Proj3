const axios = require('axios');
axios.get('http://csc225.mockable.io/consoles').then(resp => {
    console.log(resp);
});