var app = angular.module("myApp",[]);
app.directive("member",function(){
	var directive ={};
	directive.restrict='E';
	directive.scope={
		fname: "=",
		lname: "=",
		role: "=",
		operation:"&",
		call:'=',
		type:'=',
		result:'='
	};
	//directive.template="<div><p>First Name:{{fname}}</p><p> Last Name:{{lname}}</p><p>User Role:{{role}}</p><div ng-show ='call' class='inpClass'><label>Enter your first input </label><input type='number' ng-model='inp1'><br><label>Enter your second input </label><input type='number' ng-model='inp2'><br><button ng-click='operation(type)'>Operation</button><br><p>Result:{{result}}</div></div>" ;
	directive.template="<div><p>First Name:{{fname}}</p><p> Last Name:{{lname}}</p><p>User Role:{{role}}</p><div ng-show ='call' class='inpClass'><label>Enter your first number </label><input type='number' ng-model='inp1'><br><label>Enter your second number</label><input type='number' ng-model='inp2'><br><button ng-click='operation(type)'>Operation</button><br><p>Result:{{result}}</div></div>" ;
  	directive.link=function(scope,element,attributes) {
  		var createChanges = function(color){
  				element.css({
  				border:"2px solid",
  				'background-color':color
  			});
  				
  		}
  		var callFunction=function(type) {
  			scope.call= true;
  			if(type=='add') {
  				scope.type="add";
  			}
  			if(type=='subtract') {
  				scope.type="subtract";
  			}
	  		if(type=='multiply') {
  				scope.type="multiply";
  			}
  			if(type=='divide') {
  				scope.type="divide";
  			}
  		}
		scope.operation=function(type){
			switch(type){
				case "add":
					scope.result=scope.inp1+scope.inp2;
					break;
				case "subtract":
					scope.result=scope.inp1-scope.inp2;
					break;
				case "multiply":
					scope.result=scope.inp1*scope.inp2;
					break;
				case "divide":
					scope.result=scope.inp1/scope.inp2;
					break;
			}
		}  		
 		switch(scope.role) {
	 		case "NSM": createChanges("red");
	 					callFunction("add");
	 					break;
			case "ASM": createChanges("green");
						callFunction("subtract");
						break;
			case "STL": createChanges("blue");
						callFunction("multiply");
						break;
			case "DSE": createChanges("#e2dbdb");
						callFunction("divide");
						break;
			default: createChanges("black");
		}
  	}	
  	return directive;	
});

app.controller("myController",function($scope){
	//var vm = this;
	$scope.formTitle="Create Form";
	$scope.userArray=[];
	$scope.cudValue=false;
	$scope.call=false;
	$scope.type="";
	$scope.result="";
	$scope.user =   {
		id:"",
		firstName:"shikha",
		lastName:"",
		role:""		
	};

	$scope.userRole=["NSM","ASM","STL","DSE"];
	id=0;	
	$scope.formType="";
	var getId=function(){
		return id++;
	};
	$scope.submit=function(){	
	 	$scope.userCp=angular.copy($scope.user);
	 	$scope.userArray.push($scope.userCp);
		$scope.cudValue=true;
	 	$scope.resetUserDetails();
	 	console.log("userarray content..",$scope.userArray[0].firstName);
		
	}
	$scope.resetUserDetails = function(){
		$scope.user =   {
			id:"",
			firstName:"",
			lastName:"",
			role:""
		};	
	}		
});