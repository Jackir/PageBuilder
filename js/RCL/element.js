/**
 * Created by Ratan on 7.4.14.
 */

function element() {

};

element.prototype.name = "";
element.prototype.syntax = "";
element.prototype.property=[];/** CSS property **/
element.prototype.attributes=[];/** HTML atrribute **/
element.prototype.showCss = function(){
    return false;
};
element.prototype.show= function() {
    console.log(this.name);
    console.log("<"+this.syntax+">");
};

element.prototype.form =function (){

};