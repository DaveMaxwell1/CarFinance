package controllers;

import play.*;
import play.mvc.*;

import views.html.*;
import views.html.dbg.*;
import models.*;

public class DbgController extends Controller {
  
	public static Result dbg() {
		return ok(dbgView.render(new LoanApplication()));
	}

	public static Result bootstrap() {
		return ok(bootstrapView.render(null));
	}

}
