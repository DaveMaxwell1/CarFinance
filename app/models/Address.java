package models;

import java.util.*;

import play.db.ebean.*;
import play.data.validation.Constraints.*;

import javax.persistence.*;


@Entity
public class Address extends Model {

	@Id
	public Long id;

	public String country;
	public String county_state;
	public String town;
	public String line_2;
	public String line_1;
	
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