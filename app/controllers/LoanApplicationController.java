package controllers;

import play.*;
import play.mvc.*;
import play.data.Form;

import views.html.*;
import models.*;

import java.util.*;

public class LoanApplicationController extends Controller {

	public static Result New() {
		return ok(loanApplicationView.render(new LoanApplication()));
	}

	public static Result save() {

		Form<LoanApplication> loanApplicationForm = Form.form(LoanApplication.class);
		LoanApplication loanApplication = loanApplicationForm.bindFromRequest().get();

		if(loanApplication.id == null)
			loanApplication.save();
		else
			loanApplication.update();

		System.out.println(loanApplication.make);

		return ok(loanApplicationListView.render(LoanApplication.all()));
	}

	public static Result update(Long id) {

		Form<LoanApplication> loanApplicationForm = Form.form(LoanApplication.class);
		LoanApplication loanApplication = loanApplicationForm.bindFromRequest().get();

		System.out.println(loanApplication.make);

		return ok(loanApplicationView.render(new LoanApplication()));
	}

	public static Result read(Long id) {

		Form<LoanApplication> loanApplicationForm = Form.form(LoanApplication.class);
		LoanApplication loanApplication = LoanApplication.get(id);

		loanApplicationForm.fill(loanApplication);

		System.out.println(loanApplication.make);

		return ok(loanApplicationView.render(loanApplication));
	}

	public static Result list() {

		List<LoanApplication> loanApplications = LoanApplication.all();

		//System.out.println(loanApplication.make);

		return ok(loanApplicationListView.render(loanApplications));
	}

}
