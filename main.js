/* Evento load será acionado quando os elementos da página terminarem de carregar */
window.addEventListener('load', () => {

	/* Seleção dos elementos */
	const form = document.querySelector("#nova_lista");
	const input = document.querySelector("#input_lista");
	const list_el = document.querySelector("#tarefas");

	/* o que acontecerá quando o evento "submit" for acionado */
	form.addEventListener('submit', (e) => {

		/* Manterá as tarefas na tela cancelando o comportamento padrão */
		e.preventDefault();

		/* Capturará o valor do input do campo de texto que é usado para inserir nova tarefa */
		const tarefa = input.value;

		/* Será criada uma const chamada de "tarefa_el" que irá criar um elemento <div> e logo em seguida irá ser adicionado a ela a classe .tarefa  (<div class="tarefa">)*/
		const tarefa_el = document.createElement('div');
		tarefa_el.classList.add('tarefa');

		/* Será criada uma const chamada de "tarefa_conteudo_el" que irá criar um elemento <div> e logo em seguida irá ser adicionado a ela a classe .conteudo  (<div class="conteudo">)*/
		const tarefa_conteudo_el = document.createElement('div');
		tarefa_conteudo_el.classList.add('conteudo');

		/* A const tarefa_el receberá a const tarefa_conteudo_el como filha */
		tarefa_el.appendChild(tarefa_conteudo_el);

		/* Será criada uma const chamada de "tarefa_input_el" que irá criar um elemento <input> que irá receber a classe ".text", o tipo "text", o valor da const tarefa e o atributo "readonly" (fará com que seja um campo apenas de entrada e usuário não poderá modificá-lo, servirá apenas para leitura) 
		
		<input 
		type="text" 
		class="text" 
		value="A new tarefa"
		readonly>

		*/
		const tarefa_input_el = document.createElement('input');
		tarefa_input_el.classList.add('text');
		tarefa_input_el.type = 'text';
		tarefa_input_el.value = tarefa;
		tarefa_input_el.setAttribute('readonly', 'readonly');

		/* A const tarefa_conteudo_el receberá a const tarefa_input_el como filha */
		tarefa_conteudo_el.appendChild(tarefa_input_el);

		/* Será criada uma const chamada de "tarefa_acoes_el" que irá criar um elemento <div> e logo em seguida irá ser adicionado a ela a classe .acoes  (<div class="acoes">)*/
		const tarefa_acoes_el = document.createElement('div');
		tarefa_acoes_el.classList.add('acoes');
		
		/* Será criada uma const chamada de "tarefa_editar_el" que irá criar um elemento <button> e logo em seguida irá ser adicionado a ela a classe .editar e será adicionado o texto "editar" (<button class="editar">editar</button>)*/
		const tarefa_editar_el = document.createElement('button');
		tarefa_editar_el.classList.add('editar');
		tarefa_editar_el.innerText = 'editar';

		/* Será criada uma const chamada de "tarefa_apagar_el" que irá criar um elemento <button> e logo em seguida irá ser adicionado a ela a classe .apagar e será adicionado o texto "Apagar" (<button class="delete">Apagar</button>)*/
		const tarefa_apagar_el = document.createElement('button');
		tarefa_apagar_el.classList.add('apagar');
		tarefa_apagar_el.innerText = 'Apagar';

		/* A const "tarefa_acoes_el" receberá a const "tarefa_editar_el" e a const "tarefa_apagar_el" como filhas */
		tarefa_acoes_el.appendChild(tarefa_editar_el);
		tarefa_acoes_el.appendChild(tarefa_apagar_el);

		/* A const "tarefa_el" receberá a const "tarefa_acoes_el" como filha */
		tarefa_el.appendChild(tarefa_acoes_el);

		/* A const "list_el" receberá a const "tarefa_el" como filha */
		list_el.appendChild(tarefa_el);

		/* o valor de input receberá "" (nada)  para que quando uma nova tarefa seja criada o campo de entrada esteja sempre limpo (vazio) */
		input.value = '';

		/* o que acontecerá quando o evento "click" for acionado no editar */
		tarefa_editar_el.addEventListener('click', (e) => {
			/* Se a const "tarefa_editar_el" esteja com o texto "editar" então deverá ser receber o texto "Salvar" */
			if (tarefa_editar_el.innerText.toLowerCase() == "editar") {
				tarefa_editar_el.innerText = "Salvar";

				/* O input tarefa irá perder o atributo "readonly" permitindo então que haja alterações no input */
				tarefa_input_el.removeAttribute("readonly");

				/* Irá ser responsável por "mostrar" a caixa do input da tarefa para "mostrar" que já está disponível para edição */
				tarefa_input_el.focus();


				
			} else {
				/* Caso a const "tarefa_editar_el" NÃO esteja com o texto "editar" obviamente ela estará com o texto "Salvar" então ela irá receber o texto "editar" novamente  */
				tarefa_editar_el.innerText = "editar";

				/* Após a const "tarefa_editar_el" ter recebido o texto "editar" novamente, irá receber também o atributo de "readonly", novamente, fazendo com que o campo seja um campo apenas de entrada e usuário não possa modificá-lo, servirá apenas para leitura */
				tarefa_input_el.setAttribute("readonly", "readonly");
			}
		});
		/* o que acontecerá quando o evento "click" for acionado no editar */
		tarefa_apagar_el.addEventListener('click', (e) => {

			/* Será removido o elemento "tarefa_el" filho de "list_el" */
			list_el.removeChild(tarefa_el);
		});
	});

});
