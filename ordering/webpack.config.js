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
        port:3001
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"ordering",
            filename:"remoteEntry.js",
            exposes:{
                "./orderingIndex":"./src/index.js"
            }
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"./public/index.html")
        })
    ]
}