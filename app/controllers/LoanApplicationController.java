package controllers;

import play.*;
import play.mvc.*;
import play.data.Form;

import views.html.*;
import models.*;

public class LoanApplicationController extends Controller {

	public static Result index() {
		return ok(loanApplicationView.render("Your new application is ready."));
	}

	public static Result save() {

		Form<LoanApplication> loanApplicationForm = Form.form(LoanApplication.class);
		LoanApplication loanApplication = loanApplicationForm.bindFromRequest().get();

		System.out.println(loanApplication.make);

		return ok(loanApplicationView.render("Your new application is ready."));
	}

}
