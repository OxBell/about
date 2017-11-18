User {
	id,
	id_role,
	name,
	nickname,
	photo
}

Role {
	id,
	name
}

Poll {
	id,
	date(semaine),
	choices : list of choice
}

// See how to link a user to a choice
Choice {
	id,
	name,
	datetime,
	duree,
	place,
	nb_votes
}

Event {
	id,
	name,
	datetime,
	duree,
	place,
	users : list of users,
	forum : forum
}

Forum {
	id,
	topics : list of topic
}

Topic {
	id,
	name,
	posts : list of post
}

Post {
	id,
	id_user,
	message,
	datetime
}