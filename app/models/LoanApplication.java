package models;

import java.util.*;

import play.db.ebean.*;
import play.data.validation.Constraints.*;

import javax.persistence.*;


@Entity
public class LoanApplication extends Model {

	@Id
	public Long id;

	//Type
  	public String TYPE_OF_LOAN;
  	public String PRODUCT_TYPE;

	//Car Info
	public String make; //MAKE
	public String model; //MODEL_DESCRIPTION
	public Long	 year; //YEAR_OF_MANUFACTURE;
	public String GOODS_DESCRIPTION;

	//First Customer Info
	public String first_name; //FIRST_CLI_FIRST_NAME
	public String last_name; //FIRST_CLI_SURNAME
	public String FIRST_CLI_TITLE_DESC;
	public String FIRST_CLI_DATE_OF_BIRTH;
	public String FIRST_CLI_GENDER;

	//First CLI address
	public String FIRST_CLI_ADDRESS_LINE_1;
	public String FIRST_CLI_ADDRESS_LINE_2;
	public String FIRST_CLI_ADDRESS_LINE_3;
	public String FIRST_CLI_ADDRESS_LINE_4;
	public String FIRST_CLI_ADDRESS_LINE_5;
	public String FIRST_CLI_YEARS_AT_ADDRESS;

	//If years at address is < X then also ask for previous address (mandatory) 
	public String FIRST_CLI_PREV_ADDR_LINE_1;
	public String FIRST_CLI_PREV_ADDR_LINE_2;
	public String FIRST_CLI_PREV_ADDR_LINE_3;
	public String FIRST_CLI_PREV_ADDR_LINE_4;
	public String FIRST_CLI_PREV_ADDR_LINE_5;

	//First CLI contact info
	public String PHONE_AREA;
	public String PHONE_NO;
	public String FIRST_CLI_PREFERRED_PHONE;
	public String FIRST_CLI_HOME_PHONE_AREA;
	public String FIRST_CLI_HOME_PHONE_NO;
	public String FIRST_CLI_WORK_PHONE_AREA;
	public String FIRST_CLI_WORK_PHONE_NO;
	public String FIRST_CLI_MOBILE_PHONE_NO; 

	//First CLI Bank Info
	public String FIRST_CLI_FINANCIAL_INSTITUTE;
	public String FIRST_CLI_BANK_NSC;
	public String FIRST_CLI_BANK_ACCOUNT_NUMBER;


	//Additional (included by Kevin)
	public String email;
	public String financial_institution; //FIRST_CLI_FINANCIAL_INSTITUTE
	public String sort_code; //BANK_NSC
	public String account_number; //BANK_ACCOUNT_NUMBER
	

  	//Supplier info
  	public String SUPPLIER_NAME;
	public String SUPPLIER_ADDRESS_LINE_1;
	public String SUPPLIER_ADDRESS_LINE_2;
	public String SUPPLIER_ADDRESS_LINE_3;
	public String SUPPLIER_ADDRESS_LINE_4;
	public String SUPPLIER_CONTACT_NAME;
	public String SUPPLIER_PHONE_AREA;
	public String SUPPLIER_PHONE_NO;

	//Second applicant details
	public String  SECOND_CLI_SURNAME;
	public String  SECOND_CLI_FIRST_NAME;
	public String  SECOND_CLI_TITLE_DESC;
	public String second_cli_email;
	public String  SECOND_CLI_ADDRESS_LINE_1;
	public String  SECOND_CLI_ADDRESS_LINE_2;
	public String  SECOND_CLI_ADDRESS_LINE_3;
	public String  SECOND_CLI_ADDRESS_LINE_4;
	public String  SECOND_CLI_ADDRESS_LINE_5;

	public String  SECOND_CLI_YEARS_AT_ADDRESS;
	public String  SECOND_CLI_PREV_ADDR_LINE_1;
	public String  SECOND_CLI_PREV_ADDR_LINE_2;
	public String  SECOND_CLI_PREV_ADDR_LINE_3;
	public String  SECOND_CLI_PREV_ADDR_LINE_4;
	public String  SECOND_CLI_PREV_ADDR_LINE_5;
	public String  SECOND_CLI_DATE_OF_BIRTH;
	public String  SECOND_CLI_GENDER;

	public String  SECOND_CLI_PREFERRED_PHONE;
	public String  SECOND_CLI_HOME_PHONE_AREA;
	public String  SECOND_CLI_HOME_PHONE_NO;
	public String  SECOND_CLI_WORK_PHONE_AREA;
	public String  SECOND_CLI_WORK_PHONE_NO;
	public String  SECOND_CLI_MOBILE_PHONE_NO;

	public String  SECOND_CLI_FINANCIAL_INSTITUTE;
	public String  SECOND_CLI_BANK_NSC;
	public String  SECOND_CLI_BANK_ACCOUNT_NUMBER;

	public String SECOND_CLI_REPAYMENT_INSTITUTE;
	public String SECOND_CLI_REPAYMENT_BANK_NSC;
	public String SECOND_CLI_REPAYMENT_ACCOUNT;

	//Business Info
	public String BUSINESS_NAME;
	public String contact_name;
	public String BUSINESS_ADDRESS_LINE_1;
	public String BUSINESS_ADDRESS_LINE_2;
	public String BUSINESS_ADDRESS_LINE_3;
	public String BUSINESS_ADDRESS_LINE_4;
	public String BUSINESS_ADDRESS_LINE_5;


	//Finance Required
	public String cash_price; //CASH_PRICE
	public String trade_in; //TRADE_IN
	public String deposit; //DEPOSIT
	public String outstanding_finance_on_trade_in; //SETTLEMENT
	public String finance_required; //AMOUNT_FINANCED

	//Repayment Info
	public String payment_frequency; //REPAYMENT_FREQUENCY
	public String payment_term; //TERM
	public String payment_amount; //RAPAYMENT_AMOUNT

	//Lease info
	public Long number_of_advance_rentals; //NO_OF_ADVANCE_RENTALS
	public Long number_of_rentals; //NO_OF_RENTALS

	//
	public String comment; //COMMENTS
	
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