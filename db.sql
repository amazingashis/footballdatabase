drop database Football_Club;
create database Football_Club;
use Football_Club;




CREATE TABLE Team(
    Club_id int PRIMARY KEY UNIQUE,
    Club_name VARCHAR(20),
    No_Of_Game_Played INT,
    No_Of_Gamewon INT,
    No_Of_Gamelossed INT,
    Stadium_Name VARCHAR(40),
    Manager VARCHAR(40)
);
CREATE TABLE Ground(
    Ground_name VARCHAR(30),
    Ground_location VARCHAR(20),
    Ground_type VARCHAR(20)

);




CREATE TABLE Player(
    Player_id INT AUTO_INCREMENT UNIQUE,
    Club_id INT,
    Player_name INT,
    Jersey_no INT,
    Position VARCHAR(20),
    PRIMARY KEY(Player_id),
    FOREIGN KEY(Club_id) REFERENCES Team(Club_id)

);


#consist data about  goals scored by a team

CREATE TABLE Goals_Team(
	Goals_Team_id INT PRIMARY KEY AUTO_INCREMENT,
	Club_id INT,
	Goals_for varchar(30),
	Goals_conceded varchar(30),
	Home_Goals int,
	Away_Goals int,
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
	
);


#consist data about atacking output of a player

CREATE TABLE Attacking_Output_Player(
	Attacking_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Player_id INT,
	Goals INT,
	Assists INT,
	Attacking_Output INT,
	FOREIGN KEY(Player_id) REFERENCES Player(Player_id)
);

#consist data abut fouls conceded by the team

CREATE TABLE Fouls_Team(
	Fouls_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Club_id INT,
	Yellow_Cards INT,
	Red_Cards INT,
	Total_Cards INT,
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
);


#consist data abut fouls conceded by the player

CREATE TABLE Fouls_Player(
	Fouls_Player_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Player_id INT,
	Yellow_Cards INT,
	Red_Cards INT,
	Total_Cards INT,
	FOREIGN KEY(Player_id) REFERENCES Player(Player_id)
);


#consist data about passing statistics of the team

CREATE TABLE Passing_Team(
	Passing_Team_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Club_id INT,
	Pass_completion INT,
	Pass_accuracy INT,
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
);


#consist data about passing statistics of the player

CREATE TABLE Passing_Player(
	Passing_Player_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Player_id INT,
	Pass_completion INT,
	Pass_accuracy INT,
	FOREIGN KEY(Player_id) REFERENCES Player(Player_id)
);


#consist data about set pieces statistics of the team

CREATE TABLE Set_Pieces_Team(
	Set_pieces_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Club_id INT,
	Free_kicks INT,
	Penalties INT,
	Corners INT,
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
);


#consist data about shooting statistics of the team

CREATE TABLE Shots_Team(
	Shots_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Club_id INT,
	Total_shots INT,
	Shots_on_target INT,
	Shot_accuracy INT,
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
);

#consist data about shooting statistics of the player

CREATE TABLE Shots_Player(
	Shots_Player_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Player_id INT,
	Total_shots INT,
	Shots_on_target INT,
	Shot_accuracy INT,
	FOREIGN KEY(Player_id) REFERENCES Player(PLayer_id)
);


#consist data about revenue of the team

CREATE TABLE Revenues(
	Revenue_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	Club_id INT,
	Match_day INT,
	Broadcast INT,
	Commercial INT,
	Total INT,
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
);






CREATE TABLE Board_member(
	Board_id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
        Club_id INT,
	Name VARCHAR(50),
	Date_of_birth DATE,
	Position VARCHAR(20),
	Years_of_active DATE,
	Contact_info VARCHAR(30),
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
);

CREATE TABLE Club_personnel(
	Cp_id INT AUTO_INCREMENT PRIMARY KEY  UNIQUE,
	Club_id INT,
	Name VARCHAR(50),
	Date_of_birth DATE,
	Gender VARCHAR(10),
	Level VARCHAR(20),
	Contact_info VARCHAR(50),
	Salary INT,
	Year_of_enrollment DATE,
	FOREIGN KEY(Club_id) REFERENCES Team(Club_id)
);



CREATE TABLE Sponshorship(
	Company_name VARCHAR(50) PRIMARY KEY UNIQUE,
	Club_name VARCHAR(20),
	Contact_info VARCHAR(50),
	Annual_deal INT

);

CREATE TABLE Hall_of_fame(
	Ret_player_id INT PRIMARY KEY UNIQUE,
	Position VARCHAR(20),
	Year_of_active DATE,
	Year_of_departure DATE
);


	