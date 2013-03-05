@echo off

REM An environment variables script must exist

IF NOT EXIST setup_env_vars.bat (
	echo File not found:
	echo setup_env_vars.bat
	echo .
	echo Create the file using the following template:
	echo setup_env_vars.bat.sample
	GOTO:EOF
)

REM Create our local environment variables
call setup_env_vars.bat

REM Some debug statements
REM echo %DB_USER%
REM echo %DB_PASSWORD%
REM echo %DB_URL%

REM Start the play application
play ~run