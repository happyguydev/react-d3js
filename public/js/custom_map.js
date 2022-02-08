$(function () {
    var data_link = {
                "india_states": {
                    "links": {
                        'IN_BE': {
                            factor: 0.2
                            , between: ['IN', 'BE']
                            , attrs: {
                                "stroke-width": 3
                            }
                            , tooltip: {content: "up - Mumbai"}
                        }
                        
                             
                    }
                },
                "usa_states": {
                    "links": {
                       'ustocanada': {
                            // The curve can be inverted by setting a negative factor
                            factor: -0.5
                            , between: ['US', 'CA']
                            , attrs: {
                                "stroke-width": 5,
                                "stroke-linecap": "ovel",
                            }
                            , tooltip: {content: "Paris - San - Francisco"}
                        }
                        , 'us_pr': {
                            factor: -0.8
                            , between: ['US', 'PR']
                            , attrs: {
                                "stroke-width": 4
                            }
                            , tooltip: {content: "Paris - Brasilia"}
                        }
                        , 'us_mx': {
                            factor: 0.2
                            , between: ['US', 'MX']
                            , attrs: {
                                "stroke-width": 5
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }
                        , 'us_TH': {
                            factor: 0.2
                            , between: ['US', 'TH']
                            , attrs: {
                                "stroke-width": 4
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                        , 'us_AU': {
                            factor: 0.2
                            , between: ['US', 'AU']
                            , attrs: {
                                "stroke-width": 5
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                        , 'us_DE': {
                            factor: 0.2
                            , between: ['US', 'DE']
                            , attrs: {
                                "stroke-width": 5
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                        , 'us_GB': {
                            factor: 0.2
                            , between: ['US', 'GB']
                            , attrs: {
                                "stroke-width": 5
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                        , 'us_ID': {
                            factor: 0.2
                            , between: ['US', 'ID']
                            , attrs: {
                                "stroke-width": 4
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                         , 'us_IE': {
                            factor: 0.2
                            , between: ['US', 'IE']
                            , attrs: {
                                "stroke-width": 4
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                         , 'us_NO': {
                            factor: 0.2
                            , between: ['US', 'NO']
                            , attrs: {
                                "stroke-width": 4
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                        , 'us_BR': {
                            factor: 0.2
                            , between: ['US', 'BR']
                            , attrs: {
                                "stroke-width": 4
                            }
                            , tooltip: {content: "Roma - Miami"}
                        }  
                    }
                },
                "belgium_states": {
                    "links": {
                        
                        
                    }
                },
                "bulgaria_states": {
                    "links": {
                        
                        
                    }
                },
                "Czech_republic_states": {
                    "links": {
                        
                        
                    }
                },
                "denmark_states": {
                    "links": {
                        
                        
                    }
                },
                "germany_states": {
                    "links": {
                        
                        
                    }
                },
                "estonia_states": {
                    "links": {
                        
                        
                    }
                },
                "ireland_states": {
                    "links": {
                        
                        
                    }
                },
                "greece_states": {
                    "links": {
                        
                        
                    }
                },
                "great_Britain_states": {
                    "links": {
                        
                        
                    }
                },
                "spain_states": {
                    "links": {
                        
                        
                    }
                },
                "france_states": {
                    "links": {
                        
                        
                    }
                },
                "croatia_states": {
                    "links": {
                        
                        
                    }
                },
                "italy_states": {
                    "links": {
                        
                        
                    }
                },
                "cyprus_states": {
                    "links": {
                        
                        
                    }
                },
                "latvia_states": {
                    "links": {
                        
                        
                    }
                },
                "lithuania_states": {
                    "links": {
                        
                        
                    }
                },
                "luxembourg_states": {
                    "links": {
                        
                        
                    }
                },
                "hungaria_states": {
                    "links": {
                        
                        
                    }
                },
                "malta_states": {
                    "plots": {
                        
                        
                    }
                },
                "netherlands_states": {
                    "links": {
                        
                        
                    }
                },
                "austria_states": {
                    "links": {
                        
                        
                    }
                },
                "poland_states": {
                    "links": {
                        
                        
                    }
                },

                "portugal_states": {
                    "links": {
                        
                        
                    }
                },
                "romania_states": {
                    "links": {
                        
                        
                    }
                },
                "slovakia_states": {
                    "links": {
                        
                        
                    }
                },
                "slovenia_states": {
                    "links": {
                        
                        
                    }
                },
                "finland_states": {
                    "links": {
                        
                        
                    }
                },
                "sweden_states": {
                    "links": {
                        
                        
                    }
                },
                "canada_states": {
                    "links": {
                        
                        
                    }
                },


            };
    
    var data_plot = {
                "india_states": {
                    "plots": {
                        'IN': {
                            latitude: 20.593684,
                            longitude: 78.96288,
                            size: 0,
                            text: {content: 'IN'}
                        }, 
                        'BE': {
                            latitude: 50.503887,
                            longitude: 4.469936,
                            size: 0,
                            text: {content: 'BE'}
                        }
                        
                    }
                },
                "usa_states": {
                    "plots": {
                              'US': {
                            latitude: 36.778259,
                            longitude: -119.417931,
                            size: 0,
                            text: {content: 'USA'}
                        },
                        'CA': {
                            latitude: 55.585901,
                            longitude: -105.750596,
                            size: 0,
                            text: {content: 'CA'},
                            tooltip: {content: "CA"}
                        },
                        'PR': {
                            latitude: 18.220833,
                            longitude: -66.590149,
                            size: 0,
                            text: {content: 'PR'},
                            tooltip: {content: "PR"}
                        },
                        'MX': {
                            latitude: 23.634501,
                            longitude: -102.552784,
                            size: 0,
                            text: {content: 'MX'},
                            tooltip: {content: "MX"}
                        },
                        'TH': {
                            latitude: 15.870032,
                            longitude: 100.992541,
                            size: 0,
                            text: {content: 'TH'},
                            tooltip: {content: "TH"}
                        },
                        'AU': {
                            latitude: -25.274398,
                            longitude: -25.274398,
                            size: 0,
                            text: {content: 'AU'},
                            tooltip: {content: "AU"}
                        },
                        'DE': {
                            latitude: 51.165691,
                            longitude: 10.451526,
                            size: 0,
                            text: {content: 'DE'},
                            tooltip: {content: "DE"}
                        },
                        'GB': {
                            latitude: 55.378051,
                            longitude: -3.435973,
                            size: 0,
                            text: {content: 'GB'},
                            tooltip: {content: "GB"}
                        },
                        'ID': {
                            latitude: -0.789275,
                            longitude: 113.921327,
                            size: 0,
                            text: {content: 'ID'},
                            tooltip: {content: "ID"}
                        },
                        'IE': {
                            latitude: 53.41291,
                            longitude: -8.24389,
                            size: 0,
                            text: {content: 'IE'},
                            tooltip: {content: "IE"}
                        },
                        'NO': {
                            latitude: 60.472024,
                            longitude: 8.468946,
                            size: 0,
                            text: {content: 'NO'},
                            tooltip: {content: "NO"}
                        },
                        'BR': {
                            latitude: -14.235004,
                            longitude: -51.92528,
                            size: 0,
                            text: {content: 'BR'},
                            tooltip: {content: "BR"}
                        },
						'NZ': {
                            latitude: -40.900557,
                            longitude: 174.885971,
                            size: 0,
                            tooltip: {content: "NZ"}
                        },
						'SG': {
                            latitude: 1.352083,
                            longitude: 103.819836,
                            size: 0,
                            tooltip: {content: "SG"}
                        },
						'SE': {
                            latitude: 60.128161,
                            longitude: 18.643501,
                            size: 0,
                            tooltip: {content: "SE"}
                        },
						'FR': {
                            latitude: 46.227638,
                            longitude: 2.213749,
                            size: 0,
                            tooltip: {content: "FR"}
                        },
						'JP': {
                            latitude: 36.204824,
                            longitude: 138.252924,
                            size: 0,
                            tooltip: {content: "JP"}
                        },
						'AT': {
                            latitude: 47.516231,
                            longitude: 14.550072,
                            size: 0,
                            tooltip: {content: "AT"}
                        },
						'CH': {
                            latitude: 46.818188,
                            longitude: 8.227512,
                            size: 0,
                            tooltip: {content: "CH"}
                        },
						'DK': {
                            latitude: 56.26392,
                            longitude: 9.501785,
                            size: 0,
                            tooltip: {content: "DK"}
                        },
						'HR': {
                            latitude: 45.1,
                            longitude: 15.2,
                            size: 0,
                            tooltip: {content: "HR"}
                        },
						'SI': {
                            latitude: 46.151241,
                            longitude: 14.995463,
                            size: 0,
                            tooltip: {content: "SI"}
                        },
						'MY': {
                            latitude: 4.210484,
                            longitude: 101.975766,
                            size: 0,
                            tooltip: {content: "MY"}
                        },
						'SA': {
                            latitude: 23.885942,
                            longitude: 45.079162,
                            size: 0,
                            tooltip: {content: "SA"}
                        },
						'AE': {
                            latitude: 23.424076,
                            longitude: 53.847818,
                            size: 0,
                            tooltip: {content: "AE"}
                        },
						'BG': {
                            latitude: 42.733883,
                            longitude: 25.48583,
                            size: 0,
                            tooltip: {content: "BG"}
                        },
						'FI': {
                            latitude: 61.92411,
                            longitude: 25.748151,
                            size: 0,
                            tooltip: {content: "FI"}
                        },
						'HU': {
                            latitude: 47.162494,
                            longitude: 19.503304,
                            size: 0,
                            tooltip: {content: "HU"}
                        },
						'IL': {
                            latitude: 31.046051,
                            longitude: 34.851612,
                            size: 0,
                            tooltip: {content: "IL"}
                        },
						'IN': {
                            latitude: 20.593684,
                            longitude: 78.96288,
                            size: 0,
                            tooltip: {content: "IN"}
                        },
						'MT': {
                            latitude: 35.937496,
                            longitude: 14.375416,
                            size: 0,
                            tooltip: {content: "MT"}
                        },
						'NL': {
                            latitude: 52.132633,
                            longitude: 5.291266,
                            size: 0,
                            tooltip: {content: "NL"}
                        },
						'PL': {
                            latitude: 51.919438,
                            longitude: 19.145136,
                            size: 0,
                            tooltip: {content: "PL"}
                        },
						'SK': {
                            latitude: 48.669026	,
                            longitude: 19.699024,
                            size: 0,
                            tooltip: {content: "SK"}
                        },
						'BE': {
                            latitude: 50.503887	,
                            longitude: 4.469936	,
                            size: 0,
                            tooltip: {content: "BE"}
                        },
						'BW': {
                            latitude: -22.328474,
                            longitude: 24.684866,
                            size: 0,
                            tooltip: {content: "BW"}
                        },
						'CN': {
                            latitude: 35.86166,
                            longitude: 104.195397,
                            size: 0,
                            tooltip: {content: "CN"}
                        },
						'CY': {
                            latitude: 35.126413,
                            longitude: 33.429859,
                            size: 0,
                            tooltip: {content: "CY"}
                        },
						'CZ': {
                            latitude: 49.817492,
                            longitude: 15.472962,
                            size: 0,
                            tooltip: {content: "CZ"}
                        },
						'DO': {
                            latitude: 18.735693,
                            longitude: -70.162651,
                            size: 0,
                            tooltip: {content: "DO"}
                        },
						'EE': {
                            latitude: 58.595272,
                            longitude: 25.013607,
                            size: 0,
                            tooltip: {content: "EE"}
                        },
						'EG': {
                            latitude: 26.820553,
                            longitude: 30.802498,
                            size: 0,
                            tooltip: {content: "EG"}
                        },
						'ES': {
                            latitude: 40.463667	,
                            longitude: -3.74922,
                            size: 0,
                            tooltip: {content: "30.802498"}
                        },
						'GI': {
                            latitude: 36.137741,
                            longitude: -5.345374,
                            size: 0,
                            tooltip: {content: "GI"}
                        },
						'GR': {
                            latitude: 39.074208,
                            longitude: 21.824312,
                            size: 0,
                            tooltip: {content: "GR"}
                        },
						'GT': {
                            latitude: 15.783471	,
                            longitude: -90.230759,
                            size: 0,
                            tooltip: {content: "GT"}
                        },
						'HK': {
                            latitude: 22.396428,
                            longitude: 114.109497,
                            size: 0,
                            tooltip: {content: "HK"}
                        },
						'IT': {
                            latitude: 41.87194,
                            longitude: 12.56738,
                            size: 0,
                            tooltip: {content: "IT"}
                        },
                        'JO': {
                            latitude: 30.585164,
                            longitude: 36.238414,
                            size: 0,
                            tooltip: {content: "JO"}
                        },
						'LT': {
                            latitude: 55.169438,
                            longitude: 23.881275,
                            size: 0,
                            tooltip: {content: "LT"}
                        },
						'PH': {
                            latitude: 12.879721	,
                            longitude: 121.774017,
                            size: 0,
                            tooltip: {content: "PH"}
                        },
						'PT': {
                            latitude: 39.399872,
                            longitude: -8.224454,
                            size: 0,
                            tooltip: {content: "PT"}
                        },
						'RU': {
                            latitude: 61.52401,
                            longitude: 105.318756,
                            size: 0,
                            tooltip: {content: "RU"}
                        },
						'SV': {
                            latitude: 13.794185,
                            longitude: -88.89653,
                            size: 0,
                            tooltip: {content: "SV"}
                        },
						'SZ': {
                            latitude: -26.522503,
                            longitude: 31.465866,
                            size: 0,
                            tooltip: {content: "SZ"}
                        },
						'TW': {
                            latitude: 23.69781,
                            longitude: 120.960515,
                            size: 0,
                            tooltip: {content: "TW"}
                        },
						'UA': {
                            latitude: 48.379433,
                            longitude: 31.16558,
                            size: 0,
                            tooltip: {content: "UA"}
                        },
						'ZA': {
                            latitude: -30.559482,
                            longitude: 22.937506,
                            size: 0,
                            tooltip: {content: "ZA"}
                        },
						'CR': {
                            latitude: 9.748917,
                            longitude: -83.753428,
                            size: 0,
                            tooltip: {content: "CR"}
                        },
						'KZ': {
                            latitude: 48.019573,
                            longitude: 66.923684,
                            size: 0,
                            tooltip: {content: "KZ"}
                        },
						'LU': {
                            latitude: 49.815273,
                            longitude: 6.129583,
                            size: 0,
                            tooltip: {content: "LU"}
                        },
						'MO': {
                            latitude: 22.198745,
                            longitude: 113.543873,
                            size: 0,
                            tooltip: {content: "MO"}
                        },
						'RO': {
                            latitude: 45.943161,
                            longitude: 24.96676,
                            size: 0,
                            tooltip: {content: "RO"}
                        },
						'PG': {
                            latitude: -6.314993,
                            longitude: 143.95555,
                            size: 0,
                            tooltip: {content: "PG"}
                        },
						'LC': {
                            latitude: 13.909444,
                            longitude: -60.978893,
                            size: 0,
                            tooltip: {content: "LC"}
                        },
						'AN': {
                            latitude: 12.226079,
                            longitude: -69.060087,
                            size: 0,
                            tooltip: {content: "AN"}
                        },
						'CL': {
                            latitude: -35.675147,
                            longitude: -71.542969,
                            size: 0,
                            tooltip: {content: "CL"}
                        },
						'GD': {
                            latitude: 12.262776,
                            longitude: -61.604171,
                            size: 0,
                            tooltip: {content: "GD"}
                        },
						'GY': {
                            latitude: 4.860416,
                            longitude: -58.93018,
                            size: 0,
                            tooltip: {content: "GY"}
                        },
						'IS': {
                            latitude: 64.963051,
                            longitude: -19.020835,
                            size: 0,
                            tooltip: {content: "IS"}
                        },
						'JM': {
                            latitude: 18.109581,
                            longitude: -77.297508,
                            size: 0,
                            tooltip: {content: "JM"}
                        },
						'MD': {
                            latitude: 47.411631,
                            longitude: 28.369885,
                            size: 0,
                            tooltip: {content: "MD"}
                        },
						'MN': {
                            latitude: 46.862496,
                            longitude: 103.846656,
                            size: 0,
                            tooltip: {content: "MN"}
                        },
						'NC': {
                            latitude: -20.904305,
                            longitude: 165.618042,
                            size: 0,
                            tooltip: {content: "NC"}
                        },
						'PF': {
                            latitude: -17.679742,
                            longitude: -149.406843,
                            size: 0,
                            tooltip: {content: "PF"}
                        },
						'VC': {
                            latitude: 12.984305,
                            longitude: -61.287228,
                            size: 0,
                            tooltip: {content: "VC"}
                        },
						'VE': {
                            latitude: 6.42375,
                            longitude: -66.58973,
                            size: 0,
                            tooltip: {content: "VE"}
                        },
						'CI': {
                            latitude: 7.539989,
                            longitude: -5.54708,
                            size: 0,
                            tooltip: {content: "CI"}
                        },
						'PA': {
                            latitude: 8.537981,
                            longitude: -80.782127,
                            size: 0,
                            tooltip: {content: "PA"}
                        },
						'BO': {
                            latitude: -16.290154,
                            longitude: -63.588653,
                            size: 0,
                            tooltip: {content: "BO"}
                        },
						'PY': {
                            latitude: -23.442503,
                            longitude: -58.443832,
                            size: 0,
                            tooltip: {content: "PY"}
                        },
						'AL': {
                            latitude: 41.153332,
                            longitude: 20.168331,
                            size: 0,
                            tooltip: {content: "AL"}
                        },
						'EC': {
                            latitude: -1.831239,
                            longitude: -78.183406,
                            size: 0,
                            tooltip: {content: "EC"}
                        },
						'HN': {
                            latitude: 15.199999,
                            longitude: -86.241905,
                            size: 0,
                            tooltip: {content: "HN"}
                        },
						'LK': {
                            latitude: 7.873054,
                            longitude: 80.771797,
                            size: 0,
                            tooltip: {content: "LK"}
                        },
						'TN': {
                            latitude: 33.886917,
                            longitude: 9.537499,
                            size: 0,
                            tooltip: {content: "TN"}
                        },
						'KR': {
                            latitude: 35.907757,
                            longitude: 127.766922,
                            size: 0,
                            tooltip: {content: "KR"}
                        },
						'TR': {
                            latitude: 38.963745,
                            longitude: 35.243322,
                            size: 0,
                            tooltip: {content: "TR"}
                        },
						'AR': {
                            latitude: -38.416097,
                            longitude: -63.616672,
                            size: 0,
                            tooltip: {content: "AR"}
                        },
						'AW': {
                            latitude: 12.52111,
                            longitude: -69.968338,
                            size: 0,
                            tooltip: {content: "AW"}
                        },
						'BM': {
                            latitude: 32.321384,
                            longitude: -64.75737,
                            size: 0,
                            tooltip: {content: "BM"}
                        },
						'CO': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            tooltip: {content: "CO"}
                        },
						'KY': {
                            latitude: 19.513469,
                            longitude: -80.566956,
                            size: 0,
                            tooltip: {content: "KY"}
                        },
						'OM': {
                            latitude: 21.512583,
                            longitude: 55.923255,
                            size: 0,
                            tooltip: {content: "OM"}
                        },
						'PE': {
                            latitude: -9.189967,
                            longitude: -75.015152,
                            size: 0,
                            tooltip: {content: "PE"}
                        },
						'TT': {
                            latitude: 10.691803,
                            longitude: -61.222503,
                            size: 0,
                            tooltip: {content: "TT"}
                        },
						'VI': {
                            latitude: 18.335765,
                            longitude: -64.896335,
                            size: 0,
                            tooltip: {content: "VI"}
                        },
						'NG': {
                            latitude: 9.081999,
                            longitude: 8.675277,
                            size: 0,
                            tooltip: {content: "NG"}
                        },
						'AF': {
                            latitude: 33.93911,
                            longitude: 67.709953,
                            size: 0,
                            tooltip: {content: "AF"}
                        },
						'GP': {
                            latitude: 16.995971,
                            longitude: -62.067641,
                            size: 0,
                            tooltip: {content: "GP"}
                        },
						'KW': {
                            latitude: 29.31166,
                            longitude: 47.481766,
                            size: 0,
                            tooltip: {content: "KW"}
                        },
						'MA': {
                            latitude: 31.791702,
                            longitude: -7.09262,
                            size: 0,
                            tooltip: {content: "MA"}
                        },
						'LB': {
                            latitude: 33.854721,
                            longitude: 35.862285,
                            size: 0,
                            tooltip: {content: "LB"}
                        },
						'UY': {
                            latitude: -32.522779,
                            longitude: -55.765835,
                            size: 0,
                            tooltip: {content: "UY"}
                        },
						'AD': {
                            latitude: 42.546245,
                            longitude: 1.601554,
                            size: 0,
                            tooltip: {content: "AD"}
                        },
						'HT': {
                            latitude: 18.971187,
                            longitude: -72.285215,
                            size: 0,
                            tooltip: {content: "HT"}
                        },
						'KE': {
                            latitude: -0.023559,
                            longitude: 37.906193,
                            size: 0,
                            tooltip: {content: "KE"}
                        },
						'AZ': {
                            latitude: 40.143105,
                            longitude: 47.576927,
                            size: 0,
                            tooltip: {content: "AZ"}
                        },
						'BA': {
                            latitude: 43.915886,
                            longitude: 17.679076,
                            size: 0,
                            tooltip: {content: "BA"}
                        },
						'BY': {
                            latitude: 53.709807,
                            longitude: 27.953389,
                            size: 0,
                            tooltip: {content: "BY"}
                        },
						'CG': {
                            latitude: -0.228021,
                            longitude: 15.827659,
                            size: 0,
                            tooltip: {content: "CG"}
                        },
						'CV': {
                            latitude: 16.002082,
                            longitude: -24.013197,
                            size: 0,
                            tooltip: {content: "CV"}
                        },
						'MW': {
                            latitude: -13.254308,
                            longitude: 34.301525,
                            size: 0,
                            tooltip: {content: "MW"}
                        },
						'NI': {
                            latitude: 12.865416,
                            longitude: -85.207229,
                            size: 0,
                            tooltip: {content: "NI"}
                        },
						'RS': {
                            latitude: 44.016521,
                            longitude: 21.005859,
                            size: 0,
                            tooltip: {content: "RS"}
                        },
						'BH': {
                            latitude: 25.930414,
                            longitude: 50.637772,
                            size: 0,
                            tooltip: {content: "BH"}
                        },
						'KN': {
                            latitude: 17.357822,
                            longitude: -62.782998,
                            size: 0,
                            tooltip: {content: "KN"}
                        },
						'BN': {
                            latitude: 4.535277,
                            longitude: 114.727669,
                            size: 0,
                            tooltip: {content: "BN"}
                        },
						'AM': {
                            latitude: 40.069099,
                            longitude: 45.038189,
                            size: 0,
                            tooltip: {content: "AM"}
                        },
						'BB': {
                            latitude: 13.193887,
                            longitude: -59.543198,
                            size: 0,
                            tooltip: {content: "BB"}
                        },
						'BS': {
                            latitude: 25.03428,
                            longitude: -77.39628,
                            size: 0,
                            tooltip: {content: "BS"}
                        },
						'BZ': {
                            latitude: 17.189877,
                            longitude: -88.49765,
                            size: 0,
                            tooltip: {content: "BZ"}
                        },
						'CD': {
                            latitude: -4.038333,
                            longitude: 21.758664,
                            size: 0,
                            tooltip: {content: "CD"}
                        },
						'CM': {
                            latitude: 7.369722,
                            longitude: 12.354722,
                            size: 0,
                            tooltip: {content: "CM"}
                        },
						'DJ': {
                            latitude: 11.825138,
                            longitude: 42.590275,
                            size: 0,
                            tooltip: {content: "DJ"}
                        },
						'DM': {
                            latitude: 15.414999,
                            longitude: -61.370976,
                            size: 0,
                            tooltip: {content: "DM"}
                        },
						'DZ': {
                            latitude: 28.033886,
                            longitude: 1.659626,
                            size: 0,
                            tooltip: {content: "DZ"}
                        },
						'ET': {
                            latitude: 9.145,
                            longitude: 40.489673,
                            size: 0,
                            tooltip: {content: "ET"}
                        },
						'GE': {
                            latitude: 42.315407,
                            longitude: 43.356892,
                            size: 0,
                            tooltip: {content: "GE"}
                        },
						'GN': {
                            latitude: 9.945587,
                            longitude: -9.696645,
                            size: 0,
                            tooltip: {content: "GN"}
                        },
						'KG': {
                            latitude: 41.20438,
                            longitude: 74.766098,
                            size: 0,
                            tooltip: {content: "KG"}
                        },
						'KH': {
                            latitude: 12.565679,
                            longitude: 104.990963,
                            size: 0,
                            tooltip: {content: "KH"}
                        },
						'LA': {
                            latitude: 19.85627,
                            longitude: 102.495496,
                            size: 0,
                            tooltip: {content: "LA"}
                        },
						'LV': {
                            latitude: 56.879635,
                            longitude: 24.603189,
                            size: 0,
                            tooltip: {content: "LV"}
                        },
						'MG': {
                            latitude: -18.766947,
                            longitude: 46.869107,
                            size: 0,
                            tooltip: {content: "MG"}
                        },
						'MK': {
                            latitude: 41.608635,
                            longitude: 21.745275,
                            size: 0,
                            tooltip: {content: "MK"}
                        },
						'MU': {
                            latitude: -20.348404,
                            longitude: 57.552152,
                            size: 0,
                            tooltip: {content: "MU"}
                        },
						'MV': {
                            latitude: 3.202778,
                            longitude: 73.22068,
                            size: 0,
                            tooltip: {content: "MV"}
                        },
						'MZ': {
                            latitude: -18.665695,
                            longitude: 35.529562,
                            size: 0,
                            tooltip: {content: "MZ"}
                        },
						'NE': {
                            latitude: 17.607789,
                            longitude: 8.081666,
                            size: 0,
                            tooltip: {content: "NE"}
                        },
						'QA': {
                            latitude: 25.354826,
                            longitude: 51.183884,
                            size: 0,
                            tooltip: {content: "QA"}
                        },
						'RE': {
                            latitude: -21.115141,
                            longitude: 55.536384,
                            size: 0,
                            tooltip: {content: "RE"}
                        },
						'RW': {
                            latitude: -1.940278,
                            longitude: 29.873888,
                            size: 0,
                            tooltip: {content: "RW"}
                        },
						'SC': {
                            latitude: -4.679574,
                            longitude: 55.491977,
                            size: 0,
                            tooltip: {content: "SC"}
                        },
						'SM': {
                            latitude: 43.94236,
                            longitude: 12.457777,
                            size: 0,
                            tooltip: {content: "SM"}
                        },
						'SN': {
                            latitude: 14.497401,
                            longitude: -14.452362,
                            size: 0,
                            tooltip: {content: "SN"}
                        },
						'SO': {
                            latitude: 5.152149,
                            longitude: 46.199616,
                            size: 0,
                            tooltip: {content: "SO"}
                        },
						'TC': {
                            latitude: 21.694025,
                            longitude: -71.797928,
                            size: 0,
                            tooltip: {content: "TC"}
                        },
						'TZ': {
                            latitude: -6.369028,
                            longitude: 34.888822,
                            size: 0,
                            tooltip: {content: "TZ"}
                        },
						'UG': {
                            latitude: 1.373333,
                            longitude: 32.290275,
                            size: 0,
                            tooltip: {content: "UG"}
                        },
						'VN': {
                            latitude: 14.058324,
                            longitude: 108.277199,
                            size: 0,
                            tooltip: {content: "VN"}
                        },
						'YE': {
                            latitude: 15.552727,
                            longitude: 48.516388,
                            size: 0,
                            tooltip: {content: "YE"}
                        },
						'ZM': {
                            latitude: -13.133897,
                            longitude: 27.849332,
                            size: 0,
                            tooltip: {content: "ZM"}
                        },
						'ZW': {
                            latitude: -19.015438,
                            longitude: 29.154857,
                            size: 0,
                            tooltip: {content: "ZW"}
                        },
						'AS': {
                            latitude: -14.270972,
                            longitude: -170.132217,
                            size: 0,
                            tooltip: {content: "AS"}
                        },
						'AO': {
                            latitude: -11.202692,
                            longitude: 17.873887,
                            size: 0,
                            tooltip: {content: "AO"}
                        },
						'TD': {
                            latitude: 15.454166,
                            longitude: 18.732207,
                            size: 0,
                            tooltip: {content: "TD"}
                        },
						'PK': {
                            latitude: 30.375321,
                            longitude: 69.345116,
                            size: 0,
                            tooltip: {content: "PK"}
                        },
						'NA': {
                            latitude: -22.95764,
                            longitude: 18.49041,
                            size: 0,
                            tooltip: {content: "NA"}
                        },
						'SR': {
                            latitude: 3.919305,
                            longitude: -56.027783,
                            size: 0,
                            tooltip: {content: "SR"}
                        },
						'AG': {
                            latitude: 17.060816,
                            longitude: -61.796428,
                            size: 0,
                            tooltip: {content: "AG"}
                        },
						'AI': {
                            latitude: 18.220554,
                            longitude: -63.068615,
                            size: 0,
                            tooltip: {content: "AI"}
                        },
						'FO': {
                            latitude: 61.892635,
                            longitude: -6.911806,
                            size: 0,
                            tooltip: {content: "FO"}
                        },
						'GH': {
                            latitude: 7.946527,
                            longitude: -1.023194,
                            size: 0,
                            tooltip: {content: "GH"}
                        },
						'IM': {
                            latitude: 54.236107,
                            longitude: -4.548056,
                            size: 0,
                            tooltip: {content: "IM"}
                        },
						'MP': {
                            latitude: 17.33083,
                            longitude: 145.38469,
                            size: 0,
                            tooltip: {content: "MP"}
                        },
						'TG': {
                            latitude: 8.619543,
                            longitude: 0.824782,
                            size: 0,
                            tooltip: {content: "TG"}
                        },
						'BD': {
                            latitude: 23.684994,
                            longitude: 90.356331,
                            size: 0,
                            tooltip: {content: "BD"}
                        },
						'FJ': {
                            latitude: -16.578193,
                            longitude: 179.414413,
                            size: 0,
                            tooltip: {content: "FJ"}
                        },
						'GU': {
                            latitude: 13.444304,
                            longitude: 144.793731,
                            size: 0,
                            tooltip: {content: "GU"}
                        },
						'MH': {
                            latitude: 7.131474,
                            longitude: 171.184478,
                            size: 0,
                            tooltip: {content: "MH"}
                        },
						'TM': {
                            latitude: 38.969719,
                            longitude: 59.556278,
                            size: 0,
                            tooltip: {content: "TM"}
                        },
						'VG': {
                            latitude: 18.420695,
                            longitude: -64.639968,
                            size: 0,
                            tooltip: {content: "VG"}
                        },
						'LI': {
                            latitude: 47.166,
                            longitude: 9.555373,
                            size: 0,
                            tooltip: {content: "LI"}
                        },
						'PM': {
                            latitude: 46.941936,
                            longitude: -56.27111,
                            size: 0,
                            tooltip: {content: "PM"}
                        },
						'VU': {
                            latitude: -15.376706,
                            longitude: 166.959158,
                            size: 0,
                            tooltip: {content: "VU"}
                        },
						'GL': {
                            latitude: 71.706936,
                            longitude: -42.604303,
                            size: 0,
                            tooltip: {content: "GL"}
                        },
						'JE': {
                            latitude: 49.214439,
                            longitude: -2.13125,
                            size: 0,
                            tooltip: {content: "JE"}
                        },
						'MS': {
                            latitude: 16.742498,
                            longitude: -62.187366,
                            size: 0,
                            tooltip: {content: "MS"}
                        },
						'MQ': {
                            latitude: 14.641528,
                            longitude: -61.024174,
                            size: 0,
                            tooltip: {content: "MQ"}
                        },
						'BF': {
                            latitude: 12.238333,
                            longitude: -1.561593,
                            size: 0,
                            tooltip: {content: "BF"}
                        },
						'WS': {
                            latitude: -13.759029,
                            longitude: -172.104629,
                            size: 0,
                            tooltip: {content: "WS"}
                        },
						'BJ': {
                            latitude: 9.30769,
                            longitude: 2.315834,
                            size: 0,
                            tooltip: {content: "BJ"}
                        },
						'MC': {
                            latitude: 43.750298,
                            longitude: 7.412841,
                            size: 0,
                            tooltip: {content: "MC"}
                        },
						'NF': {
                            latitude: -29.040835,
                            longitude: 167.954712,
                            size: 0,
                            tooltip: {content: "NF"}
                        },
						'GM': {
                            latitude: 13.443182,
                            longitude: -15.310139,
                            size: 0,
                            tooltip: {content: "GM"}
                        },
						'ME': {
                            latitude: 42.708678,
                            longitude: 19.37439,
                            size: 0,
                            tooltip: {content: "ME"}
                        },
						'BI': {
                            latitude: -3.373056,
                            longitude: 29.918886,
                            size: 0,
                            tooltip: {content: "BI"}
                        },
						'GF': {
                            latitude: 3.933889,
                            longitude: -53.125782,
                            size: 0,
                            tooltip: {content: "GF"}
                        },
						'PW': {
                            latitude: 7.51498,
                            longitude: 134.58252,
                            size: 0,
                            tooltip: {content: "PW"}
                        },
						'FK': {
                            latitude: -51.796253,
                            longitude: -59.523613,
                            size: 0,
                            tooltip: {content: "FK"}
                        },
						'VA': {
                            latitude: 41.902916,
                            longitude: 12.453389,
                            size: 0,
                            tooltip: {content: "VA"}
                        },
						'WF': {
                            latitude: -13.768752,
                            longitude: -177.156097,
                            size: 0,
                            tooltip: {content: "WF"}
                        },
						'MM': {
                            latitude: 21.913965,
                            longitude: 95.956223,
                            size: 0,
                            tooltip: {content: "MM"}
                        },
						'NP': {
                            latitude: 28.394857,
                            longitude: 84.124008,
                            size: 0,
                            tooltip: {content: "NP"}
                        },
						'TJ': {
                            latitude: 38.861034,
                            longitude: 71.276093,
                            size: 0,
                            tooltip: {content: "TJ"}
                        },
						'GA': {
                            latitude: -0.803689,
                            longitude: 11.609444,
                            size: 0,
                            tooltip: {content: "GA"}
                        },
						'SB': {
                            latitude: -9.64571,
                            longitude: 160.156194,
                            size: 0,
                            tooltip: {content: "SB"}
                        },
						'TO': {
                            latitude: -21.178986,
                            longitude: -175.198242,
                            size: 0,
                            tooltip: {content: "TO"}
                        },
						'SL': {
                            latitude: 8.460555,
                            longitude: -11.779889,
                            size: 0,
                            tooltip: {content: "SL"}
                        },
						'SJ': {
                            latitude: 77.553604,
                            longitude: 23.670272,
                            size: 0,
                            tooltip: {content: "SJ"}
                        },
						'PS': {
                            latitude: 31.952162,
                            longitude: 35.233154,
                            size: 0,
                            tooltip: {content: "PS"}
                        },
						'GG': {
                            latitude: 49.465691,
                            longitude: -2.585278,
                            size: 0,
                            tooltip: {content: "GG"}
                        },
						'NU': {
                            latitude: -19.054445,
                            longitude: -169.867233,
                            size: 0,
                            tooltip: {content: "NU"}
                        },
						'UZ': {
                            latitude: 41.377491,
                            longitude: 64.585262,
                            size: 0,
                            tooltip: {content: "UZ"}
                        },
						'KP': {
                            latitude: 40.339852,
                            longitude: 127.510093,
                            size: 0,
                            tooltip: {content: "KP"}
                        },
						'FM': {
                            latitude: 7.425554,
                            longitude: 150.550812,
                            size: 0,
                            tooltip: {content: "FM"}
                        },
						'NR': {
                            latitude: -0.522778,
                            longitude: 166.931503,
                            size: 0,
                            tooltip: {content: "NR"}
                        },
						'IQ': {
                            latitude: 33.223191,
                            longitude: 43.679291,
                            size: 0,
                            tooltip: {content: "IQ"}
                        },
						'ER': {
                            latitude: 15.179384,
                            longitude: 39.782334,
                            size: 0,
                            tooltip: {content: "ER"}
                        },
						'ML': {
                            latitude: 17.570692,
                            longitude: -3.996166,
                            size: 0,
                            tooltip: {content: "ML"}
                        },
						'CK': {
                            latitude: -21.236736,
                            longitude: -159.777671,
                            size: 0,
                            tooltip: {content: "CK"}
                        },
						'KM': {
                            latitude: -11.875001,
                            longitude: 43.872219,
                            size: 0,
                            tooltip: {content: "EM"}
                        },
						'LS': {
                            latitude: 	-29.609988,
                            longitude: 28.233608,
                            size: 0,
                            tooltip: {content: "LS"}
                        },
						'IR': {
                            latitude: 32.427908,
                            longitude: 53.688046,
                            size: 0,
                            tooltip: {content: "IR"}
                        },
						'YT': {
                            latitude: -12.8275,
                            longitude: 45.166244,
                            size: 0,
                            tooltip: {content: "YT"}
                        },
						'AQ': {
                            latitude: -75.250973,
                            longitude: -0.071389,
                            size: 0,
                            tooltip: {content: "AQ"}
                        },
						'GQ': {
                            latitude: 1.650801,
                            longitude: 10.267895,
                            size: 0,
                            tooltip: {content: "GQ"}
                        },
						'TV': {
                            latitude: -7.109535,
                            longitude: 177.64933,
                            size: 0,
                            tooltip: {content: "TV"}
                        },
						'GW': {
                            latitude: 11.803749,
                            longitude: -15.180413,
                            size: 0,
                            tooltip: {content: "GW"}
                        },
						'LR': {
                            latitude: 6.428055,
                            longitude: -9.429499,
                            size: 0,
                            tooltip: {content: "LR"}
                        },
						'MR': {
                            latitude: 21.00789,
                            longitude: -10.940835,
                            size: 0,
                            tooltip: {content: "MR"}
                        },
						'PN': {
                            latitude: -24.703615,
                            longitude: -127.439308,
                            size: 0,
                            tooltip: {content: "PN"}
                        },
						'TF': {
                            latitude: -49.280366,
                            longitude: 69.348557,
                            size: 0,
                            tooltip: {content: "TF"}
                        },
						'CU': {
                            latitude: 21.521757,
                            longitude: -77.781167,
                            size: 0,
                            tooltip: {content: "CU"}
                        },
						'BT': {
                            latitude: 27.514162,
                            longitude: 90.433601,
                            size: 0,
                            tooltip: {content: "BT"}
                        },
						'SH': {
                            latitude: -24.143474,
                            longitude: -10.030696,
                            size: 0,
                            tooltip: {content: "SH"}
                        },
						'ST': {
                            latitude: 0.18636,
                            longitude: 6.613081,
                            size: 0,
                            tooltip: {content: "ST"}
                        },
						'KI': {
                            latitude: -3.370417,
                            longitude: -168.734039,
                            size: 0,
                            tooltip: {content: "KI"}
                        },
						'LY': {
                            latitude: 26.3351,
                            longitude: 17.228331,
                            size: 0,
                            tooltip: {content: "LY"}
                        },
						'GS': {
                            latitude: -54.429579,
                            longitude: -36.587909,
                            size: 0,
                            tooltip: {content: "GS"}
                        },
						'SY': {
                            latitude: 34.802075,
                            longitude: 38.996815,
                            size: 0,
                            tooltip: {content: "SY"}
                        },
						'CC': {
                            latitude: -12.164165,
                            longitude: 96.870956,
                            size: 0,
                            tooltip: {content: "CC"}
                        },
						'SD': {
                            latitude: 12.862807,
                            longitude: 30.217636,
                            size: 0,
                            tooltip: {content: "SD"}
                        },
						'EH': {
                            latitude: 24.215527,
                            longitude: -12.885834,
                            size: 0,
                            tooltip: {content: "EH"}
                        },
						'CX': {
                            latitude: -10.447525,
                            longitude: 105.690449,
                            size: 0,
                            tooltip: {content: "CX"}
                        },
						'IO': {
                            latitude: -6.343194,
                            longitude: 71.876519,
                            size: 0,
                            tooltip: {content: "IO"}
                        },
						'TK': {
                            latitude: -8.967363,
                            longitude: -171.855881,
                            size: 0,
                            tooltip: {content: "TK"}
                        },
						'CF': {
                            latitude: 6.611111,
                            longitude: 20.939444,
                            size: 0,
                            tooltip: {content: "CF"}
                        },
						'TL': {
                            latitude: -8.874217,
                            longitude: 125.727539,
                            size: 0,
                            tooltip: {content: "TL"}
                        },
						'HM': {
                            latitude: -53.08181,
                            longitude: 73.504158,
                            size: 0,
                            tooltip: {content: "HM"}
                        },
						'BV': {
                            latitude: -54.423199,
                            longitude: 3.413194,
                            size: 0,
                            tooltip: {content: "BV"}
                        }
						
                        
                    }
                },
                "belgium_states": {
                    "plots": {
                          'AR': {
                            latitude: -38.416097,
                            longitude: -63.616672,
                            size: 0,
                            text: {content: 'AR'}
                        }, 
                        'BE': {
                            latitude: 50.503887,
                            longitude: 4.469936,
                            size: 0,
                            text: {content: 'BE'}
                        }, 
                        'AT': {
                            latitude: 47.516231,
                            longitude: 14.550072,
                            size: 0,
                            text: {content: 'AT'}
                        }, 
                        'AU': {
                            latitude: -25.274398,
                            longitude: 133.775136,
                            size: 0,
                            text: {content: 'AU'}
                        }, 
                        'CA': {
                            latitude: 56.130366,
                            longitude: -106.346771,
                            size: 0,
                            text: {content: 'CA'}
                        }, 
                        'CH': {
                            latitude: 46.818188,
                            longitude: 8.227512,
                            size: 0,
                            text: {content: 'CH'}
                        }, 
                        'CO': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'CO'}
                        }, 
                        'CZ': {
                            latitude: 49.817492,
                            longitude: 15.472962,
                            size: 0,
                            text: {content: 'CZ'}
                        }, 
                        'DE': {
                            latitude: 51.165691,
                            longitude: 10.451526,
                            size: 0,
                            text: {content: 'DE'}
                        }, 
                        'DK': {
                           latitude: 56.26392,
                            longitude: 9.501785,
                            size: 0,
                            tooltip: {content: "DK"}
                        }, 
                        'ES': {
                            latitude: 40.463667	,
                            longitude: -3.74922,
                            size: 0,
                            tooltip: {content: "ES"}
                        }, 
                        'FI': {
                            latitude: 61.92411,
                            longitude: 25.748151,
                            size: 0,
                            tooltip: {content: "FI"}
                        }, 
                        'FR': {
                            latitude: 46.227638,
                            longitude: 2.213749,
                            size: 0,
                            tooltip: {content: "FR"}
                        }, 
                        'GB': {
                            latitude: 55.378051,
                            longitude: -3.435973,
                            size: 0,
                            text: {content: 'GB'},
                            tooltip: {content: "GB"}
                        }, 
                        'HR': {
                            latitude: 45.1,
                            longitude: 15.2,
                            size: 0,
                            tooltip: {content: "HR"}
                        }, 
                        'ID': {
                            latitude: -0.789275,
                            longitude: 113.921327,
                            size: 0,
                            text: {content: 'ID'},
                            tooltip: {content: "ID"}
                        }, 
                        'IL': {
                            latitude: 31.046051,
                            longitude: 34.851612,
                            size: 0,
                            tooltip: {content: "IL"}
                        }, 
                        'IN': {
                            latitude: 20.593684,
                            longitude: 78.96288,
                            size: 0,
                            tooltip: {content: "IN"}
                        }, 
                        'IS': {
                            latitude: 64.963051,
                            longitude: -19.020835,
                            size: 0,
                            tooltip: {content: "IS"}
                        }, 
                        'IT': {
                            latitude: 41.87194,
                            longitude: 12.56738,
                            size: 0,
                            tooltip: {content: "IT"}
                        }, 
                        'JP': {
                            latitude: 36.204824,
                            longitude: 138.252924,
                            size: 0,
                            tooltip: {content: "JP"}
                        }, 
                        'LU': {
                            latitude: 49.815273,
                            longitude: 6.129583,
                            size: 0,
                            tooltip: {content: "LU"}
                        }, 
                        'NL': {
                            latitude: 52.132633,
                            longitude: 5.291266,
                            size: 0,
                            tooltip: {content: "NL"}
                        }, 
                        'NO': {
                            latitude: 60.472024,
                            longitude: 8.468946,
                            size: 0,
                            text: {content: 'NO'},
                            tooltip: {content: "NO"}
                        }, 
                        'NZ': {
                            latitude: -40.900557,
                            longitude: 174.885971,
                            size: 0,
                            tooltip: {content: "NZ"}
                        }, 
                        'PL': {
                            latitude: 51.919438,
                            longitude: 19.145136,
                            size: 0,
                            tooltip: {content: "PL"}
                        }, 
                        'SE': {
                            latitude: 60.128161,
                            longitude: 18.643501,
                            size: 0,
                            tooltip: {content: "SE"}
                        }, 
                        'SI': {
                            latitude: 46.151241,
                            longitude: 14.995463,
                            size: 0,
                            tooltip: {content: "SI"}
                        }, 
                        'TW': {
                            latitude: 23.69781,
                            longitude: 120.960515,
                            size: 0,
                            tooltip: {content: "TW"}
                        }, 
                        'US': {
                            latitude: 36.778259,
                            longitude: -119.417931,
                            size: 0,
                            text: {content: 'USA'}
                        }, 
                        'ZA': {
                            latitude: -30.559482,
                            longitude: 22.937506,
                            size: 0,
                            tooltip: {content: "ZA"}
                        }, 
                        'AE': {
                            latitude: 23.424076,
                            longitude: 53.847818,
                            size: 0,
                            tooltip: {content: "AE"}
                        }, 
                        'GR': {
                            latitude: 39.074208,
                            longitude: 21.824312,
                            size: 0,
                            tooltip: {content: "GR"}
                        }, 
                        'KZ': {
                            latitude: 48.019573,
                            longitude: 66.923684,
                            size: 0,
                            tooltip: {content: "KZ"}
                        }, 
                        'LK': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'LK'}
                        }, 
                        'LT': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'LT'}
                        }, 
                        'LV': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'LV'}
                        }, 
                        'MX': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'MX'}
                        }, 
                        'MY': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'MY'}
                        }, 
                        'AZ': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'AZ'}
                        }, 
                        'BG': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'BG'}
                        }, 
                        'CL': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'CL'}
                        }, 
                        'CV': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'CV'}
                        }, 
                        'CO': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'CO'}
                        },  
                        'GF': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'GF'}
                        }, 
                        'GP': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'GP'}
                        }, 
                        'HU': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'HU'}
                        }, 
                        'IE': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'IE'}
                        }, 
                        'MT': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'MT'}
                        }, 
                        'PF': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'CO'}
                        }
                        
                    }
                },
                "bulgaria_states": {
                    "plots": {
                        
                        
                    }
                },
                "Czech_republic_states": {
                    "plots": {
                        
                        
                    }
                },
                "denmark_states": {
                    "plots": {
                        
                        
                    }
                },
                "germany_states": {
                    "plots": {
                        
                        
                    }
                },
                "estonia_states": {
                    "plots": {
                        
                        
                    }
                },
                "ireland_states": {
                    "plots": {
                        
                        
                    }
                },
                "greece_states": {
                    "plots": {
                        
                        
                    }
                },
                "great_Britain_states": {
                    "plots": {
                        
                        
                    }
                },
                "spain_states": {
                    "plots": {
                        
                        
                    }
                },
                "france_states": {
                    "plots": {
                        
                        
                    }
                },
                "croatia_states": {
                    "plots": {
                        
                        
                    }
                },
                "italy_states": {
                    "plots": {
                        
                        
                    }
                },
                "cyprus_states": {
                    "plots": {
                        
                        
                    }
                },
                "latvia_states": {
                    "plots": {
                        
                        
                    }
                },
                "lithuania_states": {
                    "plots": {
                        
                        
                    }
                },
                "luxembourg_states": {
                    "plots": {
                        
                        
                    }
                },
                "hungaria_states": {
                    "plots": {
                        
                        
                    }
                },
                "malta_states": {
                    "plots": {
                        
                        
                    }
                },
                "netherlands_states": {
                    "plots": {
                        
                        
                    }
                },
                "austria_states": {
                    "plots": {
                        
                        
                    }
                },
                "poland_states": {
                    "plots": {
                        
                        
                    }
                },

                "portugal_states": {
                    "plots": {
                        
                        
                    }
                },
                "romania_states": {
                    "plots": {
                        
                        
                    }
                },
                "slovakia_states": {
                    "plots": {
                        
                        
                    }
                },
                "slovenia_states": {
                    "plots": {
                        
                        
                    }
                },
                "finland_states": {
                    "plots": {
                        
                        
                    }
                },
                "sweden_states": {
                    "plots": {
                        
                        
                    }
                },
                "canada_states": {
                    "plots": {
                                 'CA': {
                            latitude: 56.130366,
                            longitude: -106.346771,
                            size: 0,
                            text: {content: 'CA'}
                        },
						'US': {
                            latitude: 37.09024,
                            longitude: -95.712891,
                            size: 0,
                            text: {content: 'US'}
                        },
						'GB': {
                            latitude: 55.378051,
                            longitude: -3.435973,
                            size: 0,
                            text: {content: 'GB'}
                        },
						'AU': {
                            latitude: -25.274398,
                            longitude: 133.775136,
                            size: 0,
                            text: {content: 'AU'}
                        },
						'FR': {
                            latitude: 46.227638,
                            longitude: 2.213749,
                            size: 0,
                            text: {content: ''}
                        },
						'DE': {
                            latitude: 51.165691,
                            longitude: 10.451526,
                            size: 0,
                            text: {content: 'DE'}
                        },
						'CN': {
                            latitude: 35.86166,
                            longitude: 104.195397,
                            size: 0,
                            text: {content: 'CN'}
                        },
						'MX': {
                            latitude: 23.634501,
                            longitude: -102.552784,
                            size: 0,
                            text: {content: 'MX'}
                        },
						'IE': {
                            latitude: 53.41291,
                            longitude: -8.24389,
                            size: 0,
                            text: {content: 'IE'}
                        },
						'HK': {
                            latitude: 22.396428,
                            longitude: 114.109497,
                            size: 0,
                            text: {content: 'HK'}
                        },
						'JP': {
                            latitude: 36.204824,
                            longitude: 138.252924,
                            size: 0,
                            text: {content: 'JP'}
                        },
						'IL': {
                            latitude: 31.046051,
                            longitude: 34.851612,
                            size: 0,
                            text: {content: 'IL'}
                        },
						'SG': {
                            latitude: 1.352083,
                            longitude: 103.819836,
                            size: 0,
                            text: {content: 'SG'}
                        },
						'NL': {
                            latitude: 52.132633,
                            longitude: 5.291266,
                            size: 0,
                            text: {content: 'NL'}
                        },
						'CH': {
                            latitude: 46.818188,
                            longitude: 8.227512,
                            size: 0,
                            text: {content: 'CH'}
                        },
						'BR': {
                            latitude: -14.235004,
                            longitude: -51.92528,
                            size: 0,
                            text: {content: 'BR'}
                        },
						'IT': {
                            latitude: 41.87194,
                            longitude: 12.56738,
                            size: 0,
                            text: {content: 'IT'}
                        },
						'AR': {
                            latitude: -38.416097,
                            longitude: -63.616672,
                            size: 0,
                            text: {content: 'AR'}
                        },
						'SE': {
                            latitude: 60.128161,
                            longitude: 18.643501,
                            size: 0,
                            text: {content: 'SE'}
                        },
						'ES': {
                            latitude: 40.463667	,
                            longitude: -3.74922,
                            size: 0,
                            text: {content: 'ES'}
                        },
						'TW': {
                            latitude: 23.69781,
                            longitude: 120.960515,
                            size: 0,
                            text: {content: 'TW'}
                        },
						'CL': {
                            latitude: -35.675147,
                            longitude: -71.542969,
                            size: 0,
                            text: {content: 'CL'}
                        },
						'IN': {
                            latitude: 20.593684,
                            longitude: 78.96288,
                            size: 0,
                            text: {content: 'IN'}
                        },
						'BE': {
                            latitude: 50.503887	,
                            longitude: 4.469936	,
                            size: 0,
                            text: {content: 'BE'}
                        },
						'RU': {
                            latitude: 61.52401,
                            longitude: 105.318756,
                            size: 0,
                            text: {content: 'RU'}
                        },
						'NZ': {
                            latitude: -40.900557,
                            longitude: 174.885971,
                            size: 0,
                            text: {content: 'NZ'}
                        },
						'NO': {
                            latitude: 60.472024,
                            longitude: 8.468946,
                            size: 0,
                            text: {content: 'NO'}
                        },
						'DK': {
                            latitude: 56.26392,
                            longitude: 9.501785,
                            size: 0,
                            text: {content: 'DK'}
                        },
						'IS': {
                            latitude: 64.963051,
                            longitude: -19.020835,
                            size: 0,
                            text: {content: 'IS'}
                        },
						'KR': {
                            latitude: 35.907757,
                            longitude: 127.766922,
                            size: 0,
                            text: {content: 'KR'}
                        },
						'PA': {
                            latitude: 8.537981,
                            longitude: -80.782127,
                            size: 0,
                            text: {content: 'PA'}
                        },
						'ZA': {
                            latitude: -30.559482,
                            longitude: 22.937506,
                            size: 0,
                            text: {content: 'ZA'}
                        },
						'AE': {
                            latitude: 23.424076,
                            longitude: 53.847818,
                            size: 0,
                            text: {content: 'AE'}
                        },
						'PR': {
                            latitude: 18.220833,
                            longitude: -66.590149,
                            size: 0,
                            text: {content: 'PR'}
                        },
						'SA': {
                            latitude: 23.885942,
                            longitude: 45.079162,
                            size: 0,
                            text: {content: 'SA'}
                        },
						'AT': {
                            latitude: 47.516231,
                            longitude: 14.550072,
                            size: 0,
                            text: {content: 'AT'}
                        },
						'CR': {
                            latitude: 9.748917,
                            longitude: -83.753428,
                            size: 0,
                            text: {content: 'CR'}
                        },
						'FI': {
                            latitude: 61.92411,
                            longitude: 25.748151,
                            size: 0,
                            text: {content: 'FI'}
                        },
						'CY': {
                            latitude: 35.126413,
                            longitude: 33.429859,
                            size: 0,
                            text: {content: 'CY'}
                        },
						'PH': {
                            latitude: 12.879721	,
                            longitude: 121.774017,
                            size: 0,
                            text: {content: 'PH'}
                        },
						'TH': {
                            latitude: 15.870032,
                            longitude: 100.992541,
                            size: 0,
                            text: {content: 'TH'}
                        },
						'PL': {
                            latitude: 51.919438,
                            longitude: 19.145136,
                            size: 0,
                            text: {content: 'PL'}
                        },
						'UA': {
                            latitude: 48.379433,
                            longitude: 31.16558,
                            size: 0,
                            text: {content: 'UA'}
                        },
						'PE': {
                            latitude: -9.189967,
                            longitude: -75.015152,
                            size: 0,
                            text: {content: 'PE'}
                        },
						'MY': {
                            latitude: 4.210484,
                            longitude: 101.975766,
                            size: 0,
                            text: {content: 'MY'}
                        },
						'EC': {
                            latitude: -1.831239,
                            longitude: -78.183406,
                            size: 0,
                            text: {content: 'EC'}
                        },
						'VN': {
                            latitude: 14.058324,
                            longitude: 108.277199,
                            size: 0,
                            text: {content: 'VN'}
                        },
						'UY': {
                            latitude: -32.522779,
                            longitude: -55.765835,
                            size: 0,
                            text: {content: 'UY'}
                        },
						'ID': {
                            latitude: -0.789275,
                            longitude: 113.921327,
                            size: 0,
                            text: {content: 'ID'}
                        },
						'QA': {
                            latitude: 25.354826,
                            longitude: 51.183884,
                            size: 0,
                            text: {content: 'QA'}
                        },
						'RO': {
                            latitude: 45.943161,
                            longitude: 24.96676,
                            size: 0,
                            text: {content: 'RO'}
                        },
						'CZ': {
                            latitude: 49.817492,
                            longitude: 15.472962,
                            size: 0,
                            text: {content: 'CZ'}
                        },
						'HU': {
                            latitude: 47.162494,
                            longitude: 19.503304,
                            size: 0,
                            text: {content: 'HU'}
                        },
						'KY': {
                            latitude: 19.513469,
                            longitude: -80.566956,
                            size: 0,
                            text: {content: 'KY'}
                        },
						'CO': {
                            latitude: 4.570868,
                            longitude: -74.297333,
                            size: 0,
                            text: {content: 'CO'}
                        },
						'PT': {
                            latitude: 39.399872,
                            longitude: -8.224454,
                            size: 0,
                            text: {content: 'PT'}
                        },
						'GR': {
                            latitude: 39.074208,
                            longitude: 21.824312,
                            size: 0,
                            text: {content: 'GR'}
                        },
						'MT': {
                            latitude: 35.937496,
                            longitude: 14.375416,
                            size: 0,
                            text: {content: 'MT'}
                        },
						'LT': {
                            latitude: 55.169438,
                            longitude: 23.881275,
                            size: 0,
                            text: {content: 'LT'}
                        },
						'MA': {
                            latitude: 31.791702,
                            longitude: -7.09262,
                            size: 0,
                            text: {content: 'MA'}
                        },
						'JO': {
                            latitude: 30.585164,
                            longitude: 36.238414,
                            size: 0,
                            text: {content: 'JO'}
                        },
						'BG': {
                            latitude: 42.733883,
                            longitude: 25.48583,
                            size: 0,
                            text: {content: 'BG'}
                        },
						'NG': {
                            latitude: 9.081999,
                            longitude: 8.675277,
                            size: 0,
                            text: {content: 'NG'}
                        },
						'TM': {
                            latitude: 38.969719,
                            longitude: 59.556278,
                            size: 0,
                            text: {content: 'TM'}
                        },
						'KW': {
                            latitude: 29.31166,
                            longitude: 47.481766,
                            size: 0,
                            text: {content: 'KW'}
                        },
						'GT': {
                            latitude: 15.783471	,
                            longitude: -90.230759,
                            size: 0,
                            text: {content: 'GT'}
                        },
						'JM': {
                            latitude: 18.109581,
                            longitude: -77.297508,
                            size: 0,
                            text: {content: 'JM'}
                        },
						'BM': {
                            latitude: 32.321384,
                            longitude: -64.75737,
                            size: 0,
                            text: {content: 'BM'}
                        },
						'KE': {
                            latitude: -0.023559,
                            longitude: 37.906193,
                            size: 0,
                            text: {content: 'KE'}
                        },
						'HR': {
                            latitude: 45.1,
                            longitude: 15.2,
                            size: 0,
                            text: {content: 'HR'}
                        },
						'BS': {
                            latitude: 25.03428,
                            longitude: -77.39628,
                            size: 0,
                            text: {content: 'BS'}
                        },
						'DO': {
                            latitude: 18.735693,
                            longitude: -70.162651,
                            size: 0,
                            text: {content: 'DO'}
                        },
						'BH': {
                            latitude: 25.930414,
                            longitude: 50.637772,
                            size: 0,
                            text: {content: 'BH'}
                        },
						'BJ': {
                            latitude: 9.30769,
                            longitude: 2.315834,
                            size: 0,
                            text: {content: 'BJ'}
                        },
						'TT': {
                            latitude: 10.691803,
                            longitude: -61.222503,
                            size: 0,
                            text: {content: 'TT'}
                        },
						'LV': {
                            latitude: 56.879635,
                            longitude: 24.603189,
                            size: 0,
                            text: {content: 'LV'}
                        },
						'AG': {
                            latitude: 17.060816,
                            longitude: -61.796428,
                            size: 0,
                            text: {content: 'AG'}
                        },
						'HN': {
                            latitude: 15.199999,
                            longitude: -86.241905,
                            size: 0,
                            text: {content: 'HN'}
                        },
						'BN': {
                            latitude: 4.535277,
                            longitude: 114.727669,
                            size: 0,
                            text: {content: 'BN'}
                        },
						'BO': {
                            latitude: -16.290154,
                            longitude: -63.588653,
                            size: 0,
                            text: {content: 'BO'}
                        },
						'CD': {
                            latitude: -4.038333,
                            longitude: 21.758664,
                            size: 0,
                            text: {content: 'CD'}
                        },
						'OM': {
                            latitude: 21.512583,
                            longitude: 55.923255,
                            size: 0,
                            text: {content: 'OM'}
                        },
						'TZ': {
                            latitude: -6.369028,
                            longitude: 34.888822,
                            size: 0,
                            text: {content: 'TZ'}
                        },
						
						'EG': {
                            latitude: 26.820553,
                            longitude: 30.802498,
                            size: 0,
                            text: {content: 'EG'}
                        },
						'HT': {
                            latitude: 18.971187,
                            longitude: -72.285215,
                            size: 0,
                            text: {content: 'HT'}
                        },
						'SK': {
                            latitude: 48.669026	,
                            longitude: 19.699024,
                            size: 0,
                            tooltip: {content: "SK"}
                        },
						'SI': {
                            latitude: 46.151241,
                            longitude: 14.995463,
                            size: 0,
                            tooltip: {content: "SI"}
                        },
						'ZW': {
                            latitude: -19.015438,
                            longitude: 29.154857,
                            size: 0,
                            tooltip: {content: "ZW"}
                        },
						'AZ': {
                            latitude: 40.143105,
                            longitude: 47.576927,
                            size: 0,
                            tooltip: {content: "AZ"}
                        },
						'ZM': {
                            latitude: -13.133897,
                            longitude: 27.849332,
                            size: 0,
                            tooltip: {content: "ZM"}
                        },
						'SV': {
                            latitude: 13.794185,
                            longitude: -88.89653,
                            size: 0,
                            tooltip: {content: "SV"}
                        },
						'LU': {
                            latitude: 49.815273,
                            longitude: 6.129583,
                            size: 0,
                            tooltip: {content: "LU"}
                        },
						'RS': {
                            latitude: 44.016521,
                            longitude: 21.005859,
                            size: 0,
                            tooltip: {content: "RS"}
                        },
						'LK': {
                            latitude: 7.873054,
                            longitude: 80.771797,
                            size: 0,
                            tooltip: {content: "LK"}
                        },
						'KZ': {
                            latitude: 48.019573,
                            longitude: 66.923684,
                            size: 0,
                            tooltip: {content: "KZ"}
                        },
						'NI': {
                            latitude: 12.865416,
                            longitude: -85.207229,
                            size: 0,
                            tooltip: {content: "NI"}
                        },
						'BW': {
                            latitude: -22.328474,
                            longitude: 24.684866,
                            size: 0,
                            tooltip: {content: "BW"}
                        },
						'AL': {
                            latitude: 41.153332,
                            longitude: 20.168331,
                            size: 0,
                            tooltip: {content: "AL"}
                        },
						'EE': {
                            latitude: 58.595272,
                            longitude: 25.013607,
                            size: 0,
                            tooltip: {content: "EE"}
                        },
						'DZ': {
                            latitude: 28.033886,
                            longitude: 1.659626,
                            size: 0,
                            tooltip: {content: "DZ"}
                        },
						'GE': {
                            latitude: 42.315407,
                            longitude: 43.356892,
                            size: 0,
                            tooltip: {content: "GE"}
                        },
						'MU': {
                            latitude: -20.348404,
                            longitude: 57.552152,
                            size: 0,
                            tooltip: {content: "MU"}
                        },
						'CI': {
                            latitude: 7.539989,
                            longitude: -5.54708,
                            size: 0,
                            tooltip: {content: "CI"}
                        },
						'AN': {
                            latitude: 12.226079,
                            longitude: -69.060087,
                            size: 0,
                            tooltip: {content: "AN"}
                        },
						'SC': {
                            latitude: -4.679574,
                            longitude: 55.491977,
                            size: 0,
                            tooltip: {content: "SC"}
                        },
						'KH': {
                            latitude: 12.565679,
                            longitude: 104.990963,
                            size: 0,
                            tooltip: {content: "KH"}
                        },
						'PF': {
                            latitude: -17.679742,
                            longitude: -149.406843,
                            size: 0,
                            tooltip: {content: "PF"}
                        },
						'TC': {
                            latitude: 21.694025,
                            longitude: -71.797928,
                            size: 0,
                            tooltip: {content: "TC"}
                        },
						'BY': {
                            latitude: 53.709807,
                            longitude: 27.953389,
                            size: 0,
                            tooltip: {content: "BY"}
                        },
						'GP': {
                            latitude: 16.995971,
                            longitude: -62.067641,
                            size: 0,
                            tooltip: {content: "GP"}
                        },
						'RE': {
                            latitude: -21.115141,
                            longitude: 55.536384,
                            size: 0,
                            tooltip: {content: "RE"}
                        },
						'VE': {
                            latitude: 6.42375,
                            longitude: -66.58973,
                            size: 0,
                            tooltip: {content: "VE"}
                        },
						'LB': {
                            latitude: 33.854721,
                            longitude: 35.862285,
                            size: 0,
                            tooltip: {content: "LB"}
                        },
						'GY': {
                            latitude: 4.860416,
                            longitude: -58.93018,
                            size: 0,
                            tooltip: {content: "GY"}
                        },
						'BB': {
                            latitude: 13.193887,
                            longitude: -59.543198,
                            size: 0,
                            tooltip: {content: "BB"}
                        },
						'PM': {
                            latitude: 46.941936,
                            longitude: -56.27111,
                            size: 0,
                            tooltip: {content: "PM"}
                        },
						'AW': {
                            latitude: 12.52111,
                            longitude: -69.968338,
                            size: 0,
                            tooltip: {content: "AW"}
                        },
						'AM': {
                            latitude: 40.069099,
                            longitude: 45.038189,
                            size: 0,
                            tooltip: {content: "AM"}
                        },
						'PY': {
                            latitude: -23.442503,
                            longitude: -58.443832,
                            size: 0,
                            tooltip: {content: "PY"}
                        },
						'MV': {
                            latitude: 3.202778,
                            longitude: 73.22068,
                            size: 0,
                            tooltip: {content: "MV"}
                        },
						'CM': {
                            latitude: 7.369722,
                            longitude: 12.354722,
                            size: 0,
                            tooltip: {content: "CM"}
                        },
						'UG': {
                            latitude: 1.373333,
                            longitude: 32.290275,
                            size: 0,
                            tooltip: {content: "UG"}
                        },
						'KN': {
                            latitude: 17.357822,
                            longitude: -62.782998,
                            size: 0,
                            tooltip: {content: "KN"}
                        },
						'LC': {
                            latitude: 13.909444,
                            longitude: -60.978893,
                            size: 0,
                            tooltip: {content: "LC"}
                        },
						'SB': {
                            latitude: -9.64571,
                            longitude: 160.156194,
                            size: 0,
                            tooltip: {content: "SB"}
                        },
						'CV': {
                            latitude: 16.002082,
                            longitude: -24.013197,
                            size: 0,
                            tooltip: {content: "CV"}
                        },
						'AI': {
                            latitude: 18.220554,
                            longitude: -63.068615,
                            size: 0,
                            tooltip: {content: "AI"}
                        },
						'TR': {
                            latitude: 38.963745,
                            longitude: 35.243322,
                            size: 0,
                            tooltip: {content: "TR"}
                        },
						'SZ': {
                            latitude: -26.522503,
                            longitude: 31.465866,
                            size: 0,
                            tooltip: {content: "SZ"}
                        },
						'PW': {
                            latitude: 7.51498,
                            longitude: 134.58252,
                            size: 0,
                            tooltip: {content: "PW"}
                        },
						'MD': {
                            latitude: 47.411631,
                            longitude: 28.369885,
                            size: 0,
                            tooltip: {content: "MD"}
                        },
						'LA': {
                            latitude: 19.85627,
                            longitude: 102.495496,
                            size: 0,
                            tooltip: {content: "LA"}
                        },
						'VG': {
                            latitude: 18.420695,
                            longitude: -64.639968,
                            size: 0,
                            tooltip: {content: "VG"}
                        },
						'SN': {
                            latitude: 14.497401,
                            longitude: -14.452362,
                            size: 0,
                            tooltip: {content: "SN"}
                        },
						'SR': {
                            latitude: 3.919305,
                            longitude: -56.027783,
                            size: 0,
                            tooltip: {content: "SR"}
                        },
						'FO': {
                            latitude: 61.892635,
                            longitude: -6.911806,
                            size: 0,
                            tooltip: {content: "FO"}
                        },
						'AS': {
                            latitude: -14.270972,
                            longitude: -170.132217,
                            size: 0,
                            tooltip: {content: "AS"}
                        },
						'BZ': {
                            latitude: 17.189877,
                            longitude: -88.49765,
                            size: 0,
                            tooltip: {content: "BZ"}
                        },
						'BA': {
                            latitude: 43.915886,
                            longitude: 17.679076,
                            size: 0,
                            tooltip: {content: "BA"}
                        },
						'AO': {
                            latitude: -11.202692,
                            longitude: 17.873887,
                            size: 0,
                            tooltip: {content: "AO"}
                        },
						'GI': {
                            latitude: 36.137741,
                            longitude: -5.345374,
                            size: 0,
                            tooltip: {content: "GI"}
                        },
						'DM': {
                            latitude: 15.414999,
                            longitude: -61.370976,
                            size: 0,
                            tooltip: {content: "DM"}
                        },
						'MQ': {
                            latitude: 14.641528,
                            longitude: -61.024174,
                            size: 0,
                            tooltip: {content: "MQ"}
                        },
						'GD': {
                            latitude: 12.262776,
                            longitude: -61.604171,
                            size: 0,
                            tooltip: {content: "GD"}
                        },
						'FJ': {
                            latitude: -16.578193,
                            longitude: 179.414413,
                            size: 0,
                            tooltip: {content: "FJ"}
                        },
						'MC': {
                            latitude: 43.750298,
                            longitude: 7.412841,
                            size: 0,
                            tooltip: {content: "MC"}
                        },
						'MK': {
                            latitude: 41.608635,
                            longitude: 21.745275,
                            size: 0,
                            tooltip: {content: "MK"}
                        },
						'NA': {
                            latitude: -22.95764,
                            longitude: 18.49041,
                            size: 0,
                            tooltip: {content: "NA"}
                        },
						'CG': {
                            latitude: -0.228021,
                            longitude: 15.827659,
                            size: 0,
                            tooltip: {content: "CG"}
                        },
						'PK': {
                            latitude: 30.375321,
                            longitude: 69.345116,
                            size: 0,
                            tooltip: {content: "PK"}
                        },
						'YE': {
                            latitude: 15.552727,
                            longitude: 48.516388,
                            size: 0,
                            tooltip: {content: "YE"}
                        },
						'NC': {
                            latitude: -20.904305,
                            longitude: 165.618042,
                            size: 0,
                            tooltip: {content: "NC"}
                        },
						'KG': {
                            latitude: 41.20438,
                            longitude: 74.766098,
                            size: 0,
                            tooltip: {content: "KG"}
                        },
						'BD': {
							latitude: 23.684994,
                            longitude: 90.356331,
                            size: 0,
                            tooltip: {content: "BD"}
                        },
						'PG': {
                            latitude: -6.314993,
                            longitude: 143.95555,
                            size: 0,
                            tooltip: {content: "PG"}
                        },
						'MZ': {
                            latitude: -18.665695,
                            longitude: 35.529562,
                            size: 0,
                            tooltip: {content: "MZ"}
                        },
						'MN': {
                            latitude: 46.862496,
                            longitude: 103.846656,
                            size: 0,
                            tooltip: {content: "MN"}
                        },
						'YT': {
                            latitude: -12.8275,
                            longitude: 45.166244,
                            size: 0,
                            tooltip: {content: "YT"}
                        },
						'TG': {
                            latitude: 8.619543,
                            longitude: 0.824782,
                            size: 0,
                            tooltip: {content: "TG"}
                        },
						'ME': {
                            latitude: 42.708678,
                            longitude: 19.37439,
                            size: 0,
                            tooltip: {content: "ME"}
                        },
						'SM': {
                            latitude: 43.94236,
                            longitude: 12.457777,
                            size: 0,
                            tooltip: {content: "SM"}
                        } 
                        
                    }
                }
            };
        
    $cntry_cde =  "world_countries";
    $cntry_val = 5000;
    $country= "usa_states";
    if ($cntry_val >= 0 && $cntry_val <= 3000){
        $strk_val=1;
    }
    else if ($cntry_val >= 3001 && $cntry_val <= 6000){
        $strk_val=10;
    }
    else if ($cntry_val >= 6001 && $cntry_val <= 9000){
        $strk_val=3;
    }
    else{
        $strk_val=4;
    }

    $.fn.myFunction = function(){ 
        $(".mapcontainer").mapael({
            
            map: {
                name: $cntry_cde,
                zoom: {
                    enabled: true
                },
                defaultArea: {
                    attrs: {
                        fill: "#90d4f7"
                        , stroke: "#ced8d0"
                    },
                    height:'1000'
                    
                }
                
                // Default attributes can be set for all links
                , defaultLink: {
                    factor: 0.4
                    , attrsHover: {
                        stroke: "#a4e100"
                    }
                }
                , defaultPlot: {
                    text: {
                        attrs: {
                            fill: "#000"
                        },
                        attrsHover: {
                            fill: "#000"
                        }
                    }
                }
            },
            plots:data_plot["usa_states"]['plots'] ,
            links:data_link["usa_states"]['links']

        });
    }

    //alert($strk_val);
    $(".cntry_slct").change(function(){
        $cntry_cde =  this.value;
        $country = this.value;
        var opt = {
            'deletePlotKeys':"all",
            'newPlots':data_plot[$cntry_cde]['plots'],
            'deleteLinkKeys':"all",
            'newLinks': 
                    data_link[$cntry_cde]['links']
                
            };
         $(".mapcontainer").trigger('update',[ 
             opt]);
    });
    $.fn.myFunction();


});

 