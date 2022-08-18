/Escreva um programa que pedirá para o usuário dois números entre 1 e 100. O programa deve, entã, iferar de um em um do menor pro maior. sempre imprimindo o número na tela do usuário. Entretano, caso o número seja divisivel por 7, o programa deve ao inves disso imprimir a palavra "ping". Caso o número seja divisivel por 5, o programa deve imprimir "pong". Caso o número seja divisivel por 7 e 5, o programa deveria imprimir a mensagem "ping pong". Dica: neste exercicio vocês talvez precisem fazer uso do recurso "user.questionint()" que transforma o conteudo de um input do usuario de string para inteiro./


const readline = require('readline')
const interface = readline.createInterface({input:process.stdin,output:process.stdout})
const resultado=[]

//Primeira Número
interface.question("Digite o primeiro número: ",(num1)=>
{
//Segundo Número
    interface.question("Digite o segundo número: ",(num2)=>
    {
//Maior e menor número
        if(num1>num2)
        {
            maior=num1
            menor=num2
        }
        else
        {
            maior=num2
            menor=num1
        }   

//Repetição
        while(maior>=menor)
        {
//Condição para ping-pong 
            if(menor%7==0 && menor%5==0)
            {
                console.log(menor,"- ping-ping")
            }
//Condição para pong
            else if(menor%5==0)
            {
                console.log(menor,"- pong") 
            }
//Condição para ping
            else if(menor%7==0)
            {
                console.log(menor,"- ping")
            }
//Número fora das condições
            else 
            {
                console.log(menor)
            }
            ++menor
        }   
//Fechando interface
        interface.close()
    }
    )
})