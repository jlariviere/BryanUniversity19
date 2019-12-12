const readline= require ("readline-sync");

//1
const hello = readline.question("Welcome adventurer. The land of Ooo needs your help to rid the land of monsters, blah blah blah")
//2
const name = readline.question("To begin your quest please enter your name:")
const enemies = ["Zombie", "Mage", "Dragon"];
const winnings =["Gold ring","Ruby","Diamond"]


const adventureTime = ()=> {
	const self = this;
	let enemy;
	const generateRandomEnemy = ()=> {
		let randomInt = Math.floor(Math.random() * ((enemies.length - 1) - 0 + 1)) + 0;
		enemy = enemies[randomInt];
		return enemy;
    };
    
	this.user = name;
	this.userIsActive = true;
	this.userHp = 50;
	this.enemyHp = 50;
	this.enemyIsActive = null;
	this.enemyCount = 1;

const inventory = [
   this.user,
    this.userHp,
    item = []
]


	this.userAction = ()=> {
		const action = readline.question('What do you want to do?, enter "r" to run or "a" to attack: ').toLowerCase();
		const userAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);

		switch(action) {
			case "r":
                self.userIsActive = false;
                console.log ("You  Escaped! ")
				key = readline.keyIn("Press W to walk, or P to show inventory: ",{limit: "w,p"});
				if (key ==="p")console.log(inventory)
				else if (key === "w")
                generateRandomEnemy();
                console.log("Walking......");
                console.log("Holy smokes, A " + enemy + " has appeared");
                self.processAttack();
         
              
                // while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
                //     console.log("==============================================");
				// 	key = readline.keyIn("Press W to walk, or P to show inventory: ",{limit: "w,p"});
				// 	if (key ==="p")console.log(inventory)
				// 	else if (key === "w")
                //     generateRandomEnemy();
                //     console.log("Walking......");
                //     console.log("Holy smokes, A " + enemy + " has appeared");
                //     self.restoreEnemy();
                //     self.processAttack();
                // }
				this.userAction()
				break;
			case "a":
				 self.enemyHp -= userAttackPower
					 
				console.log("You just attacked " + enemy + " for " + userAttackPower + " attack power");
				
				 //this.enemyAction();
				// this.processAttack();
				// this.userAction();
				
				  while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
                    console.log("==============================================");
					key = readline.keyIn("Press W to walk, or P to show inventory: ",{limit: "w,p"});
					if (key ==="p")console.log(inventory)
					else if (key === "w")
                    generateRandomEnemy();
                    console.log("Walking......");
                    console.log("Holy smokes, A " + enemy + " has appeared");
                    self.restoreEnemy();
                    self.processAttack();
                }
				 break;
				
				
			
		}


	};

	this.enemyAction = ()=> {
		if(self.userIsActive === true && self.enemyHp > 0) {
			let enemyAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);
			self.userHp -= enemyAttackPower;
			console.log(enemy + " just attacked you for " +  enemyAttackPower + " attack power");

			if(self.userHp <= 0) {
				self.userIsActive = false;
				console.log(enemy + " has killed " + self.user + "\nGame Over.");
			}

		} else if (self.enemyHp <= 0) {
			self.enemyIsActive = false;
            self.enemyCount++;
            let randomInt = Math.floor(Math.random() * ((winnings.length - 1) - 0 + 1)) + 0;
		    win = winnings[randomInt];
            item.push(win)
			console.log(self.user + " has killed " + enemy + " you found a "+ win);
		}
	};

	this.restoreEnemy = ()=> {
		self.enemyIsActive = true;
		self.enemyHp = 50;
	};

	this.processAttack = ()=> {
		if(self.enemyIsActive) {
			while(self.enemyHp > 0 && self.userIsActive === true) {
				self.userAction();
				self.enemyAction();
			}
		}
	};

	this.initialize = ()=> {
        self.enemyIsActive = true;
        //copy this
		key = readline.keyIn("Press W to walk, or P to show inventory: ",{limit: "w,p"});
		if (key ==="p")console.log(inventory)
		else if (key === "w")
		generateRandomEnemy();
		console.log("Walking......");
		console.log("Holy smokes, A " + enemy + " has appeared");
		self.processAttack();

		while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
            console.log("==============================================");
			key = readline.keyIn("Press W to walk, or P to show inventory: ",{limit: "w,p"});
			if (key ==="p")console.log(inventory)
			else if (key === "w")
			generateRandomEnemy();
			console.log("Walking......");
			console.log("Holy smokes, A " + enemy + " has appeared");
			self.restoreEnemy();
			self.processAttack();
		}

		if (self.enemyIsActive === false) {
			console.log(self.user + " Winner!");
		}
	};
	
	this.initialize();
};

adventureTime();