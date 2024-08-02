let titolo  = document.querySelector('input');
let descrizione = document.querySelector('textarea');
let btn = document.querySelector('button');
let conteiner = document.querySelector('.container')



btn.addEventListener('click', ()=>{
    let date = new Date()
    let formatDate = date.toLocaleDateString()




    if(titolo.value == '' && descrizione.value == ''){
        alert('I capi sono vuoi')
        }else{
            let div = document.createElement('div')
            div.style.backgroundColor='#0d0d';
            div.style.padding= '20px'
            div.style.marginTop='20px'
            div.style.border='2.5px solid black'
;            div.innerHTML = '<h2>' + titolo.value + '</h2>' + '<p>'+ descrizione.value+ '</p>' + '<i>'+formatDate+'</i>'
            conteiner.appendChild(div)
            titolo.value= ''
            descrizione.value=''
        }
})