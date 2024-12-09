mongoimport --db ChatGPT_Evaluation --collection Computer_Security --type csv --file computer_security_test.csv --fields question,optionA,optionB,optionC,optionD,anticipatedAnswer,chatGPTResponse --uri "mongodb+srv://itsddang:t1F0QY0kSetB0AQi@itec4020a.n1uno.mongodb.net/"

mongoimport --db ChatGPT_Evaluation --collection History --type csv --file prehistory_test.csv --fields question,optionA,optionB,optionC,optionD,anticipatedAnswer,chatGPTResponse --uri "mongodb+srv://itsddang:t1F0QY0kSetB0AQi@itec4020a.n1uno.mongodb.net/"

mongoimport --db ChatGPT_Evaluation --collection Social_Science --type csv --file sociology_test.csv --fields question,optionA,optionB,optionC,optionD,anticipatedAnswer,chatGPTResponse --uri "mongodb+srv://itsddang:t1F0QY0kSetB0AQi@itec4020a.n1uno.mongodb.net/"

pause