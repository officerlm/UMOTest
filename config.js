var config = {
    accessToken: 'pk.eyJ1Ijoib2ZmaWNlcmxtIiwiYSI6ImNrZmd5aXB3eTBkdnIyeXRhc2w3a3hnc2MifQ.7lJ6xYD6HUcdXASGvLoUag',
    style: 'mapbox://styles/officerlm/ckg6xdiz72abj19ql5le2brhy',
    theme: 'light',
    alignment: 'right',
    toptitle: 'University of Maine | 2020 Maine Bicentennial | Storytelling Template',
    title: 'French Canadian Immigration',
    byline: 'Stephen J. Hornsby, Mark P. Richard',
    description: '</p><p> French-speaking Catholics from Quebec comprised the largest immigrant group in Maine (after English-speaking Canadians) in the late nineteenth century. Between 1850 and the imposition on Canadian immigrants in 1930, nearly one million people left Quebec for the United States. Displaced by rapid growth of populations, a shortage of good agricultural land, and the industrial development at home, the great majoirty of French Canadian mirants crowded into New England, looking for work in the lumber and textile industries. ',
    footer: 'This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with previous research on French Canadian Immigration by Stephen J. Hornsby and Mark P. Richard.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://www.rhumblinemaps.com/">Rhumb Line Maps</a>',
    chapters: [
        {
            id: 'pre1860',
            title: 'Migration pre 1860',
            description: 'The earliest French Canadian migrants arrived in Maine&#8217;s Saint Johns River Valley in 1785, where they joined Acadians from northern New Brunswick, and their members increased between the 1800s and 1860s.',
            location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
                center: [-67, 45.7],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'Saint Johns River Valley',
                  opacity: .30
              }
            ],
            onChapterExit: [
              {
                  layer: 'Saint Johns River Valley',
                  opacity: 0
              }
            ]
        },

        {
            id: 'pre1860_2',
            alignment: 'right',
            image: 'images/Chapter1.jpg',
            imageCredit: '<a href="https://library.umaine.edu/content/NAFOH/photos/photos/p00485.jpg">Norman Soucie Photo Collection, p000480</a>',
            description: 'While Quebecers from north of the St.Lawrence primarily moved to the industrializing city of Montreal, farmers from the south shore of the St. Lawrence River spread into the upper Saint Johns Valley.',
            location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
                center: [-67, 45.7],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'Saint Johns River Valley',
                  opacity: .30
              },

              {
                  layer: 'NearRiver',
                  opacity: .30
              },
              {
                layer: 'path1',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'Saint Johns River Valley',
                  opacity: 0
              },
              {
                  layer: 'NearRiver',
                  opacity: 0
              },
              {
                layer: 'path1',
                opacity: 0
              }
            ]
        },
        {
            id: 'pre1860_3',
            image: 'images/IMG_2209.mov',
            imageCredit: '<a href=https://library.umaine.edu/content/NAFOH/photos/photos/p00485.jpg">Norman Soucie Photo Collection, p000485</a>',
            description: 'Laborers from the region south of Quebec City trickled down the Kennebec or Canada road to Waterville and Bangor, cutting wood, constructing railroads, and bringing in the harvest.',
            location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
                center: [-67, 45.7],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'Quebec',
                  opacity: .30
              },

              {
                layer: 'path2',
                opacity: 1
              }

            ],
            onChapterExit: [
              {
                  layer: 'Quebec',
                  opacity: 0
              },
              {
                layer: 'path2',
                opacity: 0
              }
            ]
        },
        // {
        //     id: 'incomeUnderlay',
        //     title: 'Forced to work and take the subway',
        //     image: 'images/Chapter_2_Image.jpg',
        //     imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: 'Income inequality certainly played a role in the uneven distribution of subway usage. By overlaying median household income and change in subway entries it becomes clear that those stations with less change are located in low-income areas, specially in the Bronx and outer Queens and Brooklyn.',
        //     location: {
        //         center: [-74, 40.725],
        //         zoom: 10,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'medianIncome',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'medianIncome',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'elmhurstHospital',
        //     title: 'The epicenter of the outbreak',
        //     image: 'images/Chapter_3_Image.jpg',
        //     imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: 'Elmhurst Hospital Center has been identified as one of the hospitals most overwhelmed by the number of patients with COVID-19 it has received. Located in a low-middle-income area of the city, with a median household income of around $50,000, the hospital serves one of the most diverse and immigrant dense areas of the city. The three subway stations around the hospital have all seen relatively small change in their usage compare to the rest of the city.',
        //     location: {
        //         center: [-73.886201, 40.744566],
        //         zoom: 16,
        //         pitch: 40,
        //         bearing: -7
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'medianIncome',
        //             opacity: 0
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'medianIncome',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'southBronx',
        //     title: 'The South Bronx, as Always',
        //     image: 'images/Chapter_4_Image.jpg',
        //     imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: "The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.",
        //     location: {
        //         center: [-73.918037, 40.816093],
        //         zoom: 15,
        //         pitch: 40,
        //         bearing: 8
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'medianIncome',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'medianIncome',
        //             opacity: 0
        //         }
        //     ]
        // }
    ]
};
