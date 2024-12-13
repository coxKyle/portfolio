/* TODO ?
  add resume link
    finish resume
  family advice
  upload to github pages (or similar)
  upwork?
*/

interface IPlackContainer {
  projectTitle?: string
  projectDescription?: string
  projectDescription2?: string
  linkImage?: string
  linkUrl?: string
}

interface INavbar {
  linkImage?: string
  linkResume?: string
  linkEmail?: string
}

interface ICarousel {
  carouselDisplay?: string
}

interface ICallToAction {
  callToActionDisplay?: string
}

interface IPage {
  title?: string
  subtitle?: string
  linkBackground?: string
  carouselDisplay?: string
  callToActionDisplay?: string
  sliderDisplay?: string
}

interface ISlider {
  wordList: string[]
}


function App() {
  return (
    <>
      <Navbar
        linkImage='./src/assets/me.jpg'
      ></Navbar>
      <Page
        title='Top Projects'
        subtitle='Scroll to explore'
        carouselDisplay='flex'
      ></Page>
      <Slider wordList={['CSS', 'HTML', 'Javascript', 'Python', 'Solidity', 'Typescript', 'VBA', 'C', 'Chadscript']}></Slider>
      <Slider wordList={['Devtools', 'Ethers', 'Excel', 'Git', 'Node', 'React', 'Webpack', 'Agile']}></Slider>
      <Slider wordList={['Algorithms', 'Automation', 'Calculus', 'Cryptocurrency', 'Economics', 'Physics', 'Simulations']}></Slider>
      <Slider wordList={['Adaptable', 'Curious', 'Determined', 'Leader', 'Self Taught', 'Quick Learner']}></Slider>
      
      <Page
        callToActionDisplay='grid'
      ></Page>
      <div id="bottom"></div>
    </>
  )
}

const Navbar:React.FC<INavbar> = (props) => {
  const handleScrollToBottom = () => {
    document.getElementById('bottom')?.scrollIntoView()
  }
  return (
    <>
      <div id='navbar'>
        <img src={props.linkImage}></img>
        <p id='name'>Kyle Cox</p>
        <a onClick={handleScrollToBottom}>Contact</a>
        <a target='_blank' href={props.linkResume}>Resume</a>
      </div>
    </>
  )
}

const Page:React.FC<IPage> = (props) => {
  return(
    <div id='backdrop' style={{backgroundImage: 'url(' + props.linkBackground + ')'}}>
        <h1 id='title'>{props.title}</h1>
        <p id='subtitle'>{props.subtitle}</p>
        <div style={{marginBottom: '128px'}}></div>
        <Carousel carouselDisplay={props.carouselDisplay}></Carousel>
        <CallToAction callToActionDisplay={props.callToActionDisplay}></CallToAction>
    </div>
  )
}

const CallToAction:React.FC<ICallToAction> = (props) => {
  return (
    <div id='callToAction' style={{display: props.callToActionDisplay}}>
      <h1>Contact Me</h1>
      <p>Let's innovate together</p>
      <div style={{display: 'grid'}}>
        <a target='_blank' href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=coxkyle022@gmail.com&tf=1' style={{gridColumn: '1'}}>
          <button>
            <img src="https://imgs.search.brave.com/jFmFDrCTPMA8z45brWdMcu02rHvnwxWsV5_KaxLCu0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL0dtYWlsX0xv/Z29fMTI4cHgucG5n"></img>
          </button>
        </a>
        <a target='_blank' href='mailto:coxkyle022@gmail.com?subject=Job Opportunity' style={{gridColumn: '2'}}>
          <button>
            <img src="https://imgs.search.brave.com/ENKTfK-e5YuESmuFqPcUluEGkHeq-nQWTOM8g7Io1Zw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2VtYWlsLWlj/b24tcG5nLWNvbW11/bmljYXRpb24tZW1h/aWwtMi1pY29uLWlt/YWdlLTEwNi01MTIu/cG5n"></img>
          </button>
        </a>
      </div>
    </div>
  )
}

const Carousel:React.FC<ICarousel> = (props) => {
  const plackLength = 490
  const startAutoScroll = (event:React.MouseEvent<HTMLDivElement>) => {
    if (event.clientX < window.innerWidth / 8) {
      //left
      event.currentTarget.parentElement?.scrollBy(-plackLength, 0)
    } else if (event.clientX > window.innerWidth / 8) {
      //right
      event.currentTarget.parentElement?.scrollBy(plackLength, 0)
    }
  }
  return (
    <>
      <div id='carousel' style={{display: props.carouselDisplay}}>
        <div className='boundary' style={{left: 0}} onMouseOver={startAutoScroll}></div>
        <div className='boundary' style={{right: 0}} onMouseOver={startAutoScroll}></div>
        <PlackContainer
          projectTitle='Cryptocurrency'
          projectDescription='A token designed to give full rights and control to investors.'
          projectDescription2='These decentralized applications are designed to generate revenue, share with other decentralized companies, and maintain long term investors.'
          linkImage='https://toolbeltcrypto.github.io/beta/image/avatar.png' 
          linkUrl='https://toolbeltcrypto.github.io/beta/' 
        ></PlackContainer>
        <PlackContainer 
          projectTitle='Flash Loan'
          projectDescription='Automatically activates an arbitrage crypto trade.'
          projectDescription2='Risk-free money is borrowed and repayed in the same transaction. By specifying unique trading pairs, customers can collect passive income'
          linkImage='src/assets/slasherPreview.png'
          linkUrl='https://github.com/coxKyle/arbitrage_slasher'
        ></PlackContainer>
        <PlackContainer 
          projectTitle='Marketplace'
          projectDescription='Automatically messages marketplace profiles to find deals.'
          projectDescription2='By remaining in browser, facebook detects a human user allowing for competitive advantage.'
          linkImage='src/assets/previewFacebookMarket.png'
          linkUrl='https://github.com/coxKyle/private'
        ></PlackContainer>
        <PlackContainer 
          projectTitle='Arbitrage Finder'
          projectDescription='Notifies customers when an arbitrage opportunity appears.'
          projectDescription2="Specific to one token's ecosystem, these arbitrages are unseen by all of the general use bots."
          linkImage='src/assets/previewTelegramArbitrageStats.jpg' 
          linkUrl='https://github.com/coxKyle/telegram_bots/blob/main/everrise_arbitrage.py' 
        ></PlackContainer>
        <PlackContainer 
          projectTitle='Telegram Stats'
          projectDescription='Alerts subscribers of otherwise hidden statistics.'
          projectDescription2="This example shows token rewards based on staking."
          linkImage='src/assets/previewTelegramStakeStats.jpg' 
          linkUrl='https://github.com/coxKyle/telegram_bots/blob/main/everrise_stats.py' 
        ></PlackContainer>
        <PlackContainer 
          projectTitle='Service Escrow'
          projectDescription='Sell or purchase goods or services without centralization risk.'
          projectDescription2='With a blockchain backend, data is transparent, secure, and incorruptable.'
          linkImage='src/assets/servicePreview.png' 
          linkUrl='https://github.com/coxKyle/escrow_service' 
        ></PlackContainer>
        <PlackContainer 
          projectTitle='ERC1155 Escrow'
          projectDescription='Trade NFTs without trusting a 3rd party.'
          linkImage='src/assets/previewERC1155.png' 
          linkUrl='https://escrow-erc1155.netlify.app/' 
        ></PlackContainer>
      </div>
    </>
  )
}


const PlackContainer:React.FC<IPlackContainer> = (props) => {
  return (
    <a id='plackContainer' target='_blank' href={props.linkUrl}>
      <img src={props.linkImage}></img>
      <h1>{props.projectTitle}</h1>
      <p>{props.projectDescription}</p>
      <p>{props.projectDescription2}</p>
    </a>
  )
}

const Slider:React.FC<ISlider> = (props) => {
  let sliderLength = props.wordList.length
  return (
    <div id="slider">
      {props.wordList.map((word, i) => <p key={i} style={{'--sliderOrder': i.toString(), '--sliderLength': sliderLength} as React.CSSProperties}>{word}</p>)}
    </div>
  )
}

export default App
