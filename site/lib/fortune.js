//see below for random function getFortune

var  fortuneCookies = [
"  A bad peace is better than a good war. ",
"  A bad penny always turns up.  ", 
"  A blow is forgotten; a spoken word lingers on.",
"  A boil is fine as long as it’s under someone else’s arm.",
"  A broken spirit is hard to heal.  ",
"  A child’s tears reach the heavens.",
"  A child’s wisdom is also wisdom.  ",
"  Words should be weighed, not counted.",
"  If his word were a stick, you couldn't lean on it.",
"  If his word were a bridge, I'd be afraid to cross it.",
"  No one sees the hump on his own back.",
"  Everyone has his own burden.",
"  Troubles are to man what rust is to iron.",
"  They are both in love: he with himself and she with herself.",
"  Troubles are to man what rust is to iron.",
"  The closer to the synagogue, the farther from God.",
"  You're lucky, God, that you live so high; otherwise people would break your windows.",
"  When God wants to punish an unbeliever, He gives him a pious wife.",
"  If you put a shtreimel on a pig, would it make him a rabbi?",
"  He looks with his eyes, listens with his ears, and understands like a wall.",
"  He has as much sense as a church has mezuzahs.",
"  He's wondering where the chimney smoke goes.",
"  He's an expert like a goat knows about klezmer.",
"  The eggs think they're smarter than the chickens.",
"  A man studies until he's seventy and dies a fool.",
"  Man plans and God laughs.",
"  If the Book of Psalms were a remedy, you could buy it at the drugstore.",
"  If the horse had something to say, it would talk.",
"  Life is no more than a dream—but don't wake me up.",
"  If time is money, I don't have any time.",
"  If people could hire others to die for them, the poor could make a nice living.",
"  The sun shines on everyone for free.",
"  It's easier to get a drunkard off the ground than a business.",
"  All is not butter that comes from a cow.",
"  'Man begins in dust and ends in dust'— meanwhile it's good to drink some vodka.",
"  It's the carpenter's fault: if he hadn't built the bed, I wouldn't have sinned.",
"  On the eve of Yom Kippur all thieves become pious.",
"  When a thief kisses you, count your teeth.",
"  What difference does it make to the turkey whether it's slaughtered for the Purim feast or the Passover seder?",
"  If he were an undertaker, people would stop dying.",
"  May you grow like an onion with your head in the ground.",
"  May you eat chopped liver with onions, shmaltz herring, chicken soup with dumplings, baked carp with horseradish, braised meat with vegetable stew, latkes, tea with lemon, every day - and may you choke on every bite!",
"  May he have a hundred houses, each house with a hundred rooms, each room with twenty beds, and may fevers and chills toss him from bed to bed.",
"  He should turn into a chandelier, so he'll hang by day and burn by night.",
"  A curse is not a telegram; it doesn't arrive so fast.",
"  Neither cursing nor laughing can change the world.",
"  All of life is a war.",
"  The worst peace is better than the best war.",
"  The entire world rests on the tip of the tongue.",
"  When the heart is full, the eyes overflow.", 
"  Delay is good for cheese but not for a wedding.",
"  A child’s tears rend the heavens.",
"  It’s never too late to die or get married.",
"  Even in Paradise, it is not good to be alone.",
"  The trip is never too hard, if you know you’re going home.",
"  A child’s wisdom is also wisdom."
 	]; 


 exports.getFortune = function(){
 	var idx = Math.floor(Math.random() * fortuneCookies.length);
 		return fortuneCookies[idx];
 };	
 


