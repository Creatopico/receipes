FTBQuestsEvents.customReward(event => {
	if (event.getReward().hasTag('pvp_on')){
		event.player.tell("Вы вошли в ПВП зону!")
		event.server.runCommandSilent("/pvp " + event.player.getUsername() + " on")
	}
	
	if (event.getReward().hasTag('pvp_off')) {
		event.player.tell("Вы покинули ПВП зону!")
		event.server.runCommandSilent("/pvp " + event.player.getUsername() + " off")
	}
		
})