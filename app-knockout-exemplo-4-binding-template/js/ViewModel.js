function ViewModel(){
			
	var self = this;

	self.tituloCabecalho = ko.observable("Título");
	self.assuntoCabecalho = ko.observable("Algum assunto...");

	self.lista = ko.observableArray([
		{titulo: "Título item 1", conteudo: "Conteudo item 1"},
		{titulo: "Título item 2", conteudo: "Conteudo item 2"},
		{titulo: "Título item 3", conteudo: "Conteudo item 3"}
	]);
	
}

vm = new ViewModel();

ko.applyBindings(vm);