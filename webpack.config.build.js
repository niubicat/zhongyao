var webpack = require('webpack');
var path = require('path');
var publicPath = "";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
// var publicPath = '//test.tv.video.qq.com/ktweb/Public/activity/';

module.exports = {
    //页面入口文件配置
    entry: {
        index: './src/index',
        category: './src/category',
        gooddetails: './src/gooddetails',
        goodcart: './src/goodcart',
        ordercheck: './src/ordercheck',
        myaddress: './src/myaddress',
        assess: './src/assess',
        myorder: './src/myorder',
        myassess: './src/myassess',
        mycollect: './src/mycollect',
        addressedit: './src/addressedit',
        search: './src/search',
        myhome: './src/myhome',
        searchresult: './src/searchresult',
        jquery: './src/js/jquery',
        flexible: './src/js/flexible'
    },
    output: {
        path: path.resolve(__dirname, './dest'),
        // publicPath: publicPath
        // publicPath: '/production',
        filename: 'js/[name].bundle.[hash:8].js',
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader?minimize'
        }, {
            test: /\.scss$/,
            // loader: 'style-loader!css-loader!sass-loader!postcss-loader'
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader?minimize', 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 2048,
                        name: '/images/[name].[ext]?[hash:8]'
                    }
                }
            ]
        }, {
            test: /\.(svg|ttf|woff|eot)$/,
            use: 'file-loader?limit=8192&name=[path][name].[ext]'
        }, {
            test: /\.(html)$/,
            loader: 'html-loader?attrs=img:src'
        }, {
            test:/\.(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    //插件项
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [autoprefixer({
                        browsers: ['last 4 versions', 'Firefox >= 20', 'opera 12.1', 'ios 7', 'Android >= 4.0']
                    })];
                }
            }
        }),
        // 作用域提升
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 提取代码中的公共模块
        // new webpack.optimize.CommonsChunkPlugin(),
        // 单独抽离 CSS
        new ExtractTextPlugin('css/[name].bundle.[hash:8].css'),
        // 定义全局变量插件
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        }),
        // JS 压缩插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 生成最终HTML index
        new HtmlWebpackPlugin({
            filename: 'html/index.html',
            template: './src/html/index.html',
            chunks: ['index', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['index', 'jquery']
            },
            hash: true,
            minify: {
                //移除HTML中的注释
                removeComments: true, 
                //删除空白符与换行符   
                collapseWhitespace: false 
            }
        }),
        // 生成最终HTML category
        new HtmlWebpackPlugin({
            filename: 'html/category.html',
            template: './src/html/category.html',
            chunks: ['category', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['category', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // 生成最终HTML gooddetails
        new HtmlWebpackPlugin({
            filename: 'html/gooddetails.html',
            template: './src/html/gooddetails.html',
            chunks: [ 'gooddetails', 'jquery','flexible'],
            inject: {
                head: ['flexible'],
                body: ['gooddetails', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // 生成最终HTML goodcart
        new HtmlWebpackPlugin({
            filename: 'html/goodcart.html',
            template: './src/html/goodcart.html',
            chunks: ['goodcart', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['goodcart', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML ordercheck
        new HtmlWebpackPlugin({
            filename: 'html/ordercheck.html',
            template: './src/html/ordercheck.html',
            chunks: ['ordercheck', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['ordercheck', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML myaddress
        new HtmlWebpackPlugin({
            filename: 'html/myaddress.html',
            template: './src/html/myaddress.html',
            chunks: ['myaddress', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['myaddress', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML assess
        new HtmlWebpackPlugin({
            filename: 'html/assess.html',
            template: './src/html/assess.html',
            chunks: ['assess', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['assess', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML myorder
        new HtmlWebpackPlugin({
            filename: 'html/myorder.html',
            template: './src/html/myorder.html',
            chunks: ['myorder', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['myorder', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML myassess
        new HtmlWebpackPlugin({
            filename: 'html/myassess.html',
            template: './src/html/myassess.html',
            chunks: ['myassess', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['myassess', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML mycollect
        new HtmlWebpackPlugin({
            filename: 'html/mycollect.html',
            template: './src/html/mycollect.html',
            chunks: ['mycollect', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['mycollect', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML addressedit
        new HtmlWebpackPlugin({
            filename: 'html/addressedit.html',
            template: './src/html/addressedit.html',
            chunks: ['addressedit', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['addressedit', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML search
        new HtmlWebpackPlugin({
            filename: 'html/search.html',
            template: './src/html/search.html',
            chunks: ['search', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['search', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        // // 生成最终HTML myhome
        new HtmlWebpackPlugin({
            filename: 'html/myhome.html',
            template: './src/html/myhome.html',
            chunks: ['myhome', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['myhome', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        }),
        //  // 生成最终HTML searchresult
        new HtmlWebpackPlugin({
            filename: 'html/searchresult.html',
            template: './src/html/searchresult.html',
            chunks: ['searchresult', 'jquery', 'flexible'],
            inject: {
                head: ['flexible'],
                body: ['searchresult', 'jquery']
            },
            hash: true,
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        })
    ]
};