# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table address (
  id                        bigint not null,
  country                   varchar(255),
  county_state              varchar(255),
  town                      varchar(255),
  line_2                    varchar(255),
  line_1                    varchar(255),
  constraint pk_address primary key (id))
;

create table linked_account (
  id                        bigint not null,
  user_id                   bigint,
  provider_user_id          varchar(255),
  provider_key              varchar(255),
  constraint pk_linked_account primary key (id))
;

create table loan_application (
  id                        bigint not null,
  type_of_loan              varchar(255),
  product_type              varchar(255),
  make                      varchar(255),
  model                     varchar(255),
  year                      bigint,
  goods_description         varchar(255),
  first_name                varchar(255),
  last_name                 varchar(255),
  first_cli_title_desc      varchar(255),
  first_cli_date_of_birth   varchar(255),
  first_cli_gender          varchar(255),
  first_cli_address_line_1  varchar(255),
  first_cli_address_line_2  varchar(255),
  first_cli_address_line_3  varchar(255),
  first_cli_address_line_4  varchar(255),
  first_cli_address_line_5  varchar(255),
  first_cli_years_at_address varchar(255),
  first_cli_prev_addr_line_1 varchar(255),
  first_cli_prev_addr_line_2 varchar(255),
  first_cli_prev_addr_line_3 varchar(255),
  first_cli_prev_addr_line_4 varchar(255),
  first_cli_prev_addr_line_5 varchar(255),
  phone_area                varchar(255),
  phone_no                  varchar(255),
  first_cli_preferred_phone varchar(255),
  first_cli_home_phone_area varchar(255),
  first_cli_home_phone_no   varchar(255),
  first_cli_work_phone_area varchar(255),
  first_cli_work_phone_no   varchar(255),
  first_cli_mobile_phone_no varchar(255),
  first_cli_financial_institute varchar(255),
  first_cli_bank_nsc        varchar(255),
  first_cli_bank_account_number varchar(255),
  email                     varchar(255),
  financial_institution     varchar(255),
  sort_code                 varchar(255),
  account_number            varchar(255),
  supplier_name             varchar(255),
  supplier_address_line_1   varchar(255),
  supplier_address_line_2   varchar(255),
  supplier_address_line_3   varchar(255),
  supplier_address_line_4   varchar(255),
  supplier_contact_name     varchar(255),
  supplier_phone_area       varchar(255),
  supplier_phone_no         varchar(255),
  second_cli_surname        varchar(255),
  second_cli_first_name     varchar(255),
  second_cli_title_desc     varchar(255),
  second_cli_address_line_1 varchar(255),
  second_cli_address_line_2 varchar(255),
  second_cli_address_line_3 varchar(255),
  second_cli_address_line_4 varchar(255),
  second_cli_address_line_5 varchar(255),
  second_cli_years_at_address varchar(255),
  second_cli_prev_addr_line_1 varchar(255),
  second_cli_prev_addr_line_2 varchar(255),
  second_cli_prev_addr_line_3 varchar(255),
  second_cli_prev_addr_line_4 varchar(255),
  second_cli_prev_addr_line_5 varchar(255),
  second_cli_date_of_birth  varchar(255),
  second_cli_gender         varchar(255),
  second_cli_preferred_phone varchar(255),
  second_cli_home_phone_area varchar(255),
  second_cli_home_phone_no  varchar(255),
  second_cli_work_phone_area varchar(255),
  second_cli_work_phone_no  varchar(255),
  second_cli_mobile_phone_no varchar(255),
  second_cli_financial_institute varchar(255),
  second_cli_bank_nsc       varchar(255),
  second_cli_bank_account_number varchar(255),
  business_name             varchar(255),
  contact_name              varchar(255),
  business_address_line_1   varchar(255),
  business_address_line_2   varchar(255),
  business_address_line_3   varchar(255),
  business_address_line_4   varchar(255),
  business_address_line_5   varchar(255),
  cash_price                varchar(255),
  trade_in                  varchar(255),
  deposit                   varchar(255),
  outstanding_finance_on_trade_in varchar(255),
  finance_required          varchar(255),
  payment_frequency         varchar(255),
  payment_term              varchar(255),
  payment_amount            varchar(255),
  number_of_advance_rentals bigint,
  number_of_rentals         bigint,
  comment                   varchar(255),
  constraint pk_loan_application primary key (id))
;

create table security_role (
  id                        bigint not null,
  role_name                 varchar(255),
  constraint pk_security_role primary key (id))
;

create table token_action (
  id                        bigint not null,
  token                     varchar(255),
  target_user_id            bigint,
  type                      varchar(2),
  created                   timestamp,
  expires                   timestamp,
  constraint ck_token_action_type check (type in ('EV','PR')),
  constraint uq_token_action_token unique (token),
  constraint pk_token_action primary key (id))
;

create table users (
  id                        bigint not null,
  email                     varchar(255),
  name                      varchar(255),
  first_name                varchar(255),
  last_name                 varchar(255),
  last_login                timestamp,
  active                    boolean,
  email_validated           boolean,
  constraint pk_users primary key (id))
;

create table user_permission (
  id                        bigint not null,
  value                     varchar(255),
  constraint pk_user_permission primary key (id))
;


create table users_security_role (
  users_id                       bigint not null,
  security_role_id               bigint not null,
  constraint pk_users_security_role primary key (users_id, security_role_id))
;

create table users_user_permission (
  users_id                       bigint not null,
  user_permission_id             bigint not null,
  constraint pk_users_user_permission primary key (users_id, user_permission_id))
;
create sequence address_seq;

create sequence linked_account_seq;

create sequence loan_application_seq;

create sequence security_role_seq;

create sequence token_action_seq;

create sequence users_seq;

create sequence user_permission_seq;

alter table linked_account add constraint fk_linked_account_user_1 foreign key (user_id) references users (id) on delete restrict on update restrict;
create index ix_linked_account_user_1 on linked_account (user_id);
alter table token_action add constraint fk_token_action_targetUser_2 foreign key (target_user_id) references users (id) on delete restrict on update restrict;
create index ix_token_action_targetUser_2 on token_action (target_user_id);



alter table users_security_role add constraint fk_users_security_role_users_01 foreign key (users_id) references users (id) on delete restrict on update restrict;

alter table users_security_role add constraint fk_users_security_role_securi_02 foreign key (security_role_id) references security_role (id) on delete restrict on update restrict;

alter table users_user_permission add constraint fk_users_user_permission_user_01 foreign key (users_id) references users (id) on delete restrict on update restrict;

alter table users_user_permission add constraint fk_users_user_permission_user_02 foreign key (user_permission_id) references user_permission (id) on delete restrict on update restrict;

# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists address;

drop table if exists linked_account;

drop table if exists loan_application;

drop table if exists security_role;

drop table if exists token_action;

drop table if exists users;

drop table if exists users_security_role;

drop table if exists users_user_permission;

drop table if exists user_permission;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists address_seq;

drop sequence if exists linked_account_seq;

drop sequence if exists loan_application_seq;

drop sequence if exists security_role_seq;

drop sequence if exists token_action_seq;

drop sequence if exists users_seq;

drop sequence if exists user_permission_seq;

