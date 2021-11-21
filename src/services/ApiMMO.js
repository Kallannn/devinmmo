import axios from "axios";
const rapidapiUserKey = "d171cd4caemshb7fd5a8a47ca1dep16aa65jsne33932a8d7c4";

async function getGameListPage(numPerPage, page){
    let options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/games',
        headers: {
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
          'x-rapidapi-key': rapidapiUserKey
        }
      };

    let response = await axios.request(options)
    return response.data
}

async function getGameDetails(game){
  let options = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/game',
    params: {id: game},
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': 'd171cd4caemshb7fd5a8a47ca1dep16aa65jsne33932a8d7c4'
    }
  };
  
  let response = await axios.request(options)
  return response.data
}

async function getGameListSearch(numPerPage, page, searchkey){
  let options = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/games',
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': rapidapiUserKey
    }
  };

  let response = await axios.request(options)
  
  let searchFilter = (value) => {
    return (value.title.toLowerCase().includes(searchkey.toLowerCase()))
  }

  let filterResponse = response.data.filter(searchFilter)

  let from = (page - 1) * numPerPage;
  let to = page * numPerPage;
  let pageArray = filterResponse.slice(from, to)

  return pageArray
}

async function getNews(game){
  let options = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/latestnews',
    params: {id: game},
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': 'd171cd4caemshb7fd5a8a47ca1dep16aa65jsne33932a8d7c4'
    }
  };
  
  let response = await axios.request(options)
  return response.data
}

async function getNewsSearch(numPerPage, page, searchkey){
  let options = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/latestnews',
    headers: {
      'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      'x-rapidapi-key': rapidapiUserKey
    }
  };
  console.log('searching for: '+ searchkey)

  let response = await axios.request(options)
  
  let searchFilter = (value) => {
    return (value.title.toLowerCase().includes(searchkey.toLowerCase()))
  }

  let filterResponse = response.data.filter(searchFilter)

  let from = (page - 1) * numPerPage;
  let to = page * numPerPage;
  let pageArray = filterResponse.slice(from, to)

  return pageArray
}


export {
    getGameListPage as getGameListPage,
    getGameDetails as getGameDetails,
    getGameListSearch as getGameListSearch,
    getNews as getNews,
    getNewsSearch as getNewsSearch
};

