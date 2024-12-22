const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const ModuleFederationPlugin=require("webpack/lib/container/ModuleFederationPlugin");
module.exports={
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"./dist/"),
        filename:"bundle.js",
        clean:true
    },
    devServer:{
        port:3003
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"landingPortal",
            remotes:{
                "orderingRemote":"ordering@http://localhost:3001/remoteEntry.js",
                "accountLandingRemote":"accountLanding@http://localhost:3000/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"./public/index.html")
        })
    ]
}