function perform(value) {
    var a,b,c,d,flag=0;
    if (flag==0){
        b=parseInt(value);
        a=f1.t1.value;
        document.f1.t1.value="";
        flag=1;
    }
    else{
        c=f1.t1.value;
        document.f1.t1.value="";
        if(b==1){
            d=parseFloat(a)+parseFloat(c);
            document.f1.t1.value=d;
        }
        else if(b==2){

        }
    }
}