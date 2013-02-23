package controllers;

import play.*;
import play.mvc.*;

import views.html.*;
import models.*;

public class DbgController extends Controller {
  
	public static Result dbg() {
		return ok(dbgView.render(new LoanApplication()));
	}

}
