import React, {useEffect,useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import { Accordion } from '@material-ui/core';

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  },[])

  useEffect(()=>{
    const scrolllistener = () => {
      if(window.scrollY > 90) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrolllistener)
    return () => {
    window.removeEventListener('scroll', scrolllistener)
    }
  }, [])

  return (
    <div className='page'>
    
      <Header black={blackHeader}/>
      {featuredData &&
      <FeaturedMovie item={featuredData}/>
      }
      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span role='img' aria-label='coração'>❤️</span> por Gustavo Henrique <br/>
        Direitos de imagem para Netflix <br/>
        Dados pegos do site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://i0.wp.com/66.media.tumblr.com/5bf8ba688ff3553b900a40dad2bbc1e0/tumblr_inline_p7qvpcxHIr1seki23_500.gif?resize=500%2C250&ssl=1'/>
        </div>
      }
    
    </div>
  );
}

export default App;