/**
 * Created by qiangxl on 2017/10/22.
 */
angular.module('route',[])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            //正在热映
            .state({
                url:'/in_theaters',
                templateUrl:'./views/in_theaters/in_theaters.html',
                name:'in_theaters'
            })
    }])