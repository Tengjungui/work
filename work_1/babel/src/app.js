
/*filter过滤，能被3整除的留下*/
let arr=[78,45,66,24];
let res=arr.filter( a=>{return a%3==0;} );
 console.log(res);


/*字符串连接*/
let name='ai';
let job='IT';
let html='';
    html=`
      <div>
        <h3>${name}</h3>
        <p>${job}</p>
      </div>
    `;
