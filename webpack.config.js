const path = require('path');

module.exports = {
    entry:'./src/app.js', 
    output: {
        path:path.join(__dirname, 'public'), 
        filename:'bundle.js'
    }, 
    module: {
        rules:[{
            loader: 'babel-loader', 
            test:/\.js$/,
            exclude:/nodes_modules/
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
};



//loader = allows to customize how we load files 