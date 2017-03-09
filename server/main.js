import { Meteor } from 'meteor/meteor';

Meteor.startup( () =>{
    Photoes = new Mongo.Collection('photoes');
    //服务器端发布信息
    Meteor.publish('pictures',function(){
  	     return Photoes.find({});
    });
});
