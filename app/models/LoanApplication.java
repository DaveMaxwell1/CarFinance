package models;

import java.util.*;

import play.db.ebean.*;
import play.data.validation.Constraints.*;

import javax.persistence.*;


@Entity
public class LoanApplication extends Model {

	@Id
	public Long id;

	public String make;
	public String model;
	public String first_name;
	public String last_name;
	public String email;
	public String financial_institution;
	public String sort_code;
	public String account_number;
	public Long	 year;
	
	public static Finder<Long,LoanApplication> find = new Finder(
		Long.class, LoanApplication.class
	);
	
	public static List<LoanApplication> all() {
		//return new ArrayList<Country>();
		return find.all();
	}
	
	public static void create(LoanApplication loanApplication) {
		loanApplication.save();
	}

	public static LoanApplication get(Long id) {
		return find.ref(id);
	}


		
}