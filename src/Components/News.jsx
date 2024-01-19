import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'sports'


    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    // articles = [

    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "JON GAMBRELL",
    //         "title": "Houthi-fired missile strikes a US-owned vessel off Yemen in the Gulf of Aden, raising tensions - The Associated Press",
    //         "description": "Houthi rebels fired a missile, striking a U.S.-owned ship Monday just off the coast of Yemen in the Gulf of Aden. Monday's attack on the Gibraltar Eagle came less than a day after Yemen’s Houthi rebels fired an anti-ship cruise missile toward an American dest…",
    //         "url": "https://apnews.com/article/houthis-us-yemen-israel-palestinians-gaza-fa2aefc86ae002e73081e6ac1b772610",
    //         "urlToImage": "https://dims.apnews.com/dims4/default/c285235/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc1%2Fce%2F7a087417460666d88f28ecbefdad%2F177494bb9403449e936fd0e19a039a5d",
    //         "publishedAt": "${this.props.pageSize}24-01-15T15:34:00Z",
    //         "content": "JERUSALEM (AP) Houthi rebels fired a missile, striking a U.S.-owned ship Monday just off the coast of Yemen in the Gulf of Aden, less than a day after they launched an anti-ship cruise missile toward… [+6084 chars]"
    //     },

    //     {
    //         "source": {
    //             "id": "nbc-news",
    //             "name": "NBC News"
    //         },
    //         "author": "Yuliya Talmazan, Daryna Mayer, Associated Press",
    //         "title": "Ukraine says it shot down Russian command planes, a costly blow for Putin's air force - NBC News",
    //         "description": "Ukraine says it shot down a Russian spy plane and airborne command center over the Azov Sea, a significant blow to Vladimir Putin's military.",
    //         "url": "https://www.nbcnews.com/news/world/ukraine-shot-down-russian-command-spy-planes-blow-putin-air-force-rcna133918",
    //         "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1${this.props.pageSize}0-630,f_auto,q_auto:best/rockcms/${this.props.pageSize}24-01/240115-beriev-a50-mb-1035-cda468.jpg",
    //         "publishedAt": "${this.props.pageSize}24-01-15T14:47:42Z",
    //         "content": "Ukraine shot down a Russian spy plane and airborne command center, Kyivs military chief said Monday, in what would be a significant blow to the Kremlins forces.\r\nAfter reports of the incident had cir… [+5078 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "Emily Shapiro",
    //         "title": "4 killed, 1 injured in hot air balloon crash in Arizona, police say - ABC News",
    //         "description": "One person was pronounced dead at the scene, officials said.",
    //         "url": "https://abcnews.go.com/US/4-killed-hot-air-balloon-crash-arizona-police/story?id=106367752",
    //         "urlToImage": "https://s.abcnews.com/images/General/Breaking-News-banner-abc-ps-181024_hpMain_16x9_992.jpg?w=1600",
    //         "publishedAt": "${this.props.pageSize}24-01-15T14:11:56Z",
    //         "content": "Four people were killed and one person was critically injured when a hot air balloon crash-landed in the desert in Eloy, Arizona, on Sunday morning, the Eloy Police Department said.\r\nThe crash happen… [+890 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "DON'T YOU DARE BLAME DAK! 🗣️ - Rex Ryan on the Cowboys' playoff loss | Get Up - ESPN",
    //         "description": "DON'T YOU DARE BLAME DAK! 🗣️ - Rex Ryan on the Cowboys' playoff loss | Get UpRex Ryan, Domonique Foxworth and Dan Orlovsky react to the Dallas Cowboys' excr...",
    //         "url": "https://www.youtube.com/watch?v=W2rcspLNfWE",
    //         "urlToImage": "https://i.ytimg.com/vi/W2rcspLNfWE/maxresdefault.jpg",
    //         "publishedAt": "${this.props.pageSize}24-01-15T14:04:14Z",
    //         "content": null
    //     },

    //     {
    //         "source": {
    //             "id": null,
    //             "name": "SamMobile"
    //         },
    //         "author": "SamMobile, Mihai Matei",
    //         "title": "Virtual influencer Sam is coming to Unpacked to present the Galaxy S24 - SamMobile - Samsung news",
    //         "description": "Samsung's virtual influencer with pop star aspirations and a blog to fill, Sam, is coming to Galaxy Unpacked ${this.props.pageSize}24 on ...",
    //         "url": "https://www.sammobile.com/news/virtual-influencer-sam-coming-to-unpacked-to-present-galaxy-s24/",
    //         "urlToImage": "https://www.sammobile.com/wp-content/uploads/${this.props.pageSize}24/01/SAM_Galaxy-Unpacked-${this.props.pageSize}24_featured-7${this.props.pageSize}x434.png",
    //         "publishedAt": "${this.props.pageSize}24-01-15T13:01:00Z",
    //         "content": "Samsung's virtual influencer with pop star aspirations and a blog to fill, Sam, is coming to Galaxy Unpacked ${this.props.pageSize}24 on January 17 to talk about the new flagship phones and the new era of AI.\r\nSam is no… [+1732 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "AI to hit 40% of jobs and worsen inequality, IMF says - BBC.com",
    //         "description": "Policymakers should address the \"troubling trend\", says the organisation's managing director Kristalina Georgieva.",
    //         "url": "https://www.bbc.com/news/business-67977967",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BF86/production/_132303094_gettyimages-1450616449.jpg",
    //         "publishedAt": "${this.props.pageSize}24-01-15T12:35:00Z",
    //         "content": "By Annabelle LiangBusiness reporter\r\nArtificial intelligence is set to affect nearly 40% of all jobs, according to a new analysis by the International Monetary Fund (IMF).\r\nIMF's managing director Kr… [+3352 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MarketWatch"
    //         },
    //         "author": "Steve Goldstein",
    //         "title": "Baidu denies Chinese military link after report sent stock tumbling - MarketWatch",
    //         "description": "Baidu on Monday said it had no links to a Chinese military lab, after a report sent stock in the internet services company tumbling.",
    //         "url": "https://www.marketwatch.com/story/baidu-denies-chinese-military-link-after-report-sent-stock-tumbling-5a87bb41",
    //         "urlToImage": "https://images.mktw.net/im-845015/social",
    //         "publishedAt": "${this.props.pageSize}24-01-15T12:32:00Z",
    //         "content": "Baidu on Monday said it had no links to a Chinese military lab, after a report sent stock in the internet services company tumbling. U.S. shares of Baidu \r\n BIDU,\r\n -7.00%\r\nwere not trading on Monday… [+942 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MacRumors"
    //         },
    //         "author": "Tim Hardwick",
    //         "title": "Apple Vision Pro M2 Chip Said to Have 10 GPU, 8 CPU Cores - MacRumors",
    //         "description": "The Apple Vision Pro runs on an M2 chip equipped with ten GPU cores and eight CPU cores – the same version used in Apple's higher-end MacBook Air...",
    //         "url": "https://www.macrumors.com/${this.props.pageSize}24/01/15/vision-pro-m2-chip-10-gpu-8-cpu-cores/",
    //         "urlToImage": "https://images.macrumors.com/t/JSPwBrS9RzxLuGx0P44yMj2AN0E=/19${this.props.pageSize}x/article-new/${this.props.pageSize}23/11/apple-vision-pro-setup.jpg",
    //         "publishedAt": "${this.props.pageSize}24-01-15T12:28:28Z",
    //         "content": "The Apple Vision Pro runs on an M2 chip equipped with ten GPU cores and eight CPU cores the same version used in Apple's higher-end MacBook Air models. That's according to a post on X (formerly Twitt… [+1797 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Hanna Ziady",
    //         "title": "Europe’s biggest economy shrank last year. The outlook isn’t much better - CNN",
    //         "description": "Germany’s economy shrank last year for the first time since the onset of the Covid-19 pandemic, official data showed Monday, increasing the risk of an economic contraction in the wider euro area.",
    //         "url": "https://www.cnn.com/${this.props.pageSize}24/01/15/economy/germany-gdp-contraction/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240115090636-germany-gdp-file-1${this.props.pageSize}523.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "${this.props.pageSize}24-01-15T12:22:00Z",
    //         "content": "Germanys economy shrank last year for the first time since the onset of the Covid-19 pandemic, official data showed Monday, increasing the risk of an economic contraction in the wider euro area.\r\nGro… [+3708 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "politico",
    //             "name": "Politico"
    //         },
    //         "author": null,
    //         "title": "'Third place is not good': DeSantis supporters brace for Iowa vote - POLITICO",
    //         "description": "He went all-in on the early state. Will it be enough?",
    //         "url": "https://www.politico.com/news/${this.props.pageSize}24/01/15/ron-desantis-iowa-expectations-00135437",
    //         "urlToImage": "https://static.politico.com/d4/64/c9df4fed4dceb81936271b284e84/useuntil02-12-${this.props.pageSize}24-024.jpg",
    //         "publishedAt": "${this.props.pageSize}24-01-15T12:00:00Z",
    //         "content": "One DeSantis fundraiser, who was granted anonymity to relay private conversations, said they didnt see how DeSantis could pull it together.\r\nIt went wrong early and theyve corrected a lot late By the… [+2957 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Page Six"
    //         },
    //         "author": "Nika Shakhnazarova",
    //         "title": "Sofía Vergara opens up about public divorce from Joe Manganiello: 'You can't hide those things' - Page Six",
    //         "description": "Page Six revealed in July ${this.props.pageSize}23 that the “Griselda” actress, 51, and actor Joe Manganiello, 47, were parting ways after seven years of marriage.",
    //         "url": "https://pagesix.com/${this.props.pageSize}24/01/15/entertainment/sofia-vergara-opens-up-about-public-divorce-from-joe-manganiello-you-cant-hide-those-things/",
    //         "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/${this.props.pageSize}24/01/74930813.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "${this.props.pageSize}24-01-15T11:53:00Z",
    //         "content": "Going through a divorce is hard enough, but Sofía Vergara has detailed what it’s like to navigate through one in the public eye.\r\nPage Six revealed in July last year that the “Griselda” actress, 51, … [+2455 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Team ProductLine",
    //         "title": "Amazon Great Republic Day Sale ${this.props.pageSize}24: Up to 80% off on Home Décor - The Economic Times",
    //         "description": "If you are looking for the best offers and discounts on Home Decor and improvement products in the Amazon Great Republic Day Sale ${this.props.pageSize}24 and want to know the best deals available, you have come to the right page.",
    //         "url": "https://economictimes.indiatimes.com/top-trending-products/news/amazon-great-republic-day-sale-${this.props.pageSize}24-up-to-80-off-on-home-dcor/articleshow/106864697.cms",
    //         "urlToImage": "https://img.etimg.com/thumb/msid-106866909,width-1${this.props.pageSize}0,height-630,imgsize-30954,overlay-economictimes/photo.jpg",
    //         "publishedAt": "${this.props.pageSize}24-01-15T11:34:${this.props.pageSize}Z",
    //         "content": "The Amazon Great Republic Day Sale ${this.props.pageSize}24 is finally here, and shoppers are buzzing with excitement as they anticipate the best offers and deals from Amazon. This sale promises to bring incredible disc… [+5467 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Jenni Reid",
    //         "title": "World's five richest men have doubled their wealth since ${this.props.pageSize}${this.props.pageSize}, report finds - CNBC",
    //         "description": "\"The world will have its first trillionaire within a decade but poverty won't be eradicated for another 229 years,\" Oxfam said.",
    //         "url": "https://www.cnbc.com/${this.props.pageSize}24/01/15/worlds-five-richest-men-have-doubled-their-fortunes-since-${this.props.pageSize}${this.props.pageSize}-oxfam.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107358858-1705309517495-gettyimages-1243266925-edit_c2n08795.jpeg?v=1705309588&w=19${this.props.pageSize}&h=1080",
    //         "publishedAt": "${this.props.pageSize}24-01-15T11:30:12Z",
    //         "content": "The world's five richest men have more than doubled their vast wealth since ${this.props.pageSize}${this.props.pageSize}, according to an Oxfam report, as the charity calls for curbs on \"corporate power.\"\r\nThe report found that the combine… [+1885 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Forbes"
    //         },
    //         "author": "Devin Sean Martin",
    //         "title": "The Car Dealership Billionaire No One Knows - Forbes",
    //         "description": "Terry Taylor owns more than 1${this.props.pageSize} dealerships across the country but few know much about him: “He’s like Batman.”",
    //         "url": "https://www.forbes.com/sites/devinseanmartin/${this.props.pageSize}24/01/15/the-car-dealership-billionaire-no-one-knows/",
    //         "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65a1b495b87048daa4a1f1ee/0x0.jpg?format=jpg&crop=19${this.props.pageSize},1080,x0,y0,safe&height=900&width=1600&fit=bounds",
    //         "publishedAt": "${this.props.pageSize}24-01-15T11:30:00Z",
    //         "content": "On a sultry November afternoon in West Palm Beach, Florida, Terry Taylor picks up the phone in his waterfront office.\r\nI know youve contacted basically everybody I know, he says, in a grizzled southe… [+10697 chars]"
    //     },

    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "Marianne Guenot",
    //         "title": "The doomed US moon lander is on a collision course with Earth and will be destroyed to protect other satellites - Yahoo! Voices",
    //         "description": "Astrobotic's lander set off last week with hope of becoming the first US spacecraft to make it to the moon since the Apollo missions 51 years ago.",
    //         "url": "https://www.businessinsider.com/us-moon-lander-peregrine-burn-up-earth-atmosphere-satellite-astrobotic-${this.props.pageSize}24-1",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/NqT${this.props.pageSize}cRZLbWItzuzyMVd1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/business_insider_articles_888/e570c0908fc602be55db0ca553${this.props.pageSize}261b",
    //         "publishedAt": "${this.props.pageSize}24-01-15T11:03:26Z",
    //         "content": "<ul><li>Astrobotic will let its lander burn up in the Earth's atmosphere when it comes back to our planet.\r\n</li><li>The spacecraft's mission to the moon was scuppered shortly after launch due to a f… [+4451 chars]"
    //     }
    // ];
    constructor() {
        super();
        this.state = {
            // articles:this.articles,
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }

    }
    async updateNews() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parseData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
        this.props.setProgress(100)
    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=41c5060dc99a4e8a81c8dab044d81a62&page=1&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({
        //     articles: parseData.articles,
        //     totalResults: parseData.totalResults

        // })
        this.updateNews();
    }
    prevHandler = async () => {
        console.log('click')
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=41c5060dc99a4e8a81c8dab044d81a62&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({
        //     articles: parseData.articles,
        //     page: this.state.page - 1,
        //     loading:false
        // });
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }
    nextHandler = async () => {
        // if(!(this.state.page +1 > Math.ceil(this.state.totalResults / this.props.pageSize))){
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=41c5060dc99a4e8a81c8dab044d81a62&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true})
        //     let data = await fetch(url);
        //     let parseData = await data.json();

        //     this.setState({
        //         articles: parseData.articles,
        //         page: this.state.page + 1,
        //         loading:false
        //     });
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }
    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({page:this.state.page+1})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults:parseData.totalResults,
            loading: false
        });

      };
    render() {
        return (
            <>
                <h2 className='text-center' style={{marginTop:"70px"}}>Daily news Headlines for {this.props.category}</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 mt-2" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 15) : ""} description={element.description ? element.description.slice(0, 75) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.prevHandler} className="btn btn-dark">&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextHandler}>Next &rarr;</button>
                </div> */}

            </>
        )
    }
}

export default News
