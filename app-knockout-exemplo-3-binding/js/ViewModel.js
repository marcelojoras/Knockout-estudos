function ViewModel(){
			
	var self = this;

	self.lista = ko.observableArray([]);
	self.descricaoItem = ko.observable("");
	self.alerta = ko.observable();
	self.incluirItem = function(){
		var item = self.descricaoItem();
		if(item == ""){
			self.alerta({mostrar: true, mensagem: 'Preencha a descrição do item', tipo: "alert-danger"});
		}else{
			self.lista.push({descricao: item, checado: ko.observable(false)});
			self.descricaoItem("");
			self.alerta({mostrar: true, mensagem: '"' + item + '" foi incluso', tipo: "alert-info"});	
		}
	};

	self.itensChecados = ko.pureComputed(function(){
		var count = self.lista().filter(function(item){
			return item.checado();
		}).length;

		return count;
	});

	self.itensNaoChecados = ko.pureComputed(function(){
		var count = self.lista().filter(function(item){
			return !item.checado();
		}).length;

		return count;
	});
	
}

vm = new ViewModel();

ko.applyBindings(vm);