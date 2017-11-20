User {
	id,
	createdAt,
	id_role,
	name,
	nickname,
	photo
}


// Here’s what the same user would look like if they instead logged in with Facebook:

/*{
  "_id": "Ap85ac4r6Xe3paeAh",
  "createdAt": "2015-12-10T22:29:46.854Z",
  "services": {
    "facebook": {
      "accessToken": "XXX",
      "expiresAt": 1454970581716,
      "id": "XXX",
      "email": "ada@lovelace.com",
      "name": "Ada Lovelace",
      "first_name": "Ada",
      "last_name": "Lovelace",
      "link": "https://www.facebook.com/app_scoped_user_id/XXX/",
      "gender": "female",
      "locale": "en_US",
      "age_range": {
        "min": 21
      }
    },
    "resume": {
      "loginTokens": [
        {
          "when": "2015-12-10T22:29:46.858Z",
          "hashedToken": "XXX"
        }
      ]
    }
  },
  "profile": {
    "name": "Sashko Stubailo"
  }
}*/

Role {
	id,
	name
}

Poll {
	id,
	date /*(semaine)*/,
	choices : list of Choice,
	state /*(current or finished)*/,
	duration // (to add 24h if equal votes) 
}

// See how to link a user to a choice to see who vote for what
Choice {
	id,
	name,
	datetime,
	duration,
	place,
	user,
	votes : list of Vote
}

Vote {
	id,
	user
}

Event {
	id,
	name,
	datetime,
	duration,
	place,
	users : list of User,
	forum : forum
}

Forum {
	id,
	topics : list of Topic
}

Topic {
	id,
	name,
	posts : list of Post
}

Post {
	id,
	id_user,
	message,
	datetime
}