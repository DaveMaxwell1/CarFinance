package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class LoginController extends Controller {

	public static Result index() {
		return ok(loginView.render("Your new application is ready."));
	}

	public static Result oAuthDenied(final String providerKey) {

		String FLASH_ERROR_KEY = "dbg";
		flash(FLASH_ERROR_KEY,
			"You need to accept the OAuth connection in order to use this website!");
		return redirect(routes.Application.index());
	}

}
