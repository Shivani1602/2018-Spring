export class Game{
    MyQuotes: string[]= ["Great minds think alike, but...", "Axis of Evil", "There are two extrems"];
    Players: User[]=[];
    Picture: string= 'https://media1.s-nbcnews.com/j/newscms/2018_11/2363601/180315-trump-trudeau-mn-0935_a5976d24d45f4e633cdaa03deae66995.nbcnews-fp-320-280.jpg';
    PlayedQuotes: Quote[]=[];


}

export class User{
    Name: string;

}

export class Quote{
    Text: string;
    PlayerName:string;
    Chosen: boolean= false;
}