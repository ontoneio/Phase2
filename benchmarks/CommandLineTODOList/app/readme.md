# Specs 

[X] Your command should be called tasks  
> Made a new file, called it `tasks`

[X] The tasks command file should have a shebang pointing to node 
> Added `#!/usr/bin/env node` in line 1 in `tasks`

[X] The tasks command file should have execute permissions  
> Entered `chmod u+x tasks` in the terminal

[] Tasks are persisted to a json file using fs.readFileSync and fs.writeFileSync

[] The list command is implemented in ./commands/list.js  

[] The add command is implemented in ./commands/add.js  

[] The complete command is implemented in ./commands/complete.js 

[] The delete command is implemented in ./commands/delete.js  

[] Add tests using Mocha and Chai for all functions  

[]User receives an error message if they enter an invalid command  

[] Your program should create the tasks.json if the file doesn't exist  
tasks.json is ignored and not checked into your Git repository  



tasks.js
