package models;

import java.util.*;

import play.db.ebean.*;
import play.data.validation.Constraints.*;

import javax.persistence.*;



public class LoanApplication extends Model {

	@Id
	public String id;

	public String make;
	public String model;
	public Long	 year;
	
	public static Finder<String,LoanApplication> find = new Finder(
		String.class, LoanApplication.class
	);
	
	public static List<LoanApplication> all() {
		//return new ArrayList<Country>();
		return find.all();
	}
	
	public static void create(LoanApplication loanApplication) {
		loanApplication.save();
	}


		
}