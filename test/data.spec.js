import {sortByOrderFilms, filters, sortByScore} from '../src/data.js';

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

// testar se a const testMovies é um objeto 
describe('testMovies', () => {
  it('should be an object', () => {
    expect(typeof testMovies).toBe('object')
  })
});

// --- TESTES PÁGINA - FILMES ---

// Testar se a função sortByOrder é uma função
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

// Testar se a função filters é uma função
describe('filter', () => {
  it('should be a function', () => {
    expect(typeof filters).toBe('function')
  });

  // Testar se a função filtra por diretor
  it('should filter by director', () => {
    expect(filters(testMovies, 'director', 'Hayao Miyazaki')).toStrictEqual([castle])
  })
})

// Testar se a função sortByScore é uma função
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

