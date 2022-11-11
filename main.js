const ochiqmatn=document.getElementById('ochiqmatn');
const kalit=document.getElementById('kalit');
const select=document.getElementById('select');
const btn=document.getElementById('btn');
const result=document.getElementById('result');
btn.addEventListener('click',(e)=>{
   e.preventDefault();
   let str = ochiqmatn.value;
   let keyword =kalit.value;
   str=str.toUpperCase();
   keyword=keyword.toUpperCase();
   let key = generateKey(str, keyword);
   if(select.value=='shifrlash'){
      result.innerText='Natija: '+cipherText(str,key);
   }
   else{
      result.innerText='Natija: '+originalText(str,key);
   }
});
function generateKey(str,key)
{
   key=key.split("");
   if(str.length == key.length)
      return key.join("");
   else
   {
      let temp=key.length;
      for (let i = 0;i<(str.length-temp) ; i++)
      {         
         key.push(key[i % ((key).length)])
      }
   }
   return key.join("");
}

function cipherText(str,key)
{
   let cipher_text="";
   for (let i = 0; i < str.length; i++)
   {
      let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) %26;
      x += 'A'.charCodeAt(0);
      cipher_text+=String.fromCharCode(x);
   }
   return cipher_text;
}
function originalText(cipher_text,key)
{
   let orig_text='';
   for (let i = 0 ; i < cipher_text.length ; i++)
   {
      let x = (cipher_text[i].charCodeAt(0) -
               key[i].charCodeAt(0) + 26) %26;
      x += 'A'.charCodeAt(0);
      orig_text+=String.fromCharCode(x);
   }
   return orig_text;
}