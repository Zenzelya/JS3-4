var ProgramTest = {

 	createWrapper  : function (){
		var wrapper = document.createElement('div');
		wrapper.classList.add('container');
		var parentElem = document.body;
		parentElem.appendChild(wrapper);
	},
 

	createHeader: function (){
    	var h3 = document.createElement('h3');
	 	h3.classList.add('header');
		h3.innerHTML = 'Тест по программированию';
		var parentElem = document.querySelector('.container');
		parentElem.appendChild(h3);
	},

	createForm: function(){
		var form = document.createElement('form');
		form.classList.add('form');
		form.setAttribute("method", "post");
		form.setAttribute("action", "#");
		var parentElem = document.querySelector('.container');
		parentElem.appendChild(form);
	}, 
	
	createBlock: function(){
		for(i=1; i<=3; i++){
	  		var block = document.createElement('div');
	  		block.classList.add('checkbox'+i);
	  		var parentElem = document.querySelector('.form');
	  		parentElem.appendChild(block);
	 	}
  	},

  	createQuestion: function(){
    	for(i=1; i<=3; i++) {
	  		var question = document.createElement('ul');
	  		var header = document.createElement('h4');
	  		question.appendChild(header);
	  		header.innerHTML = i+ '. ' +'Вопрос № '+ i;

	  		for(j=1; j<=3; j++){
	 	  		var li = document.createElement('li');	
	 	  		question.appendChild(li);
	      		var label = document.createElement('label');
	      		li.appendChild(label);
	      		var input = document.createElement('input');
	      		input.type = 'checkbox';
	      		label.appendChild(input);
	      		label.appendChild(document.createTextNode('Вариант ответа № '+j));
        	}
	  	
	  		var parentElem = document.querySelector('.checkbox'+i);
			parentElem.appendChild(question);
	  	}
 	 },
	
	createBox: function(){
		var box = document.createElement('div');
		box.classList.add('buttonBox');
		var parentElem = document.querySelector('.form');
		parentElem.appendChild(box);

	},
	
	createButton: function(){
		var button = document.createElement("button");
		button.classList.add('btn-primary');
		button.setAttribute("type", "submit");
		var t = document.createTextNode("Проверить мои результаты");      
		button.appendChild(t);  
		var parentElem = document.querySelector('.buttonBox');
		parentElem.appendChild(button);
	}

}


ProgramTest.createWrapper();
ProgramTest.createHeader();
ProgramTest.createForm();
ProgramTest.createBlock();
ProgramTest.createQuestion();
ProgramTest.createBox();
ProgramTest.createButton();