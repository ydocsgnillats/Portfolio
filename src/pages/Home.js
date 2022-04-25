import profile from '../assets/profile.jpeg'

function Home() {
      return (
        <div class="grid grid-cols-2 gap-2">
                <img className="h-2/3 ml-8 w-auto rounded-lg grid justify-center items-center" height="200" src={profile}/>
                <div className="grid -ml-48 mr-24">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div> 
        </div>
      );
  }

export default Home;