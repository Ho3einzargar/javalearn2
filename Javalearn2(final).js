class User{
constructor(username , password){
    this.username=prompt("Hello pls enter username");
    if(this.username=="",this.username=='username'){
        alert("pls enter your username");
        this.username=prompt("Hello pls enter username");
    }
    else{
        this.password=prompt("Hello pls enter password");

    }


}
sayuser(){
    alert( "username : " + `${this.username}` + "  password : " + `${this.password}`);   
}


}
let user = new User();
user.sayuser();







