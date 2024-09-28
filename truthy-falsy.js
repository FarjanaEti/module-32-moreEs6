const x=' ';
if(x){
   //console.log('value x is truthy') 
}
   else{
      // console.log('value x is falsy')
   }         
   
   //logical or
   let istruth=false;
   let name='eti';
   const disply= istruth || name;//or ar khetre false hoile right site ar ta console korbe

   //console.log(disply)
   //logical and &&
   let islogin=true;
   let user='eti';
   const displyed= islogin && user;//and a true hoile right side false hoile false console korbe

   //console.log(displyed)

   //! and !!

   const value=null;
   const value2='eti'
   if(!value){//truth
       console.log('value is truthy')                       
   }
   else{//false
      console.log('value is falsy')                        
   }

   if(!!value2){
       console.log('value2 is truthy');                      
   }
   else{
       console.log('value2 is falsy');                       
   }