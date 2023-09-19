import { MovieDetailsContainer, MovieInfo } from "./styles"
import bannerImg from "../../assets/pngwing.com.png"
import { Star, ArrowUDownLeft } from "@phosphor-icons/react"

export function MovieDetails() {
  return (
    <MovieDetailsContainer>
      <img src={bannerImg} alt="" />
      <MovieInfo>
        <a href="/"><ArrowUDownLeft size={28} color="#ff6347" weight="fill" /> Home </a>
        <div className="header">
          <h1>Game of Thrones</h1>
          <div className="rating">
            <Star size={24} color="#f6ca2a" weight="fill" />
            <p>9.2/10</p>
          </div>
        </div>
        <div className="genres">
          <span>Action</span>
          <span>Adventure</span>
       </div>
        <p className="releaseDate">Released on 2011-04-17</p>
        <p className="summary">
          Stan burns down his home and takes a job as a carny with a traveling
          carnival. Stan is disturbed at how any man could sink to the level of
          performing as a geek. Clem explains that he seeks out alcoholic or
          drug-addicted men with troubled pasts, and lures them in with promises
          of a \"temporary\" job and opium-laced alcohol. He then uses their
          dependence until they sink into madness and depravity, thus creating a
          new geek. Stan also works with clairvoyant act \"Madame Zeena\" and
          her alcoholic husband, Pete. He and Zeena warn Stan not to ever use
          these skills otherwise people get hurt. Meanwhile Stan becomes
          attracted to fellow performer Molly and approaches her with an idea
          for a two-person act away from the carnival.
        </p>
      </MovieInfo>
    </MovieDetailsContainer>
  )
}
