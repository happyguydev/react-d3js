import React from 'react';
import footer from './footers';
import worldmapjson from './worldmapjson';
import mapdatajson from './mapdatajson';
import default_usa_link from './default_usa_link';
import bardatajson from './bardatajson';
import country_centroids from './centroidsjson';
import TestMap from './TestMap';
import SmeBarGraph from './SmeBarGraph';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as d3 from 'd3';

const worldmap = worldmapjson;
const centroids = new Array();
//const centroids = country_centroids;
const mapdata = mapdatajson;
const bardata = bardatajson; //new Array();
const default_link = default_usa_link;

//console.log(default_link);
let div;
//const customers = new Array();    
class App extends React.Component {
	constructor(props) {



		super(props);
		//this.centroidjson(this);
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.state = {
			mapCountry: 'US',
			mapYear: 2013,
			barCountry: 'AR',
			barYear: 2014,
			countryFormal: 'United States',
			num_links: [248],
			centroid: [-93, 33],
			trade_links: default_link,
			trade_comps: [
				{ value: 6.2, label: 'Growth rate of SMEs using PayPal', color: '#ccc' },
				{ value: -9.9, label: 'Growth rate of total offline exports', color: '#ccc' },
				{ value: -9.1, label: 'Growth rate of PayPal mirror basket of offline exports', color: '#ccc' },
				{ value: 1, label: 'GDP growth rate (Latin America & Caribbean)', color: '#ccc' },
				{ value: 2.9, label: 'GDP growth rate (world)', color: '#009cec' },
			],
			width: 0,
			height: 0,
			mobile: false,
		};
		this.onMapSelect = this.onMapSelect.bind(this);
		this.onMapCountry = this.onMapCountry.bind(this);
		this.onMapYear = this.onMapYear.bind(this);
		this.onBarSelect = this.onBarSelect.bind(this);
		this.onBarCountry = this.onBarCountry.bind(this);
		this.onBarYear = this.onBarYear.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		// d3.csv("result.csv", function(data) {
		// 	bardata.push(data);
		// 	//console.log(data); 
		// });
		d3.csv("Book.csv", function (data) {
			centroids.push(data);

		});
		// mapdata.forEach(function (data) {
		// 	if (data.year == "2013") {
		// 		data.link_data.forEach(function (data) {
		// 			if (data.country == 'US') {
		// 				countryFormal = data.name;
		// 				num_links = data.links.length;
		// 				data.links.forEach(function (link) {
		// 					centroids.forEach(function (item) {
		// 						var coords = {};
		// 						if (item.country == link) {
		// 							coords.coordinates = [item.longitude, item.latitude];
		// 							trade_links.push(coords);
		// 						}
		// 					});
		// 				});
		// 			}
		// 		});
		// 	}
		// });
		//console.log(bardata);

	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		if (window.innerWidth < 767) {
			this.setState({ mobile: true })
		} else {
			this.setState({ mobile: false })
		};
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	play() {
		this.slider.slickPlay();
	}

	pause() {
		this.slider.slickPause();
	}

	onMapSelect(currentYear, currentMapCountry) {
		let center = [-93, 33];
		let trade_links = [];
		let num_links = 0;
		let countryFormal = '';
		let year = currentYear;
		let mapCountry = currentMapCountry;

		centroids.forEach(function (item) {

			if (item.country == mapCountry) {
				center = [item.longitude, item.latitude];
			}

		});

		mapdata.forEach(function (data) {
			if (data.year == year) {
				data.link_data.forEach(function (data) {
					if (data.country == mapCountry) {
						countryFormal = data.name;
						num_links = data.links.length;
						data.links.forEach(function (link) {
							centroids.forEach(function (item) {
								var coords = {};
								if (item.country == link) {
									coords.coordinates = [item.longitude, item.latitude];
									trade_links.push(coords);
								}
							});
						});
					}
				});
			}
		});

		this.setState({
			countryFormal: countryFormal,
			num_links: num_links,
			centroid: center,
			trade_links: trade_links,
		});
	};

	onMapYear(year) {
		this.setState({
			mapYear: year
		});
		this.onMapSelect(year, this.state.mapCountry);
	}
	onMapCountry = event => {
		this.setState({
			mapCountry: event.target.value,
		});
		this.onMapSelect(this.state.mapYear, event.target.value);
	}

	onBarSelect(currentYear, currentBarCountry) {
		let year = currentYear;
		let barCountry = currentBarCountry;
		let comps = [];

		bardata.forEach(function (data) {
			if (data.year == year) {

				data.comp_data.forEach(function (data) {
					//console.log("data is ",data);
					if (data.country == barCountry) {

						comps = data.comps;
					}
				});
			}

		});

		this.setState({
			trade_comps: comps,
		});
	};

	onBarYear(year) {
		this.setState({
			barYear: year
		});
		this.onBarSelect(year, this.state.barCountry);
	}
	onBarCountry = event => {
		this.setState({
			barCountry: event.target.value,
		});
		this.onBarSelect(this.state.barYear, event.target.value);
	}



	render() {
		const settings = {
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000
		};
		return (
			<div className="whole">
				<Router>
					<div className="page-sec">
						<section id="first_sec" className="sec_first" height={this.state.height}>
							<div className="wrapper" height={this.state.height * 0.9}>
								<header className="header-logo">
									<div className="container-fluid">
										<div className="row">
											<div className="col-xs-12 col-sm-12 logo">
												<img className="papl-logo" src="image/bitmap-paypl.png" /><span className="right-border"></span><img className="word-logo" src="image/bitmap.png" />
											</div>
										</div>
									</div>
								</header>
								<div className="container-fluid">
									<div className="row">
										<div className="col-sm-12 full_watch">
											<div className="watch_text">
												Watch how Merchants on <span className="paypal_text">Paypal</span> survive and thrive compared to offline merchants.
													</div>
										</div>
										<div className="blue-border"></div>
										<div className="col-sm-12 button_sec mHide">
											<div className="papal_buttn"><a href="">Download the full report</a></div>
										</div>

									</div>
								</div>
							</div>
							<div className="scrollNext" height={this.state.height * 0.1}>
								<div className="col-sm-12 scroll_begin" >
									<div className="scroll_text"><a className="scroll_text" href="#second_sec">Click to begin</a></div>
									<div className="swipe_text"><a href="#second_sec">Tap to begin</a></div>
									<div className="scroll_icon"><a href="#second_sec"><img src="image/scroll_one.png" /></a></div>
									<div className="black-border"></div>
								</div>
							</div>
						</section>
						<section id="second_sec" className="sec_second" height={this.state.height}>
							<div className="wrapper" height={this.state.height * 0.9}>
								<div className="row">
									<div className="col-xs-12 col-sm-12 col-md-6 cont_prt">
										<div className="count_img"><img src="image/count_two.png" /></div>
									</div>
									<div className="select_sprt">
										<div className="select_option">
											<span className="fancyArrow"></span>
											<select className="graph_cntry_slct" onChange={this.onBarCountry}>
												<option value="AR">Argentina</option>
												<option value="CO">Colombia</option>
												<option value="IN">India</option>
												<option value="KE">Kenya</option>
												<option value="SA">South Africa</option>
												<option value="VN">Vietnam</option>
											</select>
										</div>
									</div>
								</div>
								<div className="row bargraph">
									<div className="col-md-6 cont_textprt">
										<div className="container-fluid custum-fluid">
											<div className="row custom_row_margin">
												<div className="bar_text">
													Merchants on Paypal <span className="grow-text">grow considerably</span> more than national indexes and non Paypal merchants.
														</div>
												<div className="single_line"></div>
												<div className="lorem-text">
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
													<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 bar_prt">
										<div className="sme_bar_graph" height={this.state.height * 0.6}>
											<svg
												className="sme_svg"
												height={this.state.height * 0.5}
												width={this.state.mobile ? this.state.width * 0.9 : this.state.width * 0.4}>
												<SmeBarGraph
													selectedCountry={this.state.barCountry}
													width={this.state.mobile ? this.state.width * 0.9 : this.state.width * 0.4}
													height={this.state.height * 0.4}
													year={this.state.barYear}
													comps={this.state.trade_comps}
												/>
											</svg>
										</div>
									</div>
								</div>
								<div className="sme_mobile_text">
									<div className="col-sm-12">
										<div className="">
											{/* <img src={require('./image/carousel_btn.png')} /> */}
											<span className="merchant bar_text">In 2016, merchants on Paypal in Argentina grew by X%, greater than 8x over [other index]</span>
										</div>
										<div className="slider_whole_dot_bar">
											<a className="button frst_sld" value={2014} onClick={() => this.onBarYear(2014)}>
												<div className="sldr_dot"></div>
												<div className="sldr_line_map"></div>
												<div className="year_dot_map">2014</div>
											</a>
											<a className="button frst_sld" value={2015} onClick={() => this.onBarYear(2015)}>
												<div className="sldr_dot"></div>
												<div className="sldr_line_map"></div>
												<div className="year_dot_map">2015</div>
											</a>
											<a className="button frst_sld" value={2016} onClick={() => this.onBarYear(2016)}>
												<div className="sldr_dot"></div>
												<div className="sldr_line_map"></div>
												<div className="year_dot_map">2016</div>
											</a>
											<a className="button frst_sld" value={2017} onClick={() => this.onBarYear(2017)}>
												<div className="sldr_dot"></div>
												<div className="sldr_line_map sldr_line_last"></div>
												<div className="year_dot_map">2017</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="scrollNext" height={this.state.height * 0.1}>
								<div className="col-sm-12 scroll_cntnu">
									<div className="scroll_text">Tap to continue</div>
									<div className="scroll_icon"><a href="#third_sec"><img src="image/scroll_one.png" /></a></div>
								</div>
								<div className="col-sm-12 scroll_mobiles">
									<div className="scroll_icon"><a href="#third_sec"><img src="image/scroll_one.png" /></a></div>
									<div className="black-border"></div>
								</div>
							</div>
						</section>
						<section id="third_sec" className="sec_third" height={this.state.height}>
							<div className="wrapper" height={this.state.height * 0.9}>
								<div className="row map">
									<div className="col-md-5 cont_textprt map_text whitebg">
										<div className="container-fluid tcustum-fluid">
											<div className="row">
												<div className="cntbr_txt">
													<div className="cont_prt">
														<div className="scount_img"><img src="image/count_one.png" /></div>
													</div>
													<div className="bar_text">
														Cross border trade is <span className="grow-text">booming</span> for merchants who use Paypal.
															</div>
												</div>
												<div className="single_line mobile_line mHide"></div>
												<div className="lorem-text mHide">
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
													<p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
												</div>
											</div>
											<div className="map_notification mHide" style={{ backgroundImage: "url(image/notifi.png)" }}>
												<p className="map_note_text">{this.state.countryFormal} had {this.state.num_links} trade partners in 2015</p>
											</div>
											<div className="slider_whole_dot_map">
												<a className="button frst_sld" value={2013} onClick={() => this.onMapYear(2013)}>
													<div className="sldr_dot"></div>
													<div className="sldr_line_map"></div>
													<div className="year_dot_map">2013</div>
												</a>
												<a className="button frst_sld" value={2014} onClick={() => this.onMapYear(2014)}>
													<div className="sldr_dot"></div>
													<div className="sldr_line_map"></div>
													<div className="year_dot_map">2014</div>
												</a>
												<a className="button frst_sld" value={2015} onClick={() => this.onMapYear(2015)}>
													<div className="sldr_dot"></div>
													<div className="sldr_line_map"></div>
													<div className="year_dot_map">2015</div>
												</a>
												<a className="button frst_sld" value={2016} onClick={() => this.onMapYear(2016)}>
													<div className="sldr_dot"></div>
													<div className="sldr_line_map"></div>
													<div className="year_dot_map">2016</div>
												</a>
												<a className="button frst_sld" value={2017} onClick={() => this.onMapYear(2017)}>
													<div className="sldr_dot"></div>
													<div className="sldr_line_map sldr_line_last"></div>
													<div className="year_dot_map">2017</div>
												</a>
											</div>
										</div>
									</div>
									<div className="col-md-7 map_prt" >
										<div className="select_sprt">
											<div className="select_option">
												<span className="fancyArrow"></span>
												<select
													className="cntry_slct"
													onChange={this.onMapCountry}>
													<option value="US">United States</option>
													<option value="BE">Belgium</option>
													<option value="BG">Bulgaria</option>
													<option value="CZ">Czech Republic</option>
													<option value="DK">Denmark</option>
													<option value="DE">Germany</option>
													<option value="EE">Estonia</option>
													<option value="IE">Ireland</option>
													<option value="GR">Greece</option>
													<option value="GB">Great Britain</option>
													<option value="ES">Spain</option>
													<option value="FR">France</option>
													<option value="HR">Croatia</option>
													<option value="IT">Italy</option>
													<option value="CY">Cyprus</option>
													<option value="LV">Latvia</option>
													<option value="LT">Lithuania</option>
													<option value="LT">Luxembourg</option>
													<option value="HU">Hungaria</option>
													<option value="MT">Malta</option>
													<option value="NL">Netherlands</option>
													<option value="AT">Austria</option>
													<option value="PL">Poland</option>
													<option value="PT">Portugal</option>
													<option value="RO">Romania</option>
													<option value="SK">Slovakia</option>
													<option value="SI">Slovenia</option>
													<option value="FI">Finland</option>
													<option value="SE">Sweden</option>
													<option value="CA">Canada</option>
												</select>
											</div>
										</div>
										<div className="smap" height={this.state.height * 0.9}>
											<svg height={this.state.height * 0.9}>
												<TestMap
													geography={worldmap}
													selectedCountry={this.state.mapCountry}
													center={this.state.centroid}
													trade_links={this.state.trade_links}
													width={this.state.width * (7 / 12)}
													year={this.state.mapYear}
													height={this.state.height * 0.9}

												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="scrollNext" height={this.state.height * 0.1}>
								<div className="col-sm-12 scroll_cntnu">
									<div className="scroll_text">Download the Full Report</div>
									<div className="scroll_icon"><a href="#fourth_sec"><img src="image/scroll_one.png" /></a></div>
								</div>
								<div className="col-sm-12 scroll_mobiles">
									<div className="scroll_icon"><a href="#fourth_sec"><img src="image/scroll_one.png" /></a></div>
									<div className="black-border"></div>
								</div>
							</div>
						</section>
						<section id="fourth_sec" className="sec_fourth" height={this.state.height}>
							<Route exact path='/' component={footer} />
						</section>
					</div>
				</Router>
			</div>
		);
	}
}
export default App;