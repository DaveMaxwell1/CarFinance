package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class LoanApplication extends Controller {

	public static Result index() {
		return ok(loanApplication.render("Your new application is ready."));
	}

}
