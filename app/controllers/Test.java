package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Test extends Controller {

	public static Result index() {
		return ok(test.render("Your new application is ready."));
	}

}
