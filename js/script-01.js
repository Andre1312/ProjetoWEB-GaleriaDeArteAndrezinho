//Funções do JavaScript -- js/script-01.js


// Pede nome e escreve saudação 
function clique_botao1() {
		var nome;
        nome=prompt("Qual o seu nome?");
            
        document.getElementById("ola").innerHTML = ("Olá, " + nome);
        
        function click_botao(){
            alert('Você clicou no botão.'+ nome);
            
        }
    
}

// ao carregar a pagina mostra data e hora
function onload_dataehora() {
        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var dia     = data.getDate();           // 1-31
        var dia_sem = data.getDay();            // 0-6 (zero=domingo)
        var mes     = data.getMonth();          // 0-11 (zero=janeiro)
        var ano2    = data.getYear();           // 2 dígitos
        var ano4    = data.getFullYear();       // 4 dígitos
        var hora    = data.getHours();          // 0-23
        var min     = data.getMinutes();        // 0-59
        var seg     = data.getSeconds();        // 0-59
        var mseg    = data.getMilliseconds();   // 0-999
        var tz      = data.getTimezoneOffset(); // em minutos
    
        var dias = new Array('Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado');

        // Formata a data e a hora (note o mês + 1)
        var str_data = dia + '/' + (mes+1) + '/' + ano4;
        var str_hora = hora + ':' + min + ':' + seg;

        // Mostra o resultado
        alert('\t\tBem Vindo !!! \n\nHoje é ' + dias[data.getDay()] +' '+ str_data + ' às ' + str_hora +'\n\nClick no botão [Olá]  abaixo...');

}

