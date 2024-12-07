
import './App.css'

function App() {

    const data=[
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",ThumbName:'Bulbuli|Coke Studio Bangla Season One|Ritu Raj X Nandita',CName:'Coke Studio Bangla',views:'1.5M views 2 days ago'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",ThumbName:'Infinix Note 12: AMOLED Helio G88 SoC!',CName:'ATC Andriod ToTo Company',views:'1.5Mviews 2 days ago'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",ThumbName:'My first UX Design case study - This got me my first job.',CName:'Saptarshi Prakash',views:'4.8K views 1 years ago'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",ThumbName:'My Mix',CName:'Lopamudra Mitra, Anupam Roy, and more'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",ThumbName:'UX Design - What is it? (From AJ &Smart)',CName:'AJ&Smar',views:'150K views 3 years ago'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",ThumbName:'Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika',CName:'Mohon Sharif, Odd Signature, Shayan Chowdhury Armob, and more'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",ThumbName:'| 48 VISA-FREE',CName:'Nadir On The Go',views:'1.7M views 1 years ago'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",ThumbName:'14 Advanced Tips to Design FASTER in Figma',CName:'Mizko',views:'53K views 1 years ago'},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true"},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true"},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true"},
      {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true"}
    ]

  return (
    <>
      <div className='main'>
      <div className='Sidebar'>
      <div className="HomeFeatures">
        <div className="option">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" className='HomeImg'/></div>
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" className='Logo'/></div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Home</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Explores</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Shorts</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Subscription</div>
        </div>
      </div>

      <div className="VideosFeature">
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Library</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>History</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Your videos</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Watch later</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Liked videos</div>
        </div>
        
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Show more</div>
        </div>
      </div>

      <div className="SubscriptionsFeature">
        <div className="Home">
          <div className='SubscriptionText'>Subscriptions</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Nadir On The Go</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Coke Studio Bangla</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>MKBHD</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Figma</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>ATC Android To To c...</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>Alux.com</div>
        </div>
        <div className="Home">
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true" className='HomeImg'/></div>
          <div className='HomeText'>ATC Android To To c...</div>
        </div>
      </div>
  </div>

    <div className='Mainmenu'>
      <div className="navbar">
        <div className="searchbar">
          
          <div className='SearchText'>Search</div>
          <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" className='SearchImg'/></div>
          
          
        </div>
        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" className='MicImg' /></div>
        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" className='CreateImg' /></div>
        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" className='CreateImg' /></div>
        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" className='CreateImg' /></div>
        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true" className='CreateImg' /></div>

      </div>

      <div className="Suggestions">
        <div className='SuggText1'>All</div>
        <div className='SuggText'>Cook Studio</div>
        <div className='SuggText'>UX</div>
        <div className='SuggText'>Case Study</div>
        <div className='SuggText'>Music</div>
        <div className='SuggText'>Bnagla Lofi</div>
        <div className='SuggText'>Tour</div>
        <div className='SuggText'>Saintmartin</div>
        <div className='SuggText'>Tech</div>
        <div className='SuggText'>iphone 13</div>
        <div className='SuggText'>User Interface Design</div>
        <div className='SuggText'>Computer</div>
        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true" className='RightArrowImg'/></div>
      </div>

      <div className="Thumbnails">
        {data.map((i) => (
          <div key={i.id} className="Thumbnail">
          <div><img src={i.image} /></div>
          <div className='Title'>
            <div><img src={i.image2} /></div>
            <div>
            <div className='TitleText'><div className="ThumbName">{i.ThumbName}</div>
            <div className="Channel">
              <div className="CName">{i.CName}</div>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" className='verify'/></div>
            </div>
            <div className='views'>{i.views}</div>
            </div>
            </div>
            
          </div>
        </div>
        ))}
        
      </div>
    </div>
    </div>
    </>
  )
}

export default App
