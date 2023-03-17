import {sortByOrderFilms, filters, sortByScore, sortByOrderCharacters, filterGender, filterFilm} from '../src/data.js';

// --- TESTES PÁGINA - FILMES ---

const castle = { 
  title: "Castle in the Sky", 
  director: "Hayao Miyazaki", 
  people: [
    {name: "Pazu"}
  ]
}

const yesterday = {
  title: "Only Yesterday", 
  director: "Isao Takahata", 
  rt_score: 100,
  people: [
    {name: "Taeko Okajima"}
  ]
}

const earthsea = {
  title: "Tales from Earthsea", 
  director: "Gorō Miyazaki", 
  rt_score: 41,
  people: [
    {name: "Ged"}
  ]
}

const whisper = { 
  title: "Whisper of the Heart", 
  director: "Yoshifumi Kondō", 
  people: [
    {name: "Shizuku Tsukishima"} 
  ]
}

const testMovies = [castle, yesterday, earthsea, whisper]

// Testar se a const testMovies é um objeto 
describe('testMovies', () => {
  it('should be an object', () => {
    expect(typeof testMovies).toBe('object')
  })
});


// Testar se a sortByOrderFilms é uma função
describe('sort by order', () => {
  it('should be a function', () => {
    expect(typeof sortByOrderFilms).toBe('function')
  });

  // Testar a ordenação de A-Z 
  it('should sort by AZ', () => {
    const order = sortByOrderFilms(testMovies, 'az')
    expect(order[0].title).toEqual("Castle in the Sky")
  });

  // Testar a ordenação de Z-A 
  it('should sort by ZA', () => {
    const order = sortByOrderFilms(testMovies, 'za')
    expect(order[0].title).toEqual("Whisper of the Heart")
  });
});

// Testar se filters é uma função
describe('filter', () => {
  it('should be a function', () => {
    expect(typeof filters).toBe('function')
  });

  // Testar se a função filtra por diretor
  it('should filter by director', () => {
    expect(filters(testMovies, 'director', 'Hayao Miyazaki')).toStrictEqual([castle])
  })
})

// Testar se sortByScore é uma função
describe('sort by score', () => {
  it('should be a function', () => {
    expect(typeof sortByScore).toBe('function')
  });
  
  // Testar se a função filtra por mais avaliados
  it('should filter by highScore', () => {
    const assessment = sortByScore(testMovies, 'highScore')
    expect(assessment[0].rt_score).toEqual(yesterday.title.rt_score)
  });

  // Testar se a função filtra por menos avaliados
  it('should filter by lowScore', () => {
    const assessment = sortByScore(testMovies, 'lowScore')
    expect(assessment[0].rt_score).toEqual(earthsea.title.rt_score)
  });
});

// --- TESTES PÁGINA - PERSONAGENS ---

const charOne = {
  title: "Only Yesterday",
  people: [
    {name: "Aiko", gender: "Female"}
  ]
}

const charTwo = {
  title: "The Tale of the Princess Kaguya",
  people: [
    {name: "Ōna", gender: "Female"}
  ]
}

const charThree = {
  title: "Castle in the Sky",
  people: [
    {
      name: "Pazu", 
      gender: "Male"
    },
  ]
}

const charFour = {
  title: "My Neighbor Totoro",
  people: [
    {name: "Chu Totoro", gender: "NA"}
  ]
}

const testCharacters = [charOne, charTwo, charThree, charFour]

// Testar se a const testCharacters é um objeto 
describe('testCharacters', () => {
  it('should be an object', () => {
    expect(typeof testCharacters).toBe('object')
  })
});

// Testar se sortByOrderCharacters é uma função
describe('sort by order characters', () => {
  it('should be a function', () => {
    expect(typeof sortByOrderCharacters).toBe('function')
  });

  // Testar a ordenação de A-Z 
  it('should sort by AZ', () => {
    const order = sortByOrderCharacters(testCharacters, 'az')
    expect(order[0].people.name).toEqual(charOne.name)
  });

  // Testar a ordenação de Z-A 
  it('should sort by ZA', () => {
    const order = sortByOrderCharacters(testCharacters, 'za')
    expect(order[0].people.name).toEqual(charTwo.name)
  });
});

// Testar se filterGender é uma função
describe ('sort by filter gender', () =>{
  it('should be a function', () => {
    expect(typeof filterGender).toBe('function')
  });

  // Testar se a função filtra por gênero feminino
  it('should filter by gender Female', () => {
    const gender = filterGender(testCharacters, 'Female')
    expect(gender.people).toEqual(charTwo.gender)
  });

  // Testar se a função filtra por gênero masculino
  it('should filter by gender Male', () => {
    const gender = filterGender(testCharacters, 'Male')
    expect(gender.people).toEqual(charThree.gender)
  });

  // Testar se a função filtra por gênero indefinido
  it('should filter by gender NA', () => {
    const gender = filterGender(testCharacters, 'NA')
    expect(gender.people).toEqual(charFour.gender)
  });
})

// Testar se filterFilm é uma função
describe('sort by filter film ', () =>{
  it('should be a function', () =>{
    expect(typeof filterFilm).toBe('function')
  });

  // Testar se filtra os personagens por filme
  it('should filter characters by film', () => {
    const peopleFilm = filterFilm(testCharacters, 'Only Yesterday')
    expect(peopleFilm).toEqual(charOne)
  });
})