var express = require("express");
const { request } = require("express");
var app = express();

app.use(express.static(__dirname +"/public"));

var adder =function(num1,num2){
     var result= num1+num2;
     return result;
}

class Node{
    constructor(data,next= null){
        this.data=data; 
        this.next=next;   
    }
}
//const firstNode= new Node({id:1,name:'alex',deposit:5});
//console.log(firstNode);

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    //insert the first node

insertFirst(data){
    this.head=new Node(data,this.head);
}

    //print list data
printListData(){
    let current=this.head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}
    //get a value from a index
getAt(index){
    let current=this.head;
    let count =0;

    while(current){
        if(count==index){
            console.log(current.data);
            return current.data;
        }
        count++;
        current=current.next;
    }
    

}


}
const ll= new LinkedList();
ll.insertFirst({id:3,name:'jim',deposit:15});
ll.insertFirst({id:2,name:'sarah',deposit:5});
ll.insertFirst({id:1,name:'alex',deposit:5});

//printing list data
//ll.printListData();
//ll.getAt(num1);


app.get("/getdata",function(req,res){
     var accountid=Number(req.query.accountid);
     var result =ll.getAt(accountid);
     res.send("The result is : "+ JSON.stringify(result));
     
})

var port=3000;
app.listen(port);
console.log("server listining on port: "+ port);
