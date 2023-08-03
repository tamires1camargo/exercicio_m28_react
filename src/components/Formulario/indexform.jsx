import { useState } from 'react';

import './formulario.css'


function Formulario (){

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const [mensagem, setMensagem] = useState("");
    const [imcMessage, setImcMessage] = useState("");

    function calcularIMC (elemento){
        elemento.preventDefault();
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(altura === "" && peso === ""){
        alert("[ERROR 404] Por Favor, preencha o peso  e a altura corretamente !");
    }else if(!alt){
        alert("[ERROR 404] Por Favor, preencha o peso  e a altura corretamente !");

    }else if (imc < 18.4){
        setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        setMensagem(`Você está abaixo do peso ideal!`);

    }else if (imc >= 18.5 && imc < 24.9){
        setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        setMensagem(`Você está com peso normal !`).css(color, 'green');

    }else if(imc >= 25 && imc < 29.9){
        setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        setMensagem(`Você está acima do peso !`);

    }else if(imc >= 30 && imc < 34.9){
        setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        setMensagem(`Você está com Obesidade Grau I !`);

    }else if(imc >= 35 && imc < 40){
        setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        setMensagem(`Você está com Obesidade Grau II !`);

    }else if(imc >= 40){
        setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
        setMensagem(`Você está com Obesidade Grau III !`);
    }
        setPeso("");
        setAltura("");
    }

    return(
    <div className="app">
        <div className="area-input">

        <form className="form-imc">
        <input 
            type="text"
            placeholder="Digite seu Peso - Ex: 65"
            value={peso}
            onChange={ (e) => setPeso(e.target.value) }
            />

            <input 
            type="text"
            placeholder="Digite sua Altura - Ex: 173"
            value={altura}
            onChange={ (e) => setAltura(e.target.value) }
            />

            <button className='button-form' onClick={calcularIMC}>
            CALCULAR
            </button>

        </form>
            <h2 className='resultado-imc'>
                {imcMessage} <br />
                {mensagem} <br/>
            </h2>
        </div>
        <div>
            <img className='tabela-imc' src="https://falesaude.com/wp-content/uploads/2021/01/tabela-imc-1.webp" />
        </div>

        <footer className='footer'>
            <p>2023 &copy; Tamires Camargo Soares - Todos os direitos reservados</p>
        </footer>
    </div>
    );
}





export default Formulario