package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class DbgController extends Controller {
  
	public static Result dbg() {
		return ok(index.render("Your new application is ready."));
	}

}
