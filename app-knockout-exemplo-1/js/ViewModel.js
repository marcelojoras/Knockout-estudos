function ViewModel(){
	var self = this;
	
	self.labelText = ko.observable("Label Text");
	self.inputValue = ko.observable("Input Value");
	self.list = ko.observableArray([1,3,5,7,9,11]);
	self.buttonAction = function(){
		var last = self.list().length - 1;
		var addValue = self.list()[last] + 2;
		self.list.push(addValue);
	};

	self.inputValue.subscribe(function(newValue){
		if(newValue == "100"){
			self.labelText("Certo");
		}else{
			self.labelText("Errado");
		}
	});
}

vm = new ViewModel();

ko.applyBindings(vm);