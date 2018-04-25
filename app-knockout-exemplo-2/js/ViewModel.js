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

	self.computed = ko.computed(function(){
		return self.labelText() + ' ' + self.inputValue();
	}, this);
}

vm = new ViewModel();

ko.applyBindings(vm);