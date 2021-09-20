let valores = [8, 1, 7, 4, 2, 9]

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`) 
  
   }

   let pos =  valores.indexOf(7)
   if (pos ==-1){
       console.log('O valor não foi encontrado')
   }
   else {
       console.log(`O valor está na posição ${pos}`)
   }

