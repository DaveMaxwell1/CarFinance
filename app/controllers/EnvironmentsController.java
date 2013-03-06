package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class EnvironmentsController extends Controller {

	public static Result list() {
		return ok(environmentsView.render("Your new application is ready."));
	}

}
