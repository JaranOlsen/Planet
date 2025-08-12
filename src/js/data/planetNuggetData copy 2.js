const existingSlides = [94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106];
const totalNuggets = 100;
const initialNuggets = [
    {id: "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD", lat: -38, lng: 95, color: 2, size: 300, slides: 94},
    {id: "0B9E2C1B-258D-4D9B-A777-519BCCF889D2", lat: 27, lng: 49, color: 2, size: 300, slides: 95},
    {id: "43F13382-5AC9-4705-A1F9-ADE764269F0A", lat: 30, lng: 10, color: 2, size: 300, slides: 96},
    {id: "C6E10CC1-EB1B-42B1-AA34-4F9753486601", lat: 31.5, lng: -30, color: 2, size: 300, slides: 97},
    {id: "C8A28E83-DE30-4FEF-B1C8-893DF3836692", lat: 67, lng: -48, color: 2, size: 300, slides: 98},
    {id: "EF773EF3-0A60-42B6-B05A-BDC7BDED59AB", lat: 30.5, lng: -115, color: 2, size: 300, slides: 99},
    {id: "4BD0896D-F543-4DE3-8C43-D2C29F9D6FCB", lat: 31, lng: -151, color: 2, size: 300, slides: 100},
    {id: "63C7D0C9-FC0D-49A6-B8F0-1682617A396A", lat: 7, lng: -147, color: 2, size: 300, slides: 101},
    {id: "AF05DA75-41AC-4793-80A4-11110E081BF6", lat: 51.5, lng: 119.5, color: 2, size: 300, slides: 102},
    {id: "54500943-65EA-401B-B4B2-6C671BE363B3", lat: 21, lng: 138.2, color: 2, size: 300, slides: 103},
    {id: "5998C6F2-1237-4A85-98E2-0DEED4DADB00", lat: 7.1, lng: 117, color: 2, size: 300, slides: 104},
    {id: "F6DC855A-EFD1-47B8-BB13-979B0FC36719", lat: 34, lng: 79.5, color: 2, size: 300, slides: 105},
    {id: "9A2A330C-6107-4E21-9F20-4199D79D9D3A", lat: 13.5, lng: 103.5, color: 2, size: 300, slides: 106},
];

const generateRandomCoordinate = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

for (let i = initialNuggets.length; i < totalNuggets; i++) {
  const lat = generateRandomCoordinate(-90, 90);
  const lng = generateRandomCoordinate(-180, 180);
  const slide = existingSlides[i % existingSlides.length];
  initialNuggets.push({
    id: "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
    lat,
    lng,
    color: 2,
    size: 30,
    slides: slide,
  });
}

export const planetNuggetData = initialNuggets;

[
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -38,
        "lng": 95,
        "color": 2,
        "size": 300,
        "slides": 94
    },
    {
        "id": "0B9E2C1B-258D-4D9B-A777-519BCCF889D2",
        "lat": 27,
        "lng": 49,
        "color": 2,
        "size": 300,
        "slides": 95
    },
    {
        "id": "43F13382-5AC9-4705-A1F9-ADE764269F0A",
        "lat": 30,
        "lng": 10,
        "color": 2,
        "size": 300,
        "slides": 96
    },
    {
        "id": "C6E10CC1-EB1B-42B1-AA34-4F9753486601",
        "lat": 31.5,
        "lng": -30,
        "color": 2,
        "size": 300,
        "slides": 97
    },
    {
        "id": "C8A28E83-DE30-4FEF-B1C8-893DF3836692",
        "lat": 67,
        "lng": -48,
        "color": 2,
        "size": 300,
        "slides": 98
    },
    {
        "id": "EF773EF3-0A60-42B6-B05A-BDC7BDED59AB",
        "lat": 30.5,
        "lng": -115,
        "color": 2,
        "size": 300,
        "slides": 99
    },
    {
        "id": "4BD0896D-F543-4DE3-8C43-D2C29F9D6FCB",
        "lat": 31,
        "lng": -151,
        "color": 2,
        "size": 300,
        "slides": 100
    },
    {
        "id": "63C7D0C9-FC0D-49A6-B8F0-1682617A396A",
        "lat": 7,
        "lng": -147,
        "color": 2,
        "size": 300,
        "slides": 101
    },
    {
        "id": "AF05DA75-41AC-4793-80A4-11110E081BF6",
        "lat": 51.5,
        "lng": 119.5,
        "color": 2,
        "size": 300,
        "slides": 102
    },
    {
        "id": "54500943-65EA-401B-B4B2-6C671BE363B3",
        "lat": 21,
        "lng": 138.2,
        "color": 2,
        "size": 300,
        "slides": 103
    },
    {
        "id": "5998C6F2-1237-4A85-98E2-0DEED4DADB00",
        "lat": 7.1,
        "lng": 117,
        "color": 2,
        "size": 300,
        "slides": 104
    },
    {
        "id": "F6DC855A-EFD1-47B8-BB13-979B0FC36719",
        "lat": 34,
        "lng": 79.5,
        "color": 2,
        "size": 300,
        "slides": 105
    },
    {
        "id": "9A2A330C-6107-4E21-9F20-4199D79D9D3A",
        "lat": 13.5,
        "lng": 103.5,
        "color": 2,
        "size": 300,
        "slides": 106
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 48.83,
        "lng": -131.47,
        "color": 2,
        "size": 30,
        "slides": 94
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 44.72,
        "lng": 162.94,
        "color": 2,
        "size": 30,
        "slides": 95
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -10.82,
        "lng": 54.97,
        "color": 2,
        "size": 30,
        "slides": 96
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 74.37,
        "lng": 101.9,
        "color": 2,
        "size": 30,
        "slides": 97
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 58.12,
        "lng": 51.08,
        "color": 2,
        "size": 30,
        "slides": 98
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -20.64,
        "lng": -12.12,
        "color": 2,
        "size": 30,
        "slides": 99
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -10.06,
        "lng": 115.69,
        "color": 2,
        "size": 30,
        "slides": 100
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -83.92,
        "lng": -174.49,
        "color": 2,
        "size": 30,
        "slides": 101
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -71.26,
        "lng": 61.25,
        "color": 2,
        "size": 30,
        "slides": 102
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 30,
        "lng": -172.18,
        "color": 2,
        "size": 30,
        "slides": 103
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 74.61,
        "lng": 138.65,
        "color": 2,
        "size": 30,
        "slides": 104
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -44.85,
        "lng": -45.82,
        "color": 2,
        "size": 30,
        "slides": 105
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -84.87,
        "lng": -64.4,
        "color": 2,
        "size": 30,
        "slides": 106
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 84.8,
        "lng": -26.57,
        "color": 2,
        "size": 30,
        "slides": 94
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -74.99,
        "lng": -159.52,
        "color": 2,
        "size": 30,
        "slides": 95
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 23.16,
        "lng": 29.63,
        "color": 2,
        "size": 30,
        "slides": 96
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 46.53,
        "lng": 6.29,
        "color": 2,
        "size": 30,
        "slides": 97
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 51.1,
        "lng": -59.14,
        "color": 2,
        "size": 30,
        "slides": 98
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -22.52,
        "lng": -168.02,
        "color": 2,
        "size": 30,
        "slides": 99
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 76.68,
        "lng": -158.25,
        "color": 2,
        "size": 30,
        "slides": 100
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 25.59,
        "lng": 110.79,
        "color": 2,
        "size": 30,
        "slides": 101
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -75.62,
        "lng": 111.19,
        "color": 2,
        "size": 30,
        "slides": 102
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -10.11,
        "lng": 175.96,
        "color": 2,
        "size": 30,
        "slides": 103
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 66.18,
        "lng": -16.25,
        "color": 2,
        "size": 30,
        "slides": 104
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 15.65,
        "lng": 118,
        "color": 2,
        "size": 30,
        "slides": 105
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 20.6,
        "lng": 43.16,
        "color": 2,
        "size": 30,
        "slides": 106
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 88.98,
        "lng": -147.48,
        "color": 2,
        "size": 30,
        "slides": 94
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -84.83,
        "lng": 83.08,
        "color": 2,
        "size": 30,
        "slides": 95
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -23.17,
        "lng": -76.39,
        "color": 2,
        "size": 30,
        "slides": 96
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 7.2,
        "lng": -38.14,
        "color": 2,
        "size": 30,
        "slides": 97
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 3.09,
        "lng": -80.99,
        "color": 2,
        "size": 30,
        "slides": 98
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 21.09,
        "lng": -97,
        "color": 2,
        "size": 30,
        "slides": 99
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 46.29,
        "lng": -148.51,
        "color": 2,
        "size": 30,
        "slides": 100
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 80.06,
        "lng": 65.68,
        "color": 2,
        "size": 30,
        "slides": 101
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 5.86,
        "lng": -126.16,
        "color": 2,
        "size": 30,
        "slides": 102
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 26.43,
        "lng": 39.9,
        "color": 2,
        "size": 30,
        "slides": 103
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -79.95,
        "lng": -142.18,
        "color": 2,
        "size": 30,
        "slides": 104
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -35.28,
        "lng": -105.69,
        "color": 2,
        "size": 30,
        "slides": 105
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 16.89,
        "lng": -148.42,
        "color": 2,
        "size": 30,
        "slides": 106
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 62,
        "lng": 43.11,
        "color": 2,
        "size": 30,
        "slides": 94
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -35.89,
        "lng": -151.94,
        "color": 2,
        "size": 30,
        "slides": 95
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -4.44,
        "lng": 66.94,
        "color": 2,
        "size": 30,
        "slides": 96
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 62.56,
        "lng": 124.94,
        "color": 2,
        "size": 30,
        "slides": 97
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -80.07,
        "lng": -177.8,
        "color": 2,
        "size": 30,
        "slides": 98
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 52.77,
        "lng": -35.05,
        "color": 2,
        "size": 30,
        "slides": 99
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -7.9,
        "lng": -22.67,
        "color": 2,
        "size": 30,
        "slides": 100
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -5.47,
        "lng": -36.82,
        "color": 2,
        "size": 30,
        "slides": 101
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -37.33,
        "lng": -110.12,
        "color": 2,
        "size": 30,
        "slides": 102
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 60.77,
        "lng": -26.71,
        "color": 2,
        "size": 30,
        "slides": 103
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -71.09,
        "lng": -123.52,
        "color": 2,
        "size": 30,
        "slides": 104
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 55.95,
        "lng": 104.99,
        "color": 2,
        "size": 30,
        "slides": 105
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 15.32,
        "lng": -71.66,
        "color": 2,
        "size": 30,
        "slides": 106
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -51.48,
        "lng": -0.02,
        "color": 2,
        "size": 30,
        "slides": 94
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 81.36,
        "lng": 155.99,
        "color": 2,
        "size": 30,
        "slides": 95
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -67.83,
        "lng": 47.43,
        "color": 2,
        "size": 30,
        "slides": 96
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 5.25,
        "lng": 47.35,
        "color": 2,
        "size": 30,
        "slides": 97
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -35.2,
        "lng": -170.82,
        "color": 2,
        "size": 30,
        "slides": 98
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -69.05,
        "lng": -64.01,
        "color": 2,
        "size": 30,
        "slides": 99
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 28.67,
        "lng": 22.29,
        "color": 2,
        "size": 30,
        "slides": 100
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 37.14,
        "lng": -127.23,
        "color": 2,
        "size": 30,
        "slides": 101
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 41.71,
        "lng": -51.64,
        "color": 2,
        "size": 30,
        "slides": 102
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 1.78,
        "lng": -33.7,
        "color": 2,
        "size": 30,
        "slides": 103
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -16.14,
        "lng": 71.38,
        "color": 2,
        "size": 30,
        "slides": 104
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -76.97,
        "lng": 161.44,
        "color": 2,
        "size": 30,
        "slides": 105
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -80.91,
        "lng": 10.72,
        "color": 2,
        "size": 30,
        "slides": 106
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 83.4,
        "lng": -52.52,
        "color": 2,
        "size": 30,
        "slides": 94
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -78.07,
        "lng": -147.13,
        "color": 2,
        "size": 30,
        "slides": 95
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 56.92,
        "lng": 72.84,
        "color": 2,
        "size": 30,
        "slides": 96
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 11.4,
        "lng": 20.16,
        "color": 2,
        "size": 30,
        "slides": 97
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 62.04,
        "lng": -7.24,
        "color": 2,
        "size": 30,
        "slides": 98
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 5.2,
        "lng": 151.61,
        "color": 2,
        "size": 30,
        "slides": 99
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -4.21,
        "lng": -127.44,
        "color": 2,
        "size": 30,
        "slides": 100
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 8.31,
        "lng": 150.16,
        "color": 2,
        "size": 30,
        "slides": 101
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 42.64,
        "lng": 0.03,
        "color": 2,
        "size": 30,
        "slides": 102
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 9.95,
        "lng": -170.15,
        "color": 2,
        "size": 30,
        "slides": 103
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 77.9,
        "lng": 147.38,
        "color": 2,
        "size": 30,
        "slides": 104
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 72.57,
        "lng": -52.07,
        "color": 2,
        "size": 30,
        "slides": 105
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -52.85,
        "lng": 88.89,
        "color": 2,
        "size": 30,
        "slides": 106
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 43.88,
        "lng": 164.92,
        "color": 2,
        "size": 30,
        "slides": 94
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -39.8,
        "lng": 81.46,
        "color": 2,
        "size": 30,
        "slides": 95
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 75.62,
        "lng": 52.05,
        "color": 2,
        "size": 30,
        "slides": 96
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -18.22,
        "lng": -148.04,
        "color": 2,
        "size": 30,
        "slides": 97
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -59.21,
        "lng": 17.44,
        "color": 2,
        "size": 30,
        "slides": 98
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": -40.93,
        "lng": 8.49,
        "color": 2,
        "size": 30,
        "slides": 99
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 63.54,
        "lng": -91.79,
        "color": 2,
        "size": 30,
        "slides": 100
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 63.81,
        "lng": -160.81,
        "color": 2,
        "size": 30,
        "slides": 101
    },
    {
        "id": "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD",
        "lat": 40.46,
        "lng": -13.66,
        "color": 2,
        "size": 30,
        "slides": 102
    }
]



/* export const planetNuggetData = [ //ID, LATITUDE, LONGITUDE, COLOR (see palette.js), SIZE (10-99), SLIDE-CAROUSEL-ID
{id: "8AFB6122-F192-48A0-A6D1-7A21ACAAF6BD", lat: -38, lng: 95, color: 2, size: 300, slides: 94},
{id: "0B9E2C1B-258D-4D9B-A777-519BCCF889D2", lat: 27, lng: 49, color: 2, size: 300, slides: 95},
{id: "43F13382-5AC9-4705-A1F9-ADE764269F0A", lat: 30, lng: 10, color: 2, size: 300, slides: 96},
{id: "C6E10CC1-EB1B-42B1-AA34-4F9753486601", lat: 31.5, lng: -30, color: 2, size: 300, slides: 97},
{id: "C8A28E83-DE30-4FEF-B1C8-893DF3836692", lat: 67, lng: -48, color: 2, size: 300, slides: 98},
{id: "EF773EF3-0A60-42B6-B05A-BDC7BDED59AB", lat: 30.5, lng: -115, color: 2, size: 300, slides: 99},
{id: "4BD0896D-F543-4DE3-8C43-D2C29F9D6FCB", lat: 31, lng: -151, color: 2, size: 300, slides: 100},
{id: "63C7D0C9-FC0D-49A6-B8F0-1682617A396A", lat: 7, lng: -147, color: 2, size: 300, slides: 101},
{id: "AF05DA75-41AC-4793-80A4-11110E081BF6", lat: 51.5, lng: 119.5, color: 2, size: 300, slides: 102},
{id: "54500943-65EA-401B-B4B2-6C671BE363B3", lat: 21, lng: 138.2, color: 2, size: 300, slides: 103},
{id: "5998C6F2-1237-4A85-98E2-0DEED4DADB00", lat: 7.1, lng: 117, color: 2, size: 300, slides: 104},
{id: "F6DC855A-EFD1-47B8-BB13-979B0FC36719", lat: 34, lng: 79.5, color: 2, size: 300, slides: 105},
{id: "9A2A330C-6107-4E21-9F20-4199D79D9D3A", lat: 13.5, lng: 103.5, color: 2, size: 300, slides: 106},
]; */


/* export const planetNuggetData = [ //ID, LATITUDE, LONGITUDE, COLOR (see palette.js), SIZE (10-99), SLIDE-CAROUSEL-ID
{id: "D6339C95-78BC-41F9-8588-6037DFEC311A", lat: 0, lng: 80, color: 2, size: 100, slides: 94},
{id: "C9A98AD7-7509-4DA1-9B9B-D07044988879", lat: 0, lng: 60, color: 2, size: 100, slides: 94},
{id: "3F9C8574-BDCD-4966-BACA-85DCC771C111", lat: 0, lng: 40, color: 2, size: 100, slides: 94},
{id: "32D85377-4F15-40D9-872F-2FC085FED635", lat: 0, lng: 20, color: 2, size: 100, slides: 94},
{id: "6C937628-F445-4E9F-AE87-2C25DE4E4218", lat: 0, lng: -0, color: 2, size: 100, slides: 94},
{id: "2E3CD24F-0B46-4F24-922C-9B3E3F3CE6D3", lat: 0, lng: -20, color: 2, size: 100, slides: 94},
{id: "BFDB7229-2C46-4205-9E2E-B962F2C164C0", lat: 0, lng: -40, color: 2, size: 100, slides: 94},
{id: "BEDBC8F5-589D-4474-8C29-4544A1235750", lat: 0, lng: -60, color: 2, size: 100, slides: 94},
{id: "DA94A53B-8302-4F8E-82A1-F2DF24D7B8FA", lat: 0, lng: -80, color: 2, size: 100, slides: 94},
{id: "D3D7943C-48BC-4417-886A-48AFE869D1A6", lat: 0, lng: -100, color: 2, size: 100, slides: 94},
{id: "7BA4C0C3-F4A9-479F-9CFA-C882394D0B2B", lat: 0, lng: -120, color: 2, size: 100, slides: 94},
{id: "02FB0A7F-08AA-4224-9277-2E228227670E", lat: 0, lng: -140, color: 2, size: 100, slides: 94},
{id: "208919AD-A25E-4D1A-8559-450D4D59B693", lat: 0, lng: -160, color: 2, size: 100, slides: 94},
{id: "D4917044-C13B-487D-8FA2-6485D63F8B8F", lat: 0, lng: -180, color: 2, size: 100, slides: 94},
{id: "7255A015-6EC9-4D3D-AE51-01597FD327B0", lat: 0, lng: 160, color: 2, size: 100, slides: 94},
{id: "0E6D02C5-A860-40E0-89F2-D54B5057FD07", lat: 0, lng: 140, color: 2, size: 100, slides: 94},
{id: "394C48D0-7A3B-4B35-B20C-AC8FB8572BBA", lat: 0, lng: 120, color: 2, size: 100, slides: 94},
{id: "F7044C96-6582-47C7-AA03-65F16A441CB9", lat: 0, lng: 100, color: 2, size: 100, slides: 94},

]; */