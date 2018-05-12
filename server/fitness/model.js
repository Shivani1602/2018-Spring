var axios = require("axios");

const QuotesStack =  [
        "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk. -Doug Larson",
        "If you make listening and observation your occupation, you will gain much more than you can by talk. -Robert Baden-Powell",
        "One of the most sincere forms of respect is actually listening to what another has to say. -Bryant H. McGill",
];

function Fitness() {
        this.Players = [];
        this.DealerId = null;
        this.GetQuotes = (playerId) => {
            if(this.Players.some(x=> x.PlayerId == playerId)){
                
            }else{
                this.Players.push({ PlayerId: playerId, Name: playerId });
            }
                return QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7);   
        }
        

}

module.exports = Game;