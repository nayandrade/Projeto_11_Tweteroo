import express from 'express';
import cors from 'cors';

const twiterooServer = express();
twiterooServer.use(cors());
twiterooServer.use(express.json());

const users = [
    {
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
];

const tweets = [
    {
	username: "bobesponja",
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	tweet: "eu amo o hub"
	}
];

twiterooServer.post('/sign-up', (request, response) => {    
    users.push(request.body);
    response.send(`OK!!! User ${request.body.username} created!`);
})

twiterooServer.get('/tweets', (request, response) => {
    const lastTweets = [...tweets];
    response.send(lastTweets.reverse().slice(0, 10));
})

twiterooServer.post('/tweets', (request, response) => {
    const userTweet = {};
    userTweet.username = request.body.username;
    userTweet.avatar = users.find(user => user.username === request.body.username).avatar;
    userTweet.tweet = request.body.tweet;
    tweets.push(userTweet);
    response.send(`OK!!! Tweet ${request.body.tweet} created!`);	
})

twiterooServer.listen(5000);