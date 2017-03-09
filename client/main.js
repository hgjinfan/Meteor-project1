import {Template} from 'meteor/templating';
import './main.html';
import './helpers/config.js';
import {Photoes} from './Mongoapi.js';

Template.nav.events({
    'click .row' (event) {
        //alert("active");
    }
});

Template.takephoto.events({
    'click .pz' (event) {
        //        document.getElementById('modal-container-374365').style.display = "none";
        //        document.getElementsByClassName('modal-backdrop')[0].style.display = 'none';
        MeteorCamera.getPicture({}, function(err, data) {
            if (!err) {
                Photoes.insert({
                    'createAt': new Date(),
                    'pic': data,
                    'owner': Meteor.userId(),
                    'username': Meteor.user().username
                });
            }
        })
    }
});

Template.tip.events({
    'click .tip' (event) {
        //        alert(event.target.nodeName);

        // alert('active');
    }
});

Template.nav.helpers({});


Template.photoes.events({
    'click .delete' (event){
        event.preventDefault();
        console.log(this._id);
        this.id = this._id;

    },
    'click #confirm' (event){
        Photoes.remove(this.id);
        //修正蒙版异常手动清除
        var child = $(".modal-backdrop")[0];
        child.parentNode.removeChild(child);
    }
});

Template.nav.events({
'click .userInfo' (event) {
    alert('active');
}
});

Template.container.helpers({
    'picInfo' (){
        return Photoes.find({},{sort:{data:-1}});
    }
});

Meteor.subscribe('picInfo');
