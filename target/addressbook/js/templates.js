Handlebars.templates = Handlebars.templates || {};


// template --- ContactEditorView ---
Handlebars.templates['ContactEditorView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"ContactEditorView\">\n		<form class=\"contact-form\">\n		  <div class=\"form-group\">\n		    <label for=\"firstName\">First Name</label>\n		    <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First Name\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" required>\n		    <input type=\"hidden\" id=\"id\" name = \"id\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" />\n		    <input type=\"hidden\" id=\"address_id\" name = \"address.id\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.address : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" />\n		  </div>\n		  <div class=\"form-group\">\n		    <label for=\"lastName\">Last Name</label>\n		    <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Last Name\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" required>\n		  </div>\n		  <div class=\"form-group\">\n		    <label for=\"address_country\">Country</label>\n		    <input type=\"text\" class=\"form-control\" id=\"address_country\" name=\"address.country\" placeholder=\"Country\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.address : stack1)) != null ? stack1.country : stack1), depth0))
    + "\">\n		  </div>\n		  <div class=\"form-group\">\n		    <label for=\"address_country\">Street</label>\n		    <input type=\"text\" class=\"form-control\" id=\"address_street\" name=\"address.street\" placeholder=\"Street\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.address : stack1)) != null ? stack1.street : stack1), depth0))
    + "\" required>\n		  </div>\n		   <div class=\"form-group\">\n		    <label for=\"address_citry\">Citry</label>\n		    <input type=\"text\" class=\"form-control\" id=\"address_city\" name=\"address.city\" placeholder=\"City\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.address : stack1)) != null ? stack1.city : stack1), depth0))
    + "\">\n		  </div>\n		  <div class=\"form-group\">\n		    <label for=\"address_state\">State</label>\n		    <input type=\"text\" class=\"form-control\" id=\"address_state\" name=\"address.state\" placeholder=\"State\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.address : stack1)) != null ? stack1.state : stack1), depth0))
    + "\">\n		  </div>\n		  <div class=\"form-group\">\n		    <label for=\"address_state\">zip</label>\n		    <input type=\"text\" class=\"form-control\" id=\"address_zip\" name=\"address.zip\" placeholder=\"Zip\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.address : stack1)) != null ? stack1.zip : stack1), depth0))
    + "\">\n		  </div>\n		</form>\n	</div>";
},"useData":true}
);

// template --- ContactListView ---
Handlebars.templates['ContactListView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"ContactListView\">\n	<nav class=\"navbar navbar-default\">\n		  <div class=\"container-fluid\">\n		    <div class=\"collapse navbar-collapse\">\n		      <ul class=\"nav navbar-nav navbar-right\">\n		        <li>\n		        	<a href=\"#\" class=\"btn-refresh\">refresh</a>\n		        </li>\n		        <li>\n		        	<a href=\"#\" class=\"btn-new-contact\">add new </a>\n		        </li>\n		        <li class=\"dropdown\">\n		          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Select Group <span class=\"caret\"></span></a>\n		          <ul class=\"dropdown-menu\" role=\"menu\">\n		          	<li><a href=\"#\">All</a></li>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.groupList : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		          </ul>\n		        </li>\n		      </ul>\n		    </div><!-- /.navbar-collapse -->\n		  </div><!-- /.container-fluid -->\n	</nav>\n		<div class=\"contact-list-view\">\n			<table class=\"table\">\n				<thead>\n					<th>First Name</th>\n					<th>Last Name</th>\n					<th>Street</th>\n					<th>City</th>\n					<th>Country</th>\n					<th></th>\n				</thead>\n				<tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.contactList : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</tbody>\n			</table>\n		</div>\n	</div>";
},"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		          		<li><a href=\"#\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "					<tr data-item-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n						<td><a href=\"#\" class=\"btn-modify-contact\">"
    + escapeExpression(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstName","hash":{},"data":data}) : helper)))
    + "</a></td>\n						<td><a href=\"#\" class=\"btn-modify-contact\">"
    + escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastName","hash":{},"data":data}) : helper)))
    + "</a></td>\n						<td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.street : stack1), depth0))
    + "</td>\n						<td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.city : stack1), depth0))
    + "</td>\n						<td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.address : depth0)) != null ? stack1.country : stack1), depth0))
    + "</td>\n						<td>\n							<button type=\"button\" class=\"btn btn-xs btn-defualt btn-manage-group\">manage group</button>\n							<button type=\"button\" class=\"btn btn-xs btn-danger btn-delete-contact\">delete</button>\n						</td>\n					</tr>\n";
},"useData":true}
);

// template --- GroupDropDownList ---
Handlebars.templates['GroupDropDownList'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul class=\"dropdown-menu GroupDropDownList\" role=\"menu\">\n		          	<li data-groupid=\"0\"><a href=\"#\" class=\"contact-group-selector\">All</a></li>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.groupList : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</ul>";
},"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		          		<li data-groupid=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\" class=\"contact-group-selector\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"useData":true}
);

// template --- GroupContactManageView ---
Handlebars.templates['GroupContactManageView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"GroupContactManageView\">\n\n	<div class=\"panel panel-primary\">\n	 <div class=\"panel-heading\">\n    	<h3 class=\"panel-title\">Not selected</h3>\n       <input type=\"hidden\" id=\"contactid_container\" name=\"contactid.container\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.contactid : stack1), depth0))
    + "\"/>\n  	</div>\n  		<div class=\"panel-body\">\n    		<table class=\"table\">\n    			<tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.notSelectedGroups : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    			</tbody>\n    		</table>\n  		</div>\n	</div>\n	<div class=\"panel panel-primary\">\n	 <div class=\"panel-heading\">\n    	<h3 class=\"panel-title\">selected</h3>\n  	</div>\n  		<div class=\"panel-body\">\n    		<table class=\"table\">\n    			<tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.selectedGroups : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    			</tbody>\n    		</table>\n  		</div>\n	</div>\n\n</div>";
},"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "    					<tr data-groupid=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-contactid=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.contactid : stack1), depth0))
    + "\">\n    						<td>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n    						<td class=\"col-md-2\"><button type=\"button\" class=\"btn btn-xs btn-defualt btn-select-group\">add group</button></td>\n    					</tr>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    					<tr data-groupid=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    						<td>\n                  "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.groupContact : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </td>\n    						<td class=\"col-md-2\"><button type=\"button\" class=\"btn btn-xs btn-danger btn-remove-group\">remove</button></td>\n    					</tr>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <input type=\"hidden\" class=\"cls-group-contact-id\" value=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>\n";
},"useData":true}
);

// template --- GroupEditorView ---
Handlebars.templates['GroupEditorView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"GroupEditorView\">\n		<form class=\"group-form\">\n		  <div class=\"form-group\">\n		    <label for=\"name\">Group Name</label>\n		    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Group Name\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" required>\n		    <input type=\"hidden\" id=\"id\" name = \"id\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" />\n		  </div>\n		</form>\n	</div>";
},"useData":true}
);

// template --- GroupListView ---
Handlebars.templates['GroupListView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"GroupListView\">\n	<nav class=\"navbar navbar-default\">\n		  <div class=\"container-fluid\">\n		    <div class=\"collapse navbar-collapse\">\n		      <ul class=\"nav navbar-nav navbar-right\">\n		       	<li>\n		        	<a href=\"#\" class=\"btn-refresh\">refresh</a>\n		        </li>\n		        <li><a href=\"#\" class=\"btn-new-group\">add new</a></li>\n		      </ul>\n		    </div><!-- /.navbar-collapse -->\n		  </div><!-- /.container-fluid -->\n	</nav>\n		<div class=\"group-list-view\">\n			<table class=\"table\">\n				<thead>\n					<th>Name</th>\n				</thead>\n				<tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.groupList : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</tbody>\n			</table>\n		</div>\n	</div>";
},"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<tr data-item-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n						<td><a href=\"#\" class=\"btn-modify-group\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></td>\n					</tr>\n";
},"useData":true}
);

// template --- MainView ---
Handlebars.templates['MainView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"MainView container\">\n	<div clss=\"row\">\n		<div class=\"Content-left col-md-2\">\n			<div class=\"list-group\">\n  				<a href=\"#\" class=\"list-group-item active nav-contact-link\">\n    				Contact\n  				</a>\n  				<a href=\"#\" class=\"list-group-item nav-group-link\">\n  					Group\n  				</a>\n			</div>\n		</div>\n		<div class=\"MainView-content col-md-10\">\n		</div>\n	</div>\n	\n</div>";
  },"useData":true}
);

// template --- PopupView ---
Handlebars.templates['PopupView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"modal fade PopupView\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n      </div>\n      <div class=\"modal-body\">\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.content : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default pop-cancel\" data-dismiss=\"modal\">Close</button>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.hideSave : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </div>\n    </div>\n  </div>\n</div>";
},"1":function(depth0,helpers,partials,data) {
  return "         <span></span>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "         <button type=\"button\" class=\"btn btn-primary popup-submit\">Save changes</button>\n";
  },"useData":true}
);
