import { gameModel } from "./app/shared/game.model";

export let GAMES = [
    {
      "name": "Horizon: Zero Dawn",
      "value": 0,
      "videoUrl":"u4-FCsiF5x4",
      "developer":"Guerrilla Games",
      "description":"The story is set in the 31st century, in a world where humans live in scattered tribal-like populations with limited access to technology. Their technologically advanced predecessors are remembered as the 'Old Ones'. Large robotic creatures, known as 'machines', dominate the Earth. For the most part, they peacefully coexist with humans, who occasionally hunt them for parts. However, a phenomenon known as the 'Derangement' has caused machines to become more aggressive towards humans, and larger and deadlier machines have begun to appear. There are four tribes that are prominently featured: the Nora, the Carja, the Banuk, and the Oseram. The Nora are fierce hunter-gatherers who live in the mountains and worship nature as the 'All-Mother'. The Carja are desert-dwelling city builders who worship the Sun. The Banuk consists of hunters and shamans who live in snowy mountains and adore the machines. The Oseram are tinkerers known for their metalworking, brewing, and arguing.",
      "url":"https://www.lacasadeel.net/wp-content/uploads/2021/04/Horizon-Zero-Dawn.jpg",
      "id": 1,
      "url2":"https://wallpapersmug.com/large/51a7c6/outdoor-landscape-horizon-zero-dawn.jpg"

    },
    {
      "name": "Uncharted 4: Thief´s End",
      "value": 0,
      "videoUrl":"hh5HV4iic1Y",
      "developer":"Naughty Dog",
      "description":"Several years before the events of the first game, Nate and Sam hunt for the treasure of pirate Henry Avery, who plundered a fortune during the 1695 Gunsway heist. Alongside Rafe, the Drake brothers infiltrate a Panamanian jail to access the former cell of Avery's first mate, where Nate discovers a hollow St. Dismas idol. When the prison warden who aided them demands a cut, Rafe impulsively kills him, triggering a frantic escape. Nate and Rafe successfully escape, but Sam is shot by guards, presumed dead.",
      "url":"https://i0.wp.com/metodologic.net/wp-content/uploads/2016/05/Uncharted_4_portada.jpg?fit=800%2C571&ssl=1",
      "id": 2,
      "url2":"https://i.ytimg.com/vi/l21i2GZ2vk4/maxresdefault.jpg",

    },
    {
      "name": "Gears 5",
      "value": 0,
      "videoUrl":"SEpWlFfpEkU",
      "developer":"The Coalition",
      "description":"JD, Del, and Marcus are officially reinstated in the COG Army alongside Kait. Reformed as the new Delta Squad, they travel to the ruins of Azura at Damon Baird's request in order to launch a Hammer of Dawn satellite and restore the Hammer of Dawn network. After doing this, they return to the COG capital, New Ephyra, where Baird informs them that he still cannot locate the other satellites. First Minister Jinn receives word that Settlement 2 is under attack by the Swarm and sends JD's squad to assist in the evacuation",
      "url":"https://static2.elcorreo.com/www/multimedia/201909/09/media/cortadas/gears-of-war-5-review-2-1280x720-kADG-U9090314662shC-1248x770@El%20Correo.jpg",
      "id": 3,
      "url2":"https://cdn.gearsofwar.com/gearsforums/original/2X/f/f24e79151d385e7120f791cd2da799bd18ae2065.jpg",
    },
    {
      "name": "Little Nightmares",
      "value": 0,
      "videoUrl":"aOadxZBsPiA",
      "developer":"Tarsier Studios",
      "description":"Six, a nine-year-old girl in a yellow raincoat, awakens from a dream of a woman wearing a kimono and a Noh mask. Armed with only a lighter, she sneaks through the bowels of the Maw, a massive, underwater iron vessel designed for much larger inhabitants. Throughout the Maw, she encounters several Nomes: small, skittish creatures that either flee from her or passively observe her efforts. ",
      "url":"https://i1.wp.com/enlinea.pe/wp-content/uploads/2021/05/Little-Nightmares-gratis.png?fit=1200%2C674&ssl=1",
      "url2":"https://images8.alphacoders.com/109/thumb-1920-1099422.jpg",
      "id": 4
    }
  ];

  export function addGame(game: gameModel){

        GAMES.push({
          name:game.name,
          value:0,
          videoUrl: game.videoUrl?  game.videoUrl.split('/watch?v=')[1] : '',
          developer:game.developer,
          description:game.description,
          url: game.url,
          id : game.id,
          url2:game.url2}
          );
  }

  export function addVotes(index: number, newValue: number){

    GAMES[index].value = newValue;

  }

  export function findGameTotalRank():number{

    let total = 0;
    for (let index = 0; index < GAMES.length; index++) {
      total = GAMES[index].value + total;
    }
    return total;

  }

  export function findGame(name:string):any{


    for (let index = 0; index < GAMES.length; index++) {

      if (GAMES[index].name.includes(name)) {
        return GAMES[index];
      }

    }

  }

    export function findById(id:number):any{
      for (let index = 0; index < GAMES.length; index++) {
        if (GAMES[index].id === id) {
          return GAMES[index];
        }
  
      }
  
    }


