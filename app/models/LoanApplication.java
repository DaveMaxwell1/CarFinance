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